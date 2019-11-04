using Application.ViewModels;
using Domain.Entities;
using MongoDB.Bson;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Application.Interfaces
{
    public interface IFriendsService
    {
        Task AddFriend(FriendViewModel viewModel);
        Task<IEnumerable<Friend>> ClosestFriends(string id);
        Task<IEnumerable<Friend>> GetAll();
    }
}
