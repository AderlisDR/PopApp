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
    [Route("api/containers")]
    [ApiController]
    [Authorize]
    public class ContainerController : ControllerBase
    {

        private readonly IContainerServices _repo;
        private readonly IMapper _mapper;
        public ContainerController(IContainerServices repo, IMapper mapper)
        {
            _repo = repo;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<IActionResult> GetContainers()
        {
            try
            {
                var container = await _repo.GetContainers();
                var containerDto = _mapper.Map<IEnumerable<ContainerDto>>(container);
                return Ok(containerDto);

            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetCompany(int id)
        {
            try
            {
                var container = await _repo.GetContainer(id);
                var containerDto = _mapper.Map<ContainerDto>(container);
                return Ok(containerDto);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult> PostContainer(ContainerDto containerDto)
        {
            try
            {
                var container = _mapper.Map<Container>(containerDto);
                container.IsActive = true;
                int newContainerId = await _repo.CreateContainer(container);

                return Ok(newContainerId);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutContainer(int id, ContainerDto containerDto)
        {
            try
            {
                var container = _mapper.Map<Container>(containerDto);
                await _repo.UpdateContainer(id, container);
                return Ok("Container was updated");

            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteContainer(int id)
        {
            try
            {
                await _repo.DeleteContainer(id);
                return Ok("Container was Deleted");

            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
