using PopApp.Core.Entities;
using System;
using System.Collections.Generic;
using System.Text;
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
    }
}
