using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using PopApp.Core.Entities;
using PopApp.Core.Interfaces.Services;
using PopAppCore.Dtos;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace PopAppAPI.Controllers
{
    [Route("api/vessels")]
    [ApiController]
    [Authorize]
    public class VesselController : ControllerBase
    {
        private readonly IVesselServices _vesselServices;
        public VesselController(IVesselServices vesselServices)
        {
            _vesselServices = vesselServices;
        }

        [HttpGet]
        public async Task<IActionResult> GetVessels()
        {
            try
            {
                var vessels = await _vesselServices.GetVessels();
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
                var vessel = await _vesselServices.GetVessel(id);
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
                await _vesselServices.CreatetVessel(vessel);
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
                await _vesselServices.UpdateVessel(id, vessel);
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
                await _vesselServices.DeleteVessel(id);
                return Ok();

            }catch(Exception e)
            {
                return Ok(e.Message);
            }
        }

        [HttpGet("for-combo")]
        public async Task<IActionResult> GetActiveVesselsForCombo()
        {
            try
            {
                List<VesselComboDto> combo = await _vesselServices.GetVesselsForComboByCondition(vessel => vessel.IsActive);

                return Ok(combo);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
