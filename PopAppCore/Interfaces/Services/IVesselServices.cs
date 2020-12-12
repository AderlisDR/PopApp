using PopApp.Core.Entities;
using PopAppCore.Dtos;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace PopApp.Core.Interfaces.Services
{
    public interface IVesselServices
    {
        Task<IEnumerable<Vessel>> GetVessels();
        Task<Vessel> GetVessel(int id);
        Task CreatetVessel(Vessel vessel);
        Task UpdateVessel(int id, Vessel vessel);
        Task DeleteVessel(int id);
        Task<List<VesselComboDto>> GetVesselsForComboByCondition(Expression<Func<Vessel, bool>> expression);
    }
}
