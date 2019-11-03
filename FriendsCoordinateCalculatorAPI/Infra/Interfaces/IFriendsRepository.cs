using Domain.Entities;
using System.Collections.Generic;

namespace Infra.Interfaces
{
    public interface IFriendsRepository
    {
        bool AddFriend(Friend friend);
        IEnumerable<Friend> ClosestFriends(Friend friend);
    }
}
