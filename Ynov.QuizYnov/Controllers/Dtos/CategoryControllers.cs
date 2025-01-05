using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using Ynov.QuizYnov.Business.Models;
using Ynov.QuizYnov.Business.Services;

namespace Ynov.QuizYnov.Api.Controllers
{
    [Route("api/categories")]
    [ApiController]
    public class CategoryController : ControllerBase
    {
        private readonly CategoryService _categoryService;

        public CategoryController()
        {
            _categoryService = new CategoryService(); // Instanciation du service
        }

        // Route GET : /api/categories
        [HttpGet]
        public ActionResult<IEnumerable<Category>> GetCategories()
        {
            var categories = _categoryService.GetAllCategories();
            return Ok(categories); // Retourne la liste des catégories
        }
    }
}