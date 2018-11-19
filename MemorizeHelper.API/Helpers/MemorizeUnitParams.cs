namespace MemorizeHelper.API.Helpers
{
    public class MemorizeUnitParams
    {
        private const int MaxPageSize = 50;
        public int PageNumber { get; set; } =1;
        private int pageSize = 10;
        public int PageSize
        {
            get { return pageSize = 10;}
            set { pageSize = (value > MaxPageSize)? MaxPageSize: value;}
        }
        public string Username { get; set; }
        public string TitleSearch { get; set; }
        public string SubjectNameSearch { get; set; }
        public string TagsSearch { get; set; }

        public bool IsGetTaskToday{ get; set; }
    }
}