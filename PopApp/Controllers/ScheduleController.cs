using Boundaries.Persistence.Models.Schedule;
using Core.Entities;
using Core.Interfaces.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace PopApp.Controllers
{
    [Route("api/schedule")]
    [ApiController]
    public class ScheduleController : ControllerBase
    {
        private readonly IScheduleServices _scheduleServices;

        public ScheduleController(IScheduleServices scheduleServices)
        {
            _scheduleServices = scheduleServices;
        }

        [HttpGet]
        public async Task<IActionResult> GetSchedules()
        {
            try
            {
                var schedules = await _scheduleServices.GetSchedules(schedule => schedule.IsActive);
                return Ok(schedules);

            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetScheduleById(int id)
        {
            try
            {
                var schedule = await _scheduleServices.GetSchedule(id);
                return Ok(schedule);

            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult> PostSchedule(Schedule scheduleRequest)
        {
            try
            {
               _scheduleServices.PrepareScheduleRequest(scheduleRequest);
                await _scheduleServices.CreateSchedule(scheduleRequest);
                return Ok();

            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet("{id}/vessel")]
        public async Task<IActionResult> GetScheduleVessel(int id)
        {
            try
            {
                var scheduleVessel = await _scheduleServices.GetScheduleVessel(id);

                if (scheduleVessel is null)
                    throw new Exception("No se encontró el buque agendado.");

                return Ok(scheduleVessel);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet("{id}/vessel-containers")]
        public async Task<IActionResult> GetScheduleVesselContainers(int id)
        {
            try
            {
                var scheduleVesselContainers = await _scheduleServices.GetScheduleVesselContainers(id);

                return Ok(scheduleVesselContainers);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPost("{scheduleId}/add-vessel-container")]
        public async Task<IActionResult> AddContainerToScheduleVessel(int scheduleId, [FromBody] int containerId)
        {
            try
            {
                await _scheduleServices.AddContainerToScheduleVessel(scheduleId, containerId);

                return Ok();

            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPost("add-multiple-vessel-container")]
        public async Task<IActionResult> AddMultipleContainersToScheduleVessel([FromBody] AddMultipleContainersToScheduleVesselRequest request)
        {
            try
            {
                await _scheduleServices.AddMultipleContainersToScheduleVessel(request.ScheduleId, request.ContainersId);

                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPost("add-freigth-to-schedule-vessel-container")]
        public async Task<IActionResult> AddFreigthToScheduleVesselContainer([FromBody] AddFreigthToScheduleVesselContainerRequest request)
        {
            try
            {
                await _scheduleServices.AddFreigthToScheduleVesselContainer(request.ScheduleVesselContainerId, request.FreigthId);

                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet("{scheduleContainerId}/vessel-container-freigths")]
        public async Task<IActionResult> GetScheduleContainerFreigths(int scheduleContainerId)
        {
            try
            {
                var scheduleContainerFreigths = await _scheduleServices.GetScheduleContainerFreigths(scheduleContainerId);

                return Ok(scheduleContainerFreigths);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpGet("{scheduleContainerFreigthId}/container-freigth-products")]
        public async Task<IActionResult> GetScheduleContainerFreigthProducts(int scheduleContainerFreigthId)
        {
            try
            {
                var scheduleContainerFreigthProductss = await _scheduleServices.GetScheduleContainerFreigthProducts(scheduleContainerFreigthId);

                return Ok(scheduleContainerFreigthProductss);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPost("add-product-to-schedule-vessel-container-freigth")]
        public async Task<IActionResult> AddProductToScheduleVesselContainerFreigth([FromBody] ScheduleVesselContainerFreigthProductRequest request)
        {
            try
            {
                await _scheduleServices.AddProductToScheduleVesselContainerFreigth(request.ScheduleVesselContainerFreigthId, request.ProductId);

                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpDelete("schedule-vessel-container-freigth/{scheduleVesselContainerFreigthId}/remove-product/{productId}")]
        public async Task<IActionResult> RemoveProductFromScheduleVesselContainerFreigth(int scheduleVesselContainerFreigthId, int productId)
        {
            try
            {
                await _scheduleServices.RemoveProductFromScheduleVesselContainerFreigth(scheduleVesselContainerFreigthId, productId);

                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPut("approve-schedule-container-freigth/{scheduleContainerFreigthId}")]
        public async Task<IActionResult> ApproveScheduleContainerFreigth(int scheduleContainerFreigthId)
        {
            try
            {
                await _scheduleServices.ApproveScheduleContainerFreigthById(scheduleContainerFreigthId);

                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPut("report-schedule-container-freigth")]
        public async Task<IActionResult> ReportScheduleContainerFreigth([FromBody] ReportScheduleContainerFreigthRequest request)
        {
            try
            {
                await _scheduleServices.ReportScheduleContainerFreigthById(request.ScheduleContainerFreigthId, request.Message);

                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
