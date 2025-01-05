using System;
using System.Collections.Generic;
using Ynov.QuizYnov.Business.Models;

namespace Ynov.QuizYnov.Business.Services
{
    public class CategoryService
    {
        // Liste des catégories en dur pour l'exercice
        private readonly List<Category> _categories = new List<Category>()
        {
            new Category { Id = Guid.Parse("26caff85-0d61-49fa-b734-09327138af59"), Name = "Fullstack Development" },
            new Category { Id = Guid.Parse("5bd8f713-8208-4ce3-a940-a9deb881ffd0"), Name = "Frontend Development" },
            new Category { Id = Guid.Parse("36fa23c8-76b5-11ec-90d6-0242ac120003"), Name = "Backend Development" }
        };

        // Méthode pour récupérer toutes les catégories
        public IEnumerable<Category> GetAllCategories()
        {
            return _categories;
        }
    }
}