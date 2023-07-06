import express from "express";
import BodyParser from "body-parser";
import cors from "cors";

import {
    generaToken,
    validUser,
    authenticateToken,
} from "./module/authenticate.js";

//importacion de los metodos
import {
    mostrarPacientes,
    pacientesAdd,
    mostrarProfesionales,
    eliminarPacientexrut,
    ProfesionalesAdd,
    pacientesEditEstado,
    pacientesEdit,
    citasAdd,
    dietasAdd,
    eliminarDietaxid,
    mostrarDietas,
    infornutriAdd_dieta,
    //eliminarxinfonutri,
    mostrarIngredientes,
    profesionalEditEstado
} from "./module/apiExterna.js";

const app = express();
app.use(cors());

app.use(BodyParser.urlencoded({ extended: true }));
app.use(BodyParser.json());



//test
//------------------------------------------------------------------
app.get("/app/test", (req, res, next) => {
    res.status(200).json({ ms: generaToken("users") });
});

//login: da token
app.post("/app/login", validUser, (req, res, next) => {
});

//authtoken solo para iniciar sesion
app.get("/app/consultar", authenticateToken, (req, res, next) => {
    res.status(200).json({ user: req.user });
});
//--------------------------------------------------------------------

//add paciente
app.post("/app/pacientes/add", (req, res, next) => {
    (async () => {
        await pacientesAdd(req.body);
        await res.status(200).json({ ms: "Paciente añadido con exito!" });
    })();
});

//mostrar pacientes
app.get("/app/ver/pacientes", (req, res, next) => {
    (async () => {
        const result = await mostrarPacientes();
        await res.status(200).json({ Pacientes: result });
    })();
});

//mostrar profesionales
app.get("/app/profesionales", (req, res, next) => {
    (async () => {
        const result = await mostrarProfesionales();
        await res.status(200).json({ Profesionales: result });
    })();
});

//eliminarpacientexrut
app.delete("/app/pacientes/eliminar/:rut",(req,res,next)=>{
    const {rut} = req.params; 
    (async()=>{
        const result = await eliminarPacientexrut(rut);
        await res.status(200).json({Pacientes: result});
    })();
}); 


//add profesional
app.post("/app/profesional/add", (req, res, next) => {
    (async () => {
        await ProfesionalesAdd(req.body);
        await res.status(200).json({ ms: "Paciente añadido con exito!" });
    })();
});

//editar paciente
app.put("/app/pacientes/edit/:rut", (req, res, next) => {
    const { rut } = req.params;
    const { nombre,fechaNac,sexo,edad,peso,descripcion,estado,telefono,correo,apellidos } = req.body;
    (async () => {
        const result = await pacientesEdit(rut,nombre,fechaNac,sexo,edad,peso,descripcion,estado,apellidos,correo,telefono);
        await res.status(200).json({ Pacientes: result });
    })();
});


// add citas 
app.post("/app/citas/add", (req, res, next) => {
    (async () => {
        await citasAdd(req.body);
        await res.status(200).json({ ms: "Citas añadida con exito!" })
    });
});


//------------------------------------------------------------------------------

//MODULO PROFESIONAL
//creacion de dieta
app.post("/app/dietas/add", (req, res, next) => {
    (async () => {
        await dietasAdd(req.body);
        await res.status(200)({ ms: "Dieta añadida con exito!" })
    });
});


//eliminar dieta x id
app.delete("/app/dietas/eliminar/:id", (req, res, next) => {
    let id = req.params.id;
    console.log(id);
    (async () => {
        await eliminarDietaxid(id);
        await res.status(200)({ ms: "dieta eliminada" });
    })();
});

//Visualizar dieta 
app.get("/app/dietas", (req, res, next) => {
    (async () => {
        const result = await mostrarDietas();
        await res.status(200).json({ dietaOriginal: result })
    });
});

//añadir informacion nutricional... tabla ingredientes_dieta
app.post("/app/infonutri/add", (req, res, next) => {
    (async () => {
        await infornutriAdd_dieta(req.body);
        await res.status(200)({ ms: "Informacion Nutricional añadida con exito!" })
    });
});


//eliminar informacion nutriconal x id... tabla ingredientes_dieta
/*app.delete("/app/infonutri/eliminar/:id",(req,res,next)=>{
    let id = req.params.id;
    console.log(id);
    (async()=>{
        await eliminarxinfonutri(id);
        await res.status(200)({ms:"Informacion Nutricional Eliminada!"});
    })();
});
*/

//visualizar ingredientes
app.get("/app/mostrarIngredientes", (req, res, next) => {
    (async () => {
        const result = await mostrarIngredientes();
        await res.status(200).json({ Ingredientes: result });
    })();
});

//actualizar boton estado: Activo a bloqueado y bloqueado a activo
app.put('/app/pacientes/editEstado/:rut', (req, res, next) => {
    const { rut } = req.params;
    const { estado } = req.body;

    (async () => {
        const result = await pacientesEditEstado(rut, estado);
        await res.status(200).json({ Pacientes: result });
    })();
    //return pacientesEditEstado(rut,estado);

});

//actualizar boton estado: Activo a bloqueado y bloqueado a activo profesional
app.put('/app/profesional/editEstado/:rut',(req, res, next)=>{
    const { rut } = req.params;
    const { estado } = req.body;

    (async () =>{
        const result = await profesionalEditEstado(rut, estado);
        await res.status(200).json({ Profesionales: result});
    })();
});

//configuracion del servidor
const port = 4000;
app.listen(port, async () => {
    console.log(`App server listening at http://localhost:${port}`);
});