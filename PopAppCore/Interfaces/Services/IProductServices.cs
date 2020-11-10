using PopApp.Core.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace PopApp.Core.Interfaces.Services
{
    public interface IProductServices
    {
        Task<IEnumerable<Product>> GetProducts();
        Task<Product> GetProduct(int id);
        Task CreateProduct(Product product);
        Task UpdateProduct(int id, Product product);
        Task DeleteProduct(int id);
    }
}
