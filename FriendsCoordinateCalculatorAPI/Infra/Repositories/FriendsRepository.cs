using System.Collections.Generic;
using Domain.Entities;
using Infra.Interfaces;

namespace Infra.Repositories
{
    public class FriendsRepository : IFriendsRepository
    {
        public bool AddFriend(Friend friend)
        {
            throw new System.NotImplementedException();
        }

        public IEnumerable<Friend> ClosestFriends(Friend friend)
        {
            throw new System.NotImplementedException();
        }
    }
}
