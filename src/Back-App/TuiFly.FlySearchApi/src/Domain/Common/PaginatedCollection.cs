using System;
using System.Collections.Generic;
using System.Linq;

namespace TuiFly.FlySearchApi.Domain.Common
{
    /// <summary>
    /// A custom class for wrap and add pagination to collection
    /// </summary>
    public static class PaginatedCollection
    {
        /// <summary>
        /// Get a paginated collection 
        /// </summary>
        /// <param name="items"></param>
        /// <param name="pageIndex"></param>
        /// <param name="pageSize"></param>
        public static PaginationModel<TRessouce> ToPaginatedcollection<TRessouce>(this IEnumerable<TRessouce> items, int pageIndex, int pageSize) where TRessouce : class
        {
            var count = items.Count();

            return new PaginationModel<TRessouce>
            {
                PageIndex = pageIndex,
                TotalPages = (int)Math.Ceiling(count / (double)pageSize),
                Items = items.Skip((pageIndex - 1) * pageSize).Take(pageSize).ToList()
            };
        }
    }

    public class PaginationModel<TRessouce> : List<TRessouce>
    {
        /// <summary>
        /// the number of pages.
        /// </summary>
        public int TotalPages { get; set; }

        /// <summary>
        /// the number of pages.
        /// </summary>
        public int PageIndex { get; set; }

        /// <summary>
        /// collection data
        /// </summary>
        public List<TRessouce> Items { get; set; }
    }
}
