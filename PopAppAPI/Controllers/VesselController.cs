using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PopApp.Core.Entities;
using PopApp.Core.Interfaces.Services;

namespace PopAppAPI.Controllers
{
    [Route("api/vessels")]
    [ApiController]
    public class VesselController : ControllerBase
    {
        private readonly IVesselServices _repo;
        public VesselController(IVesselServices repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> GetVessels()
        {
            try
            {
                var vessels = await _repo.GetVessels();
                return Ok(vessels);

            }catch(Exception e)
            {
                return Ok(e.Message);
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetVessel(int id)
        {
            try
            {
                var vessel = await _repo.GetVessel(id);
                return Ok(vessel);

            }catch(Exception e)
            {
                return Ok(e.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult> PostVessel(Vessel vessel)
        {
            try
            {
                await _repo.CreatetVessel(vessel);
                return Ok();

            }catch(Exception e)
            {
                return Ok(e.Message);
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutVessel(int id , Vessel vessel)
        {
            try
            {
                await _repo.UpdateVessel(id, vessel);
                return Ok();

            }catch(Exception e)
            {
                return Ok(e.Message);
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteVessel(int id)
        {
            try
            {
                await _repo.DeleteVessel(id);
                return Ok();

            }catch(Exception e)
            {
                return Ok(e.Message);
            }
        }
    }
}
