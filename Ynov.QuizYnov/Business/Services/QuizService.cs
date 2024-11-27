using Ynov.QuizYnov.Business.Models;

namespace Ynov.QuizYnov.Business.Services
{   public class QuizService : IQuizService
    {
        /*On n'a pas de BDD pour l'instant donc on fait une liste en dur de Quiz*/
        private List<Quiz> _quizList = new List<Quiz>(){
            new Quiz() {
                PublishedDate = DateTime.Now,
                Id = new Guid("e8bad759-932a-49e3-8d7f-b76392e6a545"),
                Category = new Category() { Id = new Guid("26caff85-0d61-49fa-b734-09327138af59") },
                Description ="ASP .NET Care, Agular, etc.",
                Difficulty = 3,
                Name = "Dev fullstack M1"
            },
            new Quiz() {
                PublishedDate = DateTime.Now,
                Id = new Guid("dc775c6b-897e-41d8-aeae-2d39cf688526"),
                Category = new Category() {Id = new Guid("5bd8f713-8208-4ce3-a940-a9deb881ffd0")},
                Description ="Quiz super difficile.",
                Difficulty = 5,
                Name = "Le Quiz pour les badas !"
            },
            new Quiz() {
                PublishedDate = DateTime.Now,
                Id = new Guid("85f95e74-7054-468f-a795-f405a4b23eb3"),
                Category = new Category() {Id = new Guid("26caff85-0d61-49fa-b734-09327138af59")},
                Description ="Révisions",
                Difficulty = 3,
                Name = "Un Quiz pour réviser"
            }
        
        };

        /*Notre methode pour le getAll*/
        public IEnumerable<Quiz> GetAll()
        {
            return _quizList;
        }

        /*Notre methode pour le getById*/
        public Quiz GetById(Guid id){
            //On parcours la liste
            foreach (var quiz in _quizList) {
                //si l'id correspond, on transmet le quiz
                if (quiz.Id == id){
                    return quiz;
                }
            }
            //Sinon c'est null
            return null;
        }
    }
}