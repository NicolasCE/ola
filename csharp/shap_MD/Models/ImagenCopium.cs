using System;
using System.Collections.Generic;

namespace shap_MD.Models
{
    public partial class ImagenCopium
    {
        public ImagenCopium()
        {
            IngredienteCs = new HashSet<IngredienteC>();
        }

        public int Id { get; set; }
        public string? Url { get; set; }

        public virtual ICollection<IngredienteC> IngredienteCs { get; set; }
    }
}
