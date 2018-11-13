using Microsoft.AspNetCore.Http;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;

namespace MemorizeHelper.API.Helpers
{
    public static class Extensions
    {
        public static void AddPagination(this HttpResponse response ,int currentPage, int totalPages, int pageSize, int totalCount) {
            var paginationHeader = new PaginationHeader( currentPage,  totalPages,  pageSize,  totalCount);
            var camelCaseFormatter = new JsonSerializerSettings();
            camelCaseFormatter.ContractResolver = new CamelCasePropertyNamesContractResolver();
            response.Headers.Add("Pagination", JsonConvert.SerializeObject(paginationHeader,camelCaseFormatter));
            response.Headers.Add("Access-Control-Expose-Headers", "Pagination");
        }
    }
}