using Application.ViewModels;

namespace Application.Interfaces
{
    public interface IFriendsService
    {
        bool AddFriend(AddFriendViewModel viewModel);
    }
}
