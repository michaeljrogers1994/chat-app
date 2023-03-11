using Microsoft.AspNetCore.Mvc;

namespace Api.Chats
{
    /// <summary>Handles chat endpoints.</summary>
    [Route("v1/chat")]
	public partial class ChatController : AutoController<Chat>
    {
    }
}