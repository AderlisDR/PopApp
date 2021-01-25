using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using PopAppCore.Entities;
using PopAppCore.Interfaces.Services;

namespace PopAppAPI.Controllers
{
    [Route("api/products")]
    [ApiController]
    [Authorize]
    public class ProductController : ControllerBase
    {
        private readonly IProductServices _repo;

        public ProductController(IProductServices repo)
        {
            _repo = repo;
        }

        [HttpGet]
        public async Task<IActionResult> GetProducts()
        {
            try
            {
                var products = await _repo.GetProducts();
                return Ok(products);

            }catch(Exception e)
            {
                return Ok(e.Message);
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetProduct(int id)
        {
            try
            {
                var product = await _repo.GetProduct(id);
                return Ok(product);
            }catch(Exception e)
            {
                return Ok(e.Message);
            }
        }

        [HttpPost]
        public async Task<IActionResult> PostProduct(Product product)
        {
            try
            {
                await _repo.CreateProduct(product);
                return Ok();

            }catch(Exception e)
            {
                return Ok(e.Message);
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutProduct(int id , Product product)
        {
            try
            {
                await _repo.UpdateProduct(id, product);
                return Ok();

            }catch(Exception e)
            {
                return Ok(e.Message);
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(int id)
        {
            try
            {
                await _repo.DeleteProduct(id);
                return Ok();

            }catch(Exception e)
            {
                return Ok(e.Message);
            }
        }

        [HttpGet("available-for-freigth/{freigthId}")]
        public async Task<IActionResult> GetAvailableProductsByFreigthId(int freigthId)
        {
            try
            {
                var products = await _repo.GetProductsByCondition(product => product.IsActive);

                return Ok(products);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
