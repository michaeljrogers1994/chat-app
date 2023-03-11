using System;
using Api.Database;
using Api.Translate;
using Api.Users;


namespace Api.Chats
{
	
	/// <summary>
	/// A Chat
	/// </summary>
	public partial class Chat : VersionedContent<uint>
	{
		/// <summary>
		/// The id of the user this chat is connected with.
		/// </summary>
		public uint ConnectedUserId;

		/// <summary>
		/// The date the request was accepted.
		/// </summary>
		public DateTime AcceptedUtc;

		/// <summary>
		/// The username of the user being sent the request.
		/// </summary>
		public string Username { get; set; }
	}

}