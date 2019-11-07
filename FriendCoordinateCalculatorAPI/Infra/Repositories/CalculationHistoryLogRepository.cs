using System.Threading.Tasks;
using Domain.Entities;
using Infra.Context;
using Infra.Interfaces;
using Microsoft.Extensions.Options;

namespace Infra.Repositories
{
    public class CalculationHistoryLogRepository: ICalculationHistoryLogRepository
    {
        private readonly FriendsDBContext _context = null;

        public CalculationHistoryLogRepository(IOptions<Settings> settings)
        {
            _context = new FriendsDBContext(settings);
        }

        public async Task SaveCalculationHistory(CalculationHistoryLog log)
        {
            await _context.CalculationHistoryLogs.InsertOneAsync(log);
        }
    }
}
