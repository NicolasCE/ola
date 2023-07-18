using shap_MD.Models;
using Microsoft.EntityFrameworkCore;
var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();


app.MapGet("/", () => "Hello World!");

//mostrar pacientes
app.MapGet("/app/ver/pacientes", () =>
{
    medical_dietContext db = new medical_dietContext();
    var lista = db.Pacientes.ToList();
    return Results.Ok(lista);
});

//añadir paciente
app.MapPost("/app/pacientes/add", (Paciente paciente) =>
{
    medical_dietContext db = new medical_dietContext();
    db.Pacientes.Add(paciente);
    int n = db.SaveChanges();
    if (n > 0)
        return Results.Accepted("paciente agregado");
    else
        return Results.Problem();
});

//eliminar paciente por rut
app.MapDelete("/app/pacientes/eliminar/{rut}", (string rut) =>
{
    medical_dietContext db = new medical_dietContext();
    var paciente = new Paciente { Rut = rut };
    db.Entry(paciente).State = EntityState.Deleted;
    int k = db.SaveChanges();
    return k == 0 ? Results.Problem() : Results.Ok("Paciente Eliminado");
});

//mostrar pacientes
app.MapGet("/app/pacientes", () =>
{
    medical_dietContext db = new medical_dietContext();
    var lista = db.Pacientes.ToList();
    return Results.Ok(lista);
});

//mostrar profesionales
app.MapGet("/app/profesionales", () =>
{
    medical_dietContext db = new medical_dietContext();
    var lista = db.Profesionals.ToList();
    return Results.Ok(lista);
});


//añadir especialista
app.MapPost("/app/profesional/add", (Profesional profesional) =>
{
    medical_dietContext db = new medical_dietContext();
    db.Profesionals.Add(profesional);
    int n = db.SaveChanges();
    if (n > 0)
        return Results.Accepted("profesional agregado");
    else
        return Results.Problem();
});

//editar perfiles pacientes 
app.MapPut("/app/pacientes/edit", (Paciente paciente) =>
{
    System.Console.WriteLine(paciente.Rut);
    //System.Console.WriteLine(paciente.Nombre);
    medical_dietContext db = new medical_dietContext();
    var pacientess2 = db.Pacientes.FirstOrDefault(p => p.Rut == paciente.Rut);
    System.Console.WriteLine(pacientess2);
    //pacientess2.Rut = paciente.Rut;
    pacientess2.Nombre = paciente.Nombre;
    pacientess2.FechaNac = paciente.FechaNac;
    pacientess2.Apellidos = paciente.Apellidos;
    pacientess2.Telefono = paciente.Telefono;
    pacientess2.Correo = paciente.Correo;
    pacientess2.Sexo = paciente.Sexo;
    pacientess2.Edad = paciente.Edad;
    pacientess2.Peso = paciente.Peso;
    pacientess2.Descripcion = paciente.Descripcion;
    db.Entry(pacientess2).State = EntityState.Modified;
    int element = db.SaveChanges();
    var lista = db.Pacientes.ToList();
    return Results.Ok(lista);
});

//editar la dieta
app.MapPut("/app/dieta/edit", (DietaOriginal dieta) =>
{
    {
        System.Console.WriteLine(dieta.Id);
        medical_dietContext db = new medical_dietContext();
        var dietaa2 = db.DietaOriginals.FirstOrDefault(p => p.Id == dieta.Id);
        System.Console.WriteLine(dietaa2);
        dietaa2.Nombre = dieta.Nombre;
        dietaa2.Descripcion = dieta.Descripcion;
        dietaa2.Categoria = dieta.Categoria;
        db.Entry(dietaa2).State = EntityState.Modified;
        int element = db.SaveChanges();
        var lista = db.DietaOriginals.ToList();
        return Results.Ok(lista);
    }
});

//añadir citas
app.MapPost("/app/citas/add", (Citum citum) =>
{
    medical_dietContext db = new medical_dietContext();
    db.Cita.Add(citum);
    int n = db.SaveChanges();
    if (n > 0)
        return Results.Accepted("cita agregada");
    else
        return Results.Problem();
});

//--------------------------------------------------------------------------------------------

//MODULO PROFESIONAL
//Crear dietas
app.MapPost("/app/dietas/add", (DietaOriginal dietaOriginal) =>
{
    medical_dietContext db = new medical_dietContext();
    db.DietaOriginals.Add(dietaOriginal);
    int n = db.SaveChanges();
    if (n > 0)
        return Results.Accepted("dieta agregada");
    else
        return Results.Problem();
});

//eliminar dieta x id
app.MapDelete("/app/dietas/eliminar/{id:int}", (int id) =>
{
    medical_dietContext db = new medical_dietContext();
    var dietas = new DietaOriginal { Id = id };
    db.Entry(dietas).State = EntityState.Deleted;
    int k = db.SaveChanges();
    return k == 0 ? Results.Problem() : Results.Ok("Dieta eliminada!");
});

//mostrar dietas e imagenes
app.MapGet("/app/dietas", () =>
{
    medical_dietContext db = new medical_dietContext();
    var k = db.DietaOriginals.ToList();
    return Results.Ok(k);
});


//mostrar ingredientes
app.MapGet("/app/mostrarIngredientes", () =>
{
    medical_dietContext db = new medical_dietContext();
    var lista = db.Ingredientes.ToList();
    return Results.Ok(lista);
});

//editar estado de activo a bloquea y de bloqueado a activo
app.MapPut("/app/actEstado", (Paciente paciente) =>
{
    System.Console.WriteLine(paciente.Rut);
    medical_dietContext db = new medical_dietContext();
    //var pacientess = new Paciente {Rut = paciente.Rut};
    var pacientess = db.Pacientes.FirstOrDefault(p => p.Rut == paciente.Rut);
    pacientess.Estado = paciente.Estado;
    System.Console.WriteLine(pacientess);
    db.Entry(pacientess).State = EntityState.Modified;
    int element = db.SaveChanges();
    var lista = db.Pacientes.ToList();
    return Results.Ok(lista);
});

//editar estado de activo a blopqueado de profesional
app.MapPut("/app/actEstado/profesional", (Profesional profesional) =>
{
    System.Console.WriteLine(profesional.Rut);
    medical_dietContext db = new medical_dietContext();
    var profesionall = db.Profesionals.FirstOrDefault(p => p.Rut == profesional.Rut);
    profesionall.Estado = profesional.Estado;
    System.Console.WriteLine(profesionall);
    db.Entry(profesionall).State = EntityState.Modified;
    int element = db.SaveChanges();
    var lista = db.Profesionals.ToList();
    return Results.Ok(lista);
});

//add ingre_dieta
app.MapPost("/app/ingrediente0/add", (Ingrediente ingrediente) =>
{
    medical_dietContext db = new medical_dietContext();
    db.Ingredientes.Add(ingrediente);
    int n = db.SaveChanges();
    if (n > 0)
        return Results.Accepted("ingrediente agregado");
    else
        return Results.Problem();
});


//crear informacion nutricional... tabla ingredientes_dieta
app.MapPost("/app/infonutri/add", (IngredienteDietum infonutri) =>
{
    medical_dietContext db = new medical_dietContext();
    db.IngredienteDieta.Add(infonutri);
    int n = db.SaveChanges();
    if (n > 0)
        return Results.Accepted("Informacion nutricional agregada");
    else
        return Results.Problem();
});

//eliminar por id, informacion nutricional... tabla ingredientes_dieta
app.MapDelete("/app/infonutri/eliminar/{id:int}", (int id) =>
{
    medical_dietContext db = new medical_dietContext();
    var infonutri = new IngredienteDietum { Id = id };
    db.Entry(infonutri).State = EntityState.Deleted;
    int k = db.SaveChanges();
    return k == 0 ? Results.Problem() : Results.Ok("Informacion Nutricional eliminada!");
});

//editar informacion nutriciconal
app.MapPut("/app/infonutri/edit", (IngredienteDietum infonutri) =>
{
    System.Console.WriteLine(infonutri.Id);
    medical_dietContext db = new medical_dietContext();
    var infonutrii = db.IngredienteDieta.FirstOrDefault(p => p.Id == infonutri.Id);
    infonutrii.Porciones = infonutri.Porciones;
    System.Console.WriteLine(infonutrii);
    db.Entry(infonutrii).State = EntityState.Modified;
    int element = db.SaveChanges();
    var lista = db.IngredienteDieta.ToList();
    return Results.Ok(lista);
});

//ver infonutri
app.MapGet("/app/ver/infonutri", () =>
{
    medical_dietContext db = new medical_dietContext();
    var k = db.IngredienteDieta.ToList();
    return Results.Ok(k);
});



app.Run();
