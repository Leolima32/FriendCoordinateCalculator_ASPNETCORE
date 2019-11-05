using Application.Interfaces;
using Application.ViewModels;
using Domain.Entities;
using Microsoft.AspNetCore.Mvc;
using MongoDB.Bson;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace WebApi.Controllers
{
    [Route("api/[controller]")]
    public class FriendsController : Controller
    {
        private readonly IFriendsService _friendsService;
        public FriendsController(IFriendsService friendsService)
        {
            _friendsService = friendsService;
        }

        [HttpPost]
        public async Task<IActionResult> Post([FromBody]FriendViewModel viewModel)
        {
            await _friendsService.AddFriend(viewModel);
            return Ok(new { Message = "Success!", StatusCode = 200});
        }

        [HttpGet]
        public async Task<IEnumerable<Friend>> GetAllFriends()
        {
            return await _friendsService.GetAll();
        }

        [HttpGet("{id}")]
        public async Task<IEnumerable<Friend>> GetClosestFriends(string id)
        {
            return await _friendsService.ClosestFriends(id);
        }
    }
}
