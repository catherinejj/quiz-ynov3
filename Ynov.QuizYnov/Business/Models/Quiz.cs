using Ynov.QuizYnov.Business.Models;
namespace Ynov.QuizYnov.Business.Models{
    public class Quiz {
        /* GUISD pour l'autoincrementation */
        public DateTime PublishedDate {get; set; }
        public Guid Id {get; set; }
        public string Name {get; set; }
        public string Description {get; set; }
        public int Difficulty { get; set; }
        public Category Category { get; set; }
        public IEnumerable<Question> Questions { get; set; }
    }
}