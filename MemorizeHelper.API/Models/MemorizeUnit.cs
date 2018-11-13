using System;
using System.Collections.Generic;

namespace MemorizeHelper.API.Models
{
    public class MemorizeUnit
    {

        public int Id { get; set; }

        public string OwnerUsername { get; set; }

        public List<User_> SubscribedUsers { get; set; }

        public string Title { get; set; }

        public Content UnitContent { get; set; }
        
        public String StringContent { get; set; }

        public virtual List<Schedule> Schedules { get; set; }

        public string SubjectName { set; get; }

        public bool IsPrivate { get; set; }

        public DateTime  CreationDate { get; set; }

        public string Priority { get; set; }

        public string Tags { get; set; }

    }
}