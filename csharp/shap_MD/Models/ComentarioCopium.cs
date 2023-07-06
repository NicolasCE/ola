using System;
using System.Collections.Generic;

namespace shap_MD.Models
{
    public partial class ComentarioCopium
    {
        public ComentarioCopium()
        {
            DietaCopia = new HashSet<DietaCopium>();
        }

        public int Id { get; set; }
        public string? Descripcion { get; set; }
        public DateOnly? Fecha { get; set; }
        public TimeOnly? Hora { get; set; }

        public virtual ICollection<DietaCopium> DietaCopia { get; set; }
    }
}
