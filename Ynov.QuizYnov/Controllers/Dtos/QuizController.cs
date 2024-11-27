using Microsoft.AspNetCore.Mvc;
using Ynov.QuizYnov.Business;
using Ynov.QuizYnov.Business.Dtos;
using Ynov.QuizYnov.Business.Mappers;
using Ynov.QuizYnov.Business.Models;
namespace Ynov.QuizYnov.Controllers{

    /*[ ]*/
    [Route("api/quiz")]
    [ApiController]
    public class QuizCrontoller: ControllerBase {
        /*On commmence par le service car c'est la priorité !*/
        private readonly IQuizService _service;
        private readonly QuizMapper _mapper;

        public QuizCrontoller(IQuizService service,QuizMapper mapper){
            _service= service;
            _mapper = mapper; 
        }

        [HttpGet(Name = "getAllQuiz")]
        [ProducesResponseType(typeof(IEnumerable<QuizDto>),200) ]
        public IActionResult GetAll(){
            IEnumerable<QuizDto> dtos =_service.GetAll().Select(quiz =>_mapper.ToDto(quiz));
            return Ok(dtos);
        }

        [HttpGet("{id}", Name = "oneQuiz")]
        [ProducesResponseType(typeof(IEnumerable<QuizDto>),200)]
        [ProducesResponseType(400)]
        public ActionResult GetById(Guid id) {
            Quiz quiz = _service.GetById(id);
            if (quiz != null){
                return Ok(quiz);
            }
            //TODO : return 404
            return null;
        }
    }
    
}