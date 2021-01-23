using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PopAppCore.Entities;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using PopAppCore.Dtos;
using PopAppCore.Interfaces.Services;

namespace PopAppMaster.Api.Controllers
{
    [Route("api/freigths")]
    [ApiController]
    [Authorize]
    public class FreigthController : ControllerBase
    {
        private readonly IFreigthServices _repo;
        private readonly IMapper _mapper;

        public FreigthController(IFreigthServices repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetFreigths()
        {
            try
            {
                var freigths = await _repo.GetFreigths();
                var freigthsDto = _mapper.Map<IEnumerable<FreigthDto>>(freigths);
                return Ok(freigthsDto);

            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetFreigth(int id)
        {
            try
            {
                var freigth = await _repo.GetFreigth(id);
                var freigthDto = _mapper.Map<FreigthDto>(freigth);

                return Ok(freigthDto);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult> PostFreigth([FromBody] FreigthDto freigthDto)
        {
            try
            {
                var freigth = _mapper.Map<Freigth>(freigthDto);
                freigth.IsActive = true;
                int freigthId = await _repo.CreateFreigth(freigth);

                return Ok(freigthId);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutFreigth(int id, FreigthDto freigthDto)
        {
            try
            {
                var freigth = _mapper.Map<Freigth>(freigthDto);
                await _repo.UpdateFreigth(id, freigth);
                return Ok("Freigth was updated");

            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpDelete]
        public async Task<IActionResult> DeleteFreigth(int id)
        {
            try
            {
                await _repo.DeleteFreigth(id);
                return Ok("freigth Was Deleted");

            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
