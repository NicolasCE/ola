using System;
using System.Collections.Generic;

namespace shap_MD.Models
{
    public partial class DietaCopium
    {
        public DietaCopium()
        {
            IngredienteDietaCs = new HashSet<IngredienteDietaC>();
        }

        public int Id { get; set; }
        public string? Nombre { get; set; }
        public string? Descripcion { get; set; }
        public string? Categoria { get; set; }
        public int? IdComent { get; set; }

        public virtual ComentarioCopium? IdComentNavigation { get; set; }
        public virtual ICollection<IngredienteDietaC> IngredienteDietaCs { get; set; }
    }
}
