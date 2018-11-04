using System;
using System.Collections.Generic;

namespace MemorizeHelper.API.Models
{
    public class MemorizeUnit
    {

        //the foreign key we will take care later, for now you can just take them as normal int properties when you create basic operation
        public int Id { get; set; }

        public User_ OwnerUser { get; set; }

        public List<User_> SubscribedUsers { get; set; }

        public string Title { get; set; }

        public Content UnitContent { get; set; }

        public List<Schedule> Schedules { get; set; }

        public string SubjectName { set; get; }

        public bool IsPrivate { get; set; }

        public DateTime  CreationDate { get; set; }

        public string Priority { get; set; }

        public List<Tag> Tags { get; set; }

        //picture later
    }
}