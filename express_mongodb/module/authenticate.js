import Jwt from "jsonwebtoken";
import { buscar, agregarToken, buscar3 } from "./operationsdb.js";

const key = "bXlTZWNyZXRQYXNzd29yZG15U2VjcmV0UGFzc3dvcmQK";

//generar token de autorizacion
export const generaToken = (username) => {

    return Jwt.sign({ username }, key, {
        expiresIn: "1800s", //other example: "24h" - tiempo de expiracion del token 
    });
};

//solo autentica
//middleware
export const authenticateToken = (req, res, next) => { //req: puede llegar partes de body y cabecera
    try {
        const authHeader = req.headers["x-auth"];
        const token = authHeader.split("")[1];
        if (token == null) return res.status(401).send({ message: "sin token" });
        Jwt.verify(token, key, (err, user) => {
            if (err) return res.status(403).send({ message: "Token no valido" });
            req.user = user;
            next();
        });
    } catch (error) {
        res.status(404).json({ ms: "sin token" });
    }
};

//funcion de login
//verifica que en la base de dato exista el usuario (user, password)
//si el usuario es valido le genera un token y lo agrega al usuario a la coleccion.
export const validUser = (req, res, next) => {
    const { user, pass } = req.body;
    const collection = "users";
    const filter = { $and: [{ user: user }, { pass: pass }] };
    (async () => {
        const result = await buscar(collection, filter);
        const result3 = await buscar3(collection, filter);
        if (result.length >= 1) {
            (async () => {
                const tokenUser = generaToken(user);
                const result = await agregarToken(collection, user, tokenUser);
                if (result != undefined) {
                    res.status(201).json({ token: tokenUser, rol: result3.rol });
                    next();
                } else {
                    res.status(404).json({ ms: "error al generar token" });
                }
            })();
        } else {
            res.status(404).json({ ms: "datos incorrectos." });
        }
    })();
};