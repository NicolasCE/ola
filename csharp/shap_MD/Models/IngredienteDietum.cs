using System;
using System.Collections.Generic;

namespace shap_MD.Models
{
    public partial class IngredienteDietum
    {
        public int Id { get; set; }
        public int? Porciones { get; set; }
        public int? IdIngr { get; set; }
        public int? IdDieta { get; set; }

        public virtual DietaOriginal? IdDietaNavigation { get; set; }
        public virtual Ingrediente? IdIngrNavigation { get; set; }
    }
}
