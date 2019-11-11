
using Application.Interfaces;
using Application.ViewModels;
using AutoMapper;
using Domain.Entities;
using Infra.Interfaces;
using MongoDB.Bson;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq;
using System;

namespace Application.Services
{
    public class FriendsServices : IFriendsService
    {
        private readonly IMapper _mapper;
        private readonly IFriendsRepository _friendsRepository;
        private readonly ICalculationHistoryLogRepository _logRepository;

        public FriendsServices(
            IMapper mapper, 
            IFriendsRepository friendsRepository,
            ICalculationHistoryLogRepository logRepository)
        {
            _mapper = mapper;
            _friendsRepository = friendsRepository;
            _logRepository = logRepository;
        }

        public async Task AddFriend(FriendViewModel viewModel)
        {
            await _friendsRepository.AddFriend(_mapper.Map<Friend>(viewModel));
        }

        public async Task<IEnumerable<Friend>> ClosestFriends(string _id)
        {
            Friend currentFriend = await _friendsRepository.GetById(_id);
            IEnumerable<Friend> friendsList = await _friendsRepository.GetAll();
            foreach (Friend friend in friendsList)
            {
                var calcLog = new CalculationHistoryLog(friend, friend.CalculateDistance(currentFriend.Position), DateTime.Now);
                await _logRepository.SaveCalculationHistory(calcLog);
            }
            return friendsList.OrderBy(friend => friend.DistanceToCurrentPosition).Take(3);
        }

        public async Task<IEnumerable<Friend>> GetAll()
        {
            return await _friendsRepository.GetAll();
        }
    }
}
