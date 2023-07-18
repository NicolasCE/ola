import fetch from "node-fetch";

//mostrar pacientes
export const mostrarPacientes = async () => {
    const URL = "http://localhost:5110/app/ver/pacientes";
    //const URL = "http://localhost:5110/app/dietas";
    const Headers = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    };
    const response = await fetch(URL, Headers);
    const result = await response.json();
    return result;
};

//agregar pacientes
export const pacientesAdd = async (pacientes) => {
    try {
        const URL = "http://localhost:5110/app/pacientes/add";
        const data = pacientes;
        const Headers = {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
        };
        const response = await fetch(URL, Headers);
        const result = await response.json();
    } catch (error) { }
};


//mostrar profesionales
export const mostrarProfesionales = async () => {
    const URL = "http://localhost:5110/app/profesionales";
    const Headers = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    };
    const response = await fetch(URL, Headers);
    const result = await response.json();
    return result;
};


//eliminar paciente x rut
export const eliminarPacientexrut = async (rut) => {
    try {
        const URL = `http://localhost:5110/app/pacientes/eliminar/${rut}`;
        const Headers = {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        };
        const response = await fetch(URL, Headers);
        const result = await response.json();
        console.log(result);
    } catch (error) { }
};



//2.- agregar profesionales
export const ProfesionalesAdd = async (profesionales) => {
    try {
        const URL = "http://localhost:5110/app/profesional/add";
        const data = profesionales;
        const Headers = {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
        };
        const response = await fetch(URL, Headers);
        const result = await response.json();
        console.log(result);
    } catch (error) { }
};

//3.- editar estado de activo a bloquea y de bloqueado a activo
export const pacientesEditEstado = async (Rut, Estado) => {
    try {
        const URL = `http://localhost:5110/app/actEstado`;
        const data = {
            Rut, Estado
        };
        const Headers = {
            method: "PUT",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
        };
        const response = await fetch(URL, Headers);
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) { }
};

//4.- editar paciente por rut
export const pacientesEdit = async (Rut, nombre, fechaNac, sexo, edad, peso, descripcion, estado, apellidos, correo, telefono) => {
    try {
        const URL = `http://localhost:5110/app/pacientes/edit`;
        const data = {
            Rut,
            nombre,
            fechaNac,
            sexo,
            edad,
            peso,
            descripcion,
            estado,
            apellidos,
            correo,
            telefono
        };
        console.log(data);
        const Headers = {
            method: "PUT",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
        };
        const response = await fetch(URL, Headers);
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
    }
};

//editar dieta
export const dietaEdit = async (Id, nombre, descripcion, categoria) => {
    try {
        const URL = `http://localhost:5110/app/dieta/edit`;
        const data = {
            Id,
            nombre,
            descripcion,
            categoria
        };
        console.log(data);
        const Headers = {
            method: "PUT",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
        };
        const response = await fetch(URL, Headers);
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
    }
};

//editar informacion nutricional
export const infoNutriEdit = async (Id, porciones) => {
    try {
        const URL = `http://localhost:5110/app/infonutri/edit`;
        const data = {
            Id,
            porciones
        };
        console.log(data);
        const Headers = {
            method: "PUT",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
        };
        const response = await fetch(URL, Headers);
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error(error);
    };
};

//añadir cita
export const citasAdd = async (citas) => {
    try {
        const URL = "http://localhost:5110/app/citas/add";
        const data = citas;
        const Headers = {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
        };
        const response = await fetch(URL, Headers);
        const result = await response.json();
    } catch (error) { }
};




//-----------------------------------------------------------------

//MODULO PROFESIONAL
//Añadir dieta
export const dietasAdd = async (dietas) => {
    try {
        const URL = "http://localhost:5110/app/dietas/add";
        const data = dietas;
        const Headers = {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
        };
        const response = await fetch(URL, Headers);
        const result = await response.json();
    } catch (error) { }
};

//eliminar dieta x id
export const eliminarDietaxid = async (id) => {
    try {
        const URL = `http://localhost:5110/app/dietas/eliminar/${id}`;
        const Headers = {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        };
        const response = await fetch(URL, Headers);
        const result = await response.json();
        console.log(result);
    } catch (error) { }
};

//mostrar dietas 
export const mostrarDietas = async () => {
    // const URL = "http://localhost:5110/app/ver/pacientes";
    const URL = "http://localhost:5110/app/dietas";
    const Headers = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    };
    const response = await fetch(URL, Headers);
    const result = await response.json();
    return result;
};


//mostrar ingredientes
export const mostrarIngredientes = async () => {
    const URL = "http://localhost:5110/app/mostrarIngredientes";
    const Headers = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
    };
    const response = await fetch(URL, Headers);
    const result = await response.json();
    return result;
};


//editar estado de activo a bloqueado y viceversa de profesional

export const profesionalEditEstado = async (Rut, Estado) => {
    try {
        const URL = `http://localhost:5110/app/actEstado/profesional`;
        const data = {
            Rut, Estado
        };
        const Headers = {
            method: "PUT",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
        };
        const response = await fetch(URL, Headers);
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) { }
};


//fecha: 15-07-2023

//ver informacion nutricional
export const verInfoNutri = async () =>{
    const URL = "http://localhost:5110/app/ver/infonutri";
    const Headers = {
        method: "GET",
        headers: {"Content-Type": "application/json"},
    };
    const response = await fetch(URL, Headers);
    const result = await response.json();
    return result;
};

//añadir informacion nutricional... tabla ingredientes_dieta
export const infoNutriAdd = async (infonutri) => {
    try {
        const URL = "http://localhost:5110/app/infonutri/add";
        const data = infonutri;
        const Headers = {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
        };
        const response = await fetch(URL, Headers);
        const result = await response.json();
    } catch (error) { }
};


//eliminar informacion nutricional... tabla ingredientes_dieta
export const eliminarxinfonutri = async (id) => {
    try {
        const URL = `http://localhost:5110/app/infonutri/eliminar/${id}`;
        const Headers = {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
        };
        const response = await fetch(URL, Headers);
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) { }
};

