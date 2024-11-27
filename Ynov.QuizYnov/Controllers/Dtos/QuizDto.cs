namespace Ynov.QuizYnov.Business.Dtos
{
    public class QuizDto
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int Difficulty { get; set; }
        public string Category { get; set; }
    }
}