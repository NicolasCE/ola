using System;
using System.Collections.Generic;

namespace shap_MD.Models
{
    public partial class Profesional
    {
        public Profesional()
        {
            Administradors = new HashSet<Administrador>();
            Cita = new HashSet<Citum>();
            Seguimientos = new HashSet<Seguimiento>();
        }

        public string Rut { get; set; } = null!;
        public string? Nombre { get; set; }
        public string? Especialidad { get; set; }
        public bool? Estado { get; set; }

        public virtual ICollection<Administrador> Administradors { get; set; }
        public virtual ICollection<Citum> Cita { get; set; }
        public virtual ICollection<Seguimiento> Seguimientos { get; set; }
    }
}
