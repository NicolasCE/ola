using System;
using System.Collections.Generic;

namespace shap_MD.Models
{
    public partial class Citum
    {
        public int Id { get; set; }
        public TimeOnly? Hora { get; set; }
        public DateOnly? Fecha { get; set; }
        public string? RutPaciente { get; set; }
        public string? RutProfecional { get; set; }

        public virtual Paciente? RutPacienteNavigation { get; set; }
        public virtual Profesional? RutProfecionalNavigation { get; set; }
    }
}
