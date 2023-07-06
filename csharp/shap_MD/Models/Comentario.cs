using System;
using System.Collections.Generic;

namespace shap_MD.Models
{
    public partial class Comentario
    {
        public Comentario()
        {
            DietaOriginals = new HashSet<DietaOriginal>();
        }

        public int Id { get; set; }
        public string? Descripcion { get; set; }
        public DateOnly? Fecha { get; set; }
        public TimeOnly? Hora { get; set; }

        public virtual ICollection<DietaOriginal> DietaOriginals { get; set; }
    }
}
