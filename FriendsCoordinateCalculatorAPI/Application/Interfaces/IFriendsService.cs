using Application.ViewModels;

namespace Application.Interfaces
{
    public interface IFriendsService
    {
        bool AddFriend(FriendViewModel viewModel);
    }
}
