using Api.Database;
using System.Threading.Tasks;
using System.Collections.Generic;
using Api.Permissions;
using Api.Contexts;
using Api.Eventing;
using Api.Startup;
using Api.Users;

namespace Api.Chats
{
	/// <summary>
	/// Handles chats.
	/// Instanced automatically. Use injection to use this service, or Startup.Services.Get.
	/// </summary>

	public partial class ChatService : AutoService<Chat>
    {
        /// <summary>
        /// Instanced automatically. Use injection to use this service, or Startup.Services.Get.
        /// </summary>
        public ChatService(UserService _userService) : base(Events.Chat)
        {
			// Example admin page install:
			// InstallAdminPages("Chats", "fa:fa-rocket", new string[] { "id", "name" });

			Events.Chat.BeforeCreate.AddEventListener(async (Context context, Chat chat) =>
			{
				if (context.User == null)
				{
					throw new PublicException("Login Required", "login_required");
				}

				if (chat.Username == null)
				{
                    throw new PublicException("Invalid User", "invalid_user");
                }

				var user = await _userService.Get(context, chat.Username);

				if (user == null) 
				{
                    throw new PublicException("Invalid User", "invalid_user");
                }

				chat.ConnectedUserId = user.Id;

				return chat;
			});
		}
	}
    
}
