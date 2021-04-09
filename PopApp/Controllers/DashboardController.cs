using Core.Interfaces.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace PopApp.Controllers
{
    [Route("api/dashboard")]
    [ApiController]
    public class DashboardController : ControllerBase
    {
        private readonly IChartServices _chartServices;

        public DashboardController(IChartServices chartServices)
        {
            _chartServices = chartServices;
        }

        [HttpGet("common-statistics")]
        public async Task<IActionResult> GetCommonStatistics()
        {
            try
            {
                var statistics = await _chartServices.GetCommonStatistics();
                return Ok(statistics);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
