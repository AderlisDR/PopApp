using Microsoft.EntityFrameworkCore;
using PopAppCore.Entities;
using PopApp.Structure.Data;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using PopAppCore.Interfaces.Services;

namespace PopApp.Structure.Services
{
    public class CompanyServices : ICompanyServices
    {
        private readonly PopAppContext _context;


        public CompanyServices(PopAppContext context)
        {
            _context = context;
        }
        public async Task CreateCompany(Company company)
        {
            _context.Add(company);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteCompany(int id)
        {
            var company = await GetCompany(id);
            if (company != null)
            {
                company.IsActive = false;
                _context.Update(company);
                await _context.SaveChangesAsync();
            }
        }

        public async Task<IEnumerable<Company>> GetCompanies()
        {
            var companies = await _context.Companies.ToListAsync();

            return companies;
        }

        public async Task<Company> GetCompany(int id)
        {
            var company = await _context.Companies.FirstOrDefaultAsync(opt => opt.CompanyId == id);
            return company;
        }

        public async Task UpdateCompany(int id, Company company)
        {
            var updateCompany = await GetCompany(id);
            if (updateCompany != null)
            {
                updateCompany.CompanyName = company.CompanyName;
                updateCompany.CompanyCode = company.CompanyCode;
                updateCompany.CompanyAdrees = company.CompanyAdrees;
                updateCompany.CompanyPhone = company.CompanyPhone;
                updateCompany.IsActive = true;

                _context.Update(updateCompany);
                await _context.SaveChangesAsync();
            }
        }
    }
}
