import mongo from "mongodb";
const url = "mongodb://localhost:27017/";
const db = "md2023";
import { MongoClient } from 'mongodb';


//funciones
//uscar usuario     |  collection, filter 
export const buscar = async (c, f) => {
    const client = await mongo.MongoClient.connect(url);
    try {
        return await client
            .db(db)
            .collection(c)
            .find(f)
            .toArray();
    } catch {
        return undefined;
    }
};

export const buscar3 = async (c, f) => {
    const url = 'mongodb://localhost:27017';
    const client = await MongoClient.connect(url);
    try {
        const collection = client.db(db).collection(c);
        const resultado = await collection.findOne(f);
        console.log(resultado);
        return resultado;

    } catch (error) {
        console.error('Error al buscar los elementos:', error);
        return undefined;
    } finally {
        client.close();
    }
};

//2- actualizar usuario, asignando un token
export const agregarToken = async (c, user, token) => {
    const client = await mongo.MongoClient.connect(url);
    try {
        return await client
            .db(db)
            .collection(c)
            .updateMany({ user: user }, { $set: { token: token } });
    } catch {
        return undefined;
    }
};
