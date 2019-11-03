using Domain.Entities;
using Infra.Interfaces;
using System;
using Xunit;

namespace Tests
{
    public class RepositoryTests
    {
        private Friend mockFriend;
        private readonly IFriendsRepository _friendsRepository;
        public RepositoryTests(IFriendsRepository reposioty)
        {
            mockFriend = new Friend("Alex", new Coordinate(100M, 200M));
            _friendsRepository = reposioty;
        }
        [Fact]
        public void ShouldAddFriend()
        {
            Assert.True(_friendsRepository.AddFriend(mockFriend));
        }
    }
}
