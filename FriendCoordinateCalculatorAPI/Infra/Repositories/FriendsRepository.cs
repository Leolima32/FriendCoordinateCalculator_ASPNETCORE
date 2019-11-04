using System.Collections.Generic;
using System.Threading.Tasks;
using Domain.Entities;
using Infra.Context;
using Infra.Interfaces;
using Microsoft.Extensions.Options;
using MongoDB.Bson;
using MongoDB.Driver;

namespace Infra.Repositories
{
    public class FriendsRepository : IFriendsRepository
    {
        private readonly FriendsDBContext _context = null;

        public FriendsRepository(IOptions<Settings> settings)
        {
            _context = new FriendsDBContext(settings);
        }

        public async Task AddFriend(Friend friend)
        {
            await _context.Friends.InsertOneAsync(friend);
        }

        public async Task<IEnumerable<Friend>> GetAll()
        {
            return await _context.Friends.Find(_ => true).ToListAsync();
        }

        public async Task<Friend> GetById(string id)
        {
            return await _context.Friends
                            .Find(friend => friend._id == ObjectId.Parse(id))
                            .FirstOrDefaultAsync();
        }
    }
}
