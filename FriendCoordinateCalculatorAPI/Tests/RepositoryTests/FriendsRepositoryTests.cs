using Domain.Entities;
using Infra.Interfaces;
using MongoDB.Bson;
using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Xunit;

namespace Tests
{
    public class FriendsRepositoryTests
    {
        public readonly IFriendsRepository MockFriendsRepository;

        public IEnumerable<Friend> friends;

        public FriendsRepositoryTests()
        {
            friends = new List<Friend>
            {
                new Friend("John", new Coordinate(100, 200)),
                new Friend("Eva", new Coordinate(300, 500)),
                new Friend("Adam", new Coordinate(400, 300))
            };

            Mock<IFriendsRepository> mockFriendRepository = new Mock<IFriendsRepository>();

            mockFriendRepository.Setup(mr => mr.GetAll()).Returns(Task.FromResult(friends));

            mockFriendRepository.Setup(mr => mr.GetById(It.IsAny<string>())).Returns((string id) => Task.FromResult(friends.Where(x => x._id == ObjectId.Parse(id)).FirstOrDefault()));

            mockFriendRepository.Setup(mr => mr.AddFriend(It.IsAny<Friend>())).Returns(async (Friend friend) =>
            {
                await Task.Run(() =>
                {
                    var updatedList = friends.ToList();
                    updatedList.Add(friend);
                    friends = updatedList;
                });
            });

            MockFriendsRepository = mockFriendRepository.Object;
        }

        [Fact]
        public void ShouldAddFriend()
        {
            var ocelot = new Friend("Ocelot", new Coordinate(500, 100));
            MockFriendsRepository.AddFriend(ocelot);
            Assert.Equal(4, friends.Count());
        }

        [Fact]
        public async void ShouldReturnAllFriends()
        {
            var list = await MockFriendsRepository.GetAll();
            Assert.True(list.Count() > 0);
        }
    }
}
