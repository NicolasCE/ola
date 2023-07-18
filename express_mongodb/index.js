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
    dietaEdit,
    eliminarDietaxid,
    mostrarDietas,
    infoNutriAdd,
    eliminarxinfonutri,
    mostrarIngredientes,
    profesionalEditEstado,
    verInfoNutri,
    infoNutriEdit,
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
app.delete("/app/pacientes/eliminar/:rut", (req, res, next) => {
    let rut = req.params.rut;
    console.log(rut);
    (async () => {
        await eliminarPacientexrut(rut);
        await res.status(201).json({ ms: "Paciente eliminado" });
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
    const { nombre, fechaNac, sexo, edad, peso, descripcion, estado, telefono, correo, apellidos } = req.body;
    (async () => {
        const result = await pacientesEdit(rut, nombre, fechaNac, sexo, edad, peso, descripcion, estado, apellidos, correo, telefono);
        await res.status(200).json({ Pacientes: result });
    })();
});

//editar dieta
app.put("/app/dieta/edit/:id", (req, res, next) => {
    const { id } = req.params;
    const { nombre, descripcion, categoria } = req.body;
    (async () => {
        const result = await dietaEdit(id, nombre, descripcion, categoria);
        await res.status(200).json({ Dieta: result });
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
        await res.status(200).json({ ms: "Dieta añadida con exito!" })
    });
});


//eliminar dieta x id
app.delete("/app/dietas/eliminar/:id", (req, res, next) => {
    let id = req.params.id;
    console.log(id);
    (async () => {
        await eliminarDietaxid(id);
        await res.status(200).json({ ms: "dieta eliminada" });
    })();
});

//Visualizar dieta 
app.get("/app/ver/dietas", (req, res, next) => {
    (async () => {
        const result = await mostrarDietas();
        await res.status(200).json({ Dieta: result });
    })();
});


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
app.put('/app/profesional/editEstado/:rut', (req, res, next) => {
    const { rut } = req.params;
    const { estado } = req.body;

    (async () => {
        const result = await profesionalEditEstado(rut, estado);
        await res.status(200).json({ Profesionales: result });
    })();
});

//------15-07-2023---------------

//agregar info nutricional
app.post("/app/infonutri/add", (req, res, next) => {
    (async () => {
        await infoNutriAdd(req.body);
        await res.status(200)({ ms: "Informacion Nutricional agregado!" })
    });
});


//editar info nutricinoal
app.put("/app/infonutri/edit/:id", (req, res, next) => {
    const { id } = req.params;
    const { porciones } = req.body;

    (async () => {
        const result = await infoNutriEdit(id, porciones);
        await res.status(200).json({ NutriEdit: result });
    })
});

//eliminar informacion nutriconal x id... tabla ingredientes_dieta
app.delete("/app/infonutri/eliminar/:id", (req, res, next) => {
    let id = req.params.id;
    console.log(id);
    (async () => {
        await eliminarxinfonutri(id);
        await res.status(200).json({ ms: "Informacion Nutricional Eliminada!" });
    })();
});


//ver informacion nutricional
app.get("/app/ver/infonutri", (req, res, next) => {
    (async () => {
        const result = await verInfoNutri();
        await res.status(200).json({ Nutri: result })
    })();
});

//configuracion del servidor
const port = 4000;
app.listen(port, async () => {
    console.log(`App server listening at http://localhost:${port}`);
});