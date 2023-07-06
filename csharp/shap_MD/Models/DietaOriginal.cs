using System;
using System.Collections.Generic;

namespace shap_MD.Models
{
    public partial class DietaOriginal
    {
        public DietaOriginal()
        {
            IngredienteDieta = new HashSet<IngredienteDietum>();
        }

        public int Id { get; set; }
        public string? Nombre { get; set; }
        public string? Descripcion { get; set; }
        public string? Categoria { get; set; }
        public int? IdComen { get; set; }

        public virtual Comentario? IdComenNavigation { get; set; }
        public virtual ICollection<IngredienteDietum> IngredienteDieta { get; set; }
    }
}
