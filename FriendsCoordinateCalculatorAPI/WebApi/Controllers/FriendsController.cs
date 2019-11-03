using Application.Interfaces;
using Application.ViewModels;
using Microsoft.AspNetCore.Mvc;

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

        public IActionResult Post(AddFriendViewModel viewModel)
        {
            return Ok(_friendsService.AddFriend(viewModel));
        }
    }
}
