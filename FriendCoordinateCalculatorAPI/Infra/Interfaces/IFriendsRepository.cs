using Domain.Entities;
using MongoDB.Bson;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Infra.Interfaces
{
    public interface IFriendsRepository
    {
        Task AddFriend(Friend friend);
        Task<Friend> GetById(string id);
        Task<IEnumerable<Friend>> GetAll();
    }
}
