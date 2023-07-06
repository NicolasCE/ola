using System;
using System.Collections.Generic;

namespace shap_MD.Models
{
    public partial class Administrador
    {
        public string Rut { get; set; } = null!;
        public string? Nombre { get; set; }
        public string? RutPaciente { get; set; }
        public string? RutProfecional { get; set; }

        public virtual Paciente? RutPacienteNavigation { get; set; }
        public virtual Profesional? RutProfecionalNavigation { get; set; }
    }
}
