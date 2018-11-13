using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;

namespace MemorizeHelper.API.Helpers
{
    public static class Extensions
    {
        public static void AddPagination(this HttpResponse response ,int currentPage, int totalPages, int pageSize, int totalCount) {
            var paginationHeader = new PaginationHeader( currentPage,  totalPages,  pageSize,  totalCount);
            response.Headers.Add("Pagination", JsonConvert.SerializeObject(paginationHeader));
            response.Headers.Add("Access-Control-Expose-Headers", "Pagination");
        }
    }
}