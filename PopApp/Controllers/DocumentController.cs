using AutoMapper;
using Core.Dtos;
using Core.Entities;
using Core.Interfaces.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace PopApp.Controllers
{
    [Route("api/documents")]
    [ApiController]
    [Authorize]
    public class DocumentController : ControllerBase
    {
        private readonly IDocumentsServices _repo;
        private readonly IMapper _mapper;
        public DocumentController(IDocumentsServices repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetDocuments()
        {
            try
            {
                var documents = await _repo.GetDocuments();
                var documentsDto = _mapper.Map<IEnumerable<DocumentDto>>(documents);
                return Ok(documentsDto);
            }
            catch (Exception e)
            {
                return Ok(e.Message);
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetDocument(int id)
        {
            try
            {
                var document = await _repo.GetDocument(id);
                var documentDto = _mapper.Map<DocumentDto>(document);
                return Ok(documentDto);

            }
            catch (Exception e)
            {
                return Ok(e.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult> PostDocument([FromBody]DocumentDto documentRequest)
        {
            try
            {
                var document = _mapper.Map<Document>(documentRequest);
                await _repo.CreateDocument(document);

                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPost("can-upload")]
        public IActionResult CanUpload() => Ok();
    }
}
