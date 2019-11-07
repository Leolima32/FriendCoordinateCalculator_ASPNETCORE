using Domain.Entities;
using System.Threading.Tasks;

namespace Infra.Interfaces
{
    public interface ICalculationHistoryLogRepository
    {
        Task SaveCalculationHistory(CalculationHistoryLog log);
    }
}
