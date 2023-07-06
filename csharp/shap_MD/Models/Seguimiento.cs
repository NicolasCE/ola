using System;
using System.Collections.Generic;

namespace shap_MD.Models
{
    public partial class Seguimiento
    {
        public int Id { get; set; }
        public DateOnly? Fecha { get; set; }
        public double? Peso { get; set; }
        public double? Estatura { get; set; }
        public string? Observacion { get; set; }
        public string? RutPaciente { get; set; }
        public string? RutProfesional { get; set; }

        public virtual Paciente? RutPacienteNavigation { get; set; }
        public virtual Profesional? RutProfesionalNavigation { get; set; }
    }
}
