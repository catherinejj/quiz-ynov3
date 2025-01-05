using Ynov.QuizYnov.Business.Models;

namespace Ynov.QuizYnov.Business.Services
{
    public class QuizService : IQuizService
    {
        private readonly CategoryService _categoryService = new CategoryService(); // Service des catégories

        private List<Quiz> _quizList = new List<Quiz>(){
            new Quiz() {
                PublishedDate = DateTime.Now,
                Id = Guid.Parse("e8bad759-932a-49e3-8d7f-b76392e6a545"),
                Category = new Category() { 
                    Id = Guid.Parse("26caff85-0d61-49fa-b734-09327138af59"), 
                    Name = "Fullstack Development" 
                },
                Description = "ASP .NET Care, Agular, etc.",
                Difficulty = 3,
                Name = "Dev fullstack M1"
            },
            new Quiz() {
                PublishedDate = DateTime.Now,
                Id = Guid.Parse("dc775c6b-897e-41d8-aeae-2d39cf688526"),
                Category = new Category() { 
                    Id = Guid.Parse("5bd8f713-8208-4ce3-a940-a9deb881ffd0"), 
                    Name = "Frontend Development" 
                },
                Description = "Quiz super difficile.",
                Difficulty = 5,
                Name = "Le Quiz pour les badas !"
            },
            new Quiz() {
                PublishedDate = DateTime.Now,
                Id = Guid.Parse("85f95e74-7054-468f-a795-f405a4b23eb3"),
                Category = new Category() { 
                    Id = Guid.Parse("26caff85-0d61-49fa-b734-09327138af59"), 
                    Name = "Fullstack Development" 
                },
                Description = "Révisions",
                Difficulty = 3,
                Name = "Un Quiz pour réviser"
            }
        };

        public IEnumerable<Quiz> GetAll()
        {
            // Compléter les noms des catégories pour chaque quiz
            foreach (var quiz in _quizList)
            {
                var category = _categoryService.GetAllCategories()
                    .FirstOrDefault(c => c.Id == quiz.Category.Id); // Trouve la catégorie correspondante
                if (category != null)
                {
                    quiz.Category.Name = category.Name; // Associe le nom de la catégorie
                }
            }
            return _quizList;
        }
        

        public Quiz GetById(Guid id)
        {
            var quiz = _quizList.FirstOrDefault(q => q.Id == id);
            if (quiz != null)
            {
                var category = _categoryService.GetAllCategories()
                    .FirstOrDefault(c => c.Id == quiz.Category.Id);
                if (category != null)
                {
                    quiz.Category.Name = category.Name;
                }
            }
            return quiz;
        }
    }
    
}