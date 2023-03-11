using System;
using Api.Database;
using Api.Translate;
using Api.Users;


namespace Api.Messages
{
	
	/// <summary>
	/// A Message
	/// </summary>
	public partial class Message : VersionedContent<uint>
	{
		// Example fields. None are required:
		/*
        /// <summary>
        /// The name of the message
        /// </summary>
        [DatabaseField(Length = 200)]
		[Localized]
		public string Name;
		
		/// <summary>
		/// The content of this message.
		/// </summary>
		[Localized]
		public string BodyJson;

		/// <summary>
		/// The feature image ref
		/// </summary>
		[DatabaseField(Length = 80)]
		public string FeatureRef;
		*/
		
	}

}