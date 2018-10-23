using System;

namespace MemorizeHelper.API.Models
{
    public class MemorizeUnit
    {

        //the foreign key we will take care later, for now you can just take them as normal int properties when you create basic operation
        public int Id { get; set; }
        public int OwnerUserId { get; set; }
        public int CreatorUserId { get; set; }

        public string Name { get; set; }
        public bool IsPrivate { get; set; }
        public DateTime  CreatedTime { get; set; }
        public string Description { get; set; }

        //schedule 
        public bool IsReviewed2 { get; set; }
        public bool IsReviewed6 { get; set; }
        public bool IsReviewed15 { get; set; }

        //picture later
    }
}