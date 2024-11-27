using Ynov.QuizYnov.Business.Models;

namespace Ynov.QuizYnov.Business
{
    public interface IQuizService
    {
        IEnumerable<Quiz> GetAll();
        Quiz GetById(Guid id);
    }
}