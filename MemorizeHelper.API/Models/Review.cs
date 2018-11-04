using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MemorizeHelper.API.Models
{
    public class Review
    {
        public int Id { get; set; }
        public List<DateTime> Dates { set; get; }
    }
}
