using System;
using System.Collections.Generic;

namespace shap_MD.Models
{
    public partial class Paciente
    {
        public Paciente()
        {
            Administradors = new HashSet<Administrador>();
            Cita = new HashSet<Citum>();
            IngredienteDietaCs = new HashSet<IngredienteDietaC>();
            Seguimientos = new HashSet<Seguimiento>();
        }

        public string Rut { get; set; } = null!;
        public string? Nombre { get; set; }
        public string? FechaNac { get; set; }
        public string? Sexo { get; set; }
        public int? Edad { get; set; }
        public double? Peso { get; set; }
        public string? Descripcion { get; set; }
        public bool? Estado { get; set; }
        public string? Apellidos { get; set; }
        public string? Correo { get; set; }
        public int? Telefono { get; set; }

        public virtual ICollection<Administrador> Administradors { get; set; }
        public virtual ICollection<Citum> Cita { get; set; }
        public virtual ICollection<IngredienteDietaC> IngredienteDietaCs { get; set; }
        public virtual ICollection<Seguimiento> Seguimientos { get; set; }
    }
}
