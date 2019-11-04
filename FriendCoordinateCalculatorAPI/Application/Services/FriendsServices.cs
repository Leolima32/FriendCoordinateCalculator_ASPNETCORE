
using Application.Interfaces;
using Application.ViewModels;
using AutoMapper;
using Domain.Entities;
using Infra.Interfaces;
using MongoDB.Bson;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Application.Services
{
    public class FriendsServices : IFriendsService
    {
        private readonly IMapper _mapper;
        private readonly IFriendsRepository _repository;

        public FriendsServices(IMapper mapper, IFriendsRepository repository)
        {
            _mapper = mapper;
            _repository = repository;
        }

        public async Task AddFriend(FriendViewModel viewModel)
        {
            await _repository.AddFriend(_mapper.Map<Friend>(viewModel));
        }

        public async Task<IEnumerable<Friend>> ClosestFriends(string _id)
        {
            Friend currentFriend = await _repository.GetById(_id);
            IEnumerable<Friend> allFriends = await _repository.GetAll();
            return allFriends;
        }

        public async Task<IEnumerable<Friend>> GetAll()
        {
            return await _repository.GetAll();
        }
    }
}
