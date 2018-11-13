namespace MemorizeHelper.API.Helpers
{
    public class PaginationHeader
    {
        
        public int CurrentPage { get; set; }
        public int TotalPages { get; set; }
        public int PageSize { get; set; }
        public int TotalCount { get; set; }

        public PaginationHeader(int currentPage, int totalPages, int pageSize, int totalCount)
        {
            this.CurrentPage= currentPage;
            this.TotalPages = totalPages;
            this.PageSize = pageSize;
            this.TotalPages = totalCount;
        }
    }
}