using Microsoft.EntityFrameworkCore;
using PopApp.Core.Entities;
using PopApp.Core.Interfaces.Services;
using PopApp.Structure.Data;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace PopApp.Structure.Services
{
    public class ProductServices : IProductServices
    {
        private PopAppContext _context;
        public ProductServices(PopAppContext context)
        {
            _context = context;
        }
        public async Task CreateProduct(Product product)
        {
            _context.Add(product);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteProduct(int id)
        {
            var product = await GetProduct(id);
            if (product != null)
            {
                product.IsActive = false;
                _context.Update(product);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<Product> GetProduct(int id)
        {
            var product = await _context.Products.FirstOrDefaultAsync(opt => opt.ProductId == id);
            return product;
        }

        public async Task<IEnumerable<Product>> GetProducts()
        {
            var products = await _context.Products.ToListAsync();
            return products;
        }

        public async Task UpdateProduct(int id, Product product)
        {
            var updateProduct = await GetProduct(id);
            if (product != null)
            {
                updateProduct.ProductName = product.ProductName;
                updateProduct.ProductDescription = product.ProductDescription;
                updateProduct.ProductCategory = product.ProductCategory;
                updateProduct.IsActive = true;
                _context.Update(updateProduct);
                await _context.SaveChangesAsync();
            }
        }
    }
}
