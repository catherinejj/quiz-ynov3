using Ynov.QuizYnov.Business.Models;
using Ynov.QuizYnov.Business.Dtos;

namespace Ynov.QuizYnov.Business.Mappers
{
    public class QuizMapper
    {
        public QuizDto ToDto(Quiz quiz)
        {
            return new QuizDto
            {
                Id = quiz.Id,
                Name = quiz.Name,
                Description = quiz.Description,
                Difficulty = quiz.Difficulty,
                //Category = quiz.Category?.Name
                Category = quiz.Category != null
                ? new CategoryDto
                {
                    Id = quiz.Category.Id,
                    Name = quiz.Category.Name
                }
                : null // Si Category est null, retourne null
                };
        }
    }
}