using System;
using System.Collections.Generic;

namespace shap_MD.Models
{
    public partial class IngredienteDietaC
    {
        public int Id { get; set; }
        public int? Porciones { get; set; }
        public int? IdIngr { get; set; }
        public int? IdDietaC { get; set; }
        public string? RutPaciente { get; set; }

        public virtual DietaCopium? IdDietaCNavigation { get; set; }
        public virtual IngredienteC? IdIngrNavigation { get; set; }
        public virtual Paciente? RutPacienteNavigation { get; set; }
    }
}
