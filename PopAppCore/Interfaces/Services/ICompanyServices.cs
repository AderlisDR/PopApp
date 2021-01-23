using PopAppCore.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace PopAppCore.Interfaces.Services
{
    public interface ICompanyServices
    {
        Task<IEnumerable<Company>> GetCompanies();
        Task<Company> GetCompany(int id);
        Task CreateCompany(Company company);
        Task UpdateCompany(int id, Company company);
        Task DeleteCompany(int id);
    }
}
