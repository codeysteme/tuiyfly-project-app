using System.ComponentModel;

namespace TuiFly.FlySearchApi.Api.Controllers.Fligths.Model.Requests
{
    /// <summary>
    /// The pagination default class
    /// </summary>
    public class PaginationRequest
    {
        public const int DefaultPageIndex = 1;
        public const int DefaultPageSize = 10;

        /// <summary>
        /// The index of the current page of items.
        /// </summary>
        [DefaultValue(DefaultPageIndex)]
        public int PageIndex { get; set; } = DefaultPageIndex;

        /// <summary>
        /// Maximum number of items to return per page.
        /// </summary>
        [DefaultValue(DefaultPageSize)]
        public int PageSize { get; set; } = DefaultPageSize;
    }
}
