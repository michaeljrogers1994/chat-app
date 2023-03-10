using Api.Presence;
using Api.Permissions;
using System.Collections.Generic;

namespace Api.Eventing
{
	/// <summary>
	/// Events are instanced automatically. 
	/// You can however specify a custom type or instance them yourself if you'd like to do so.
	/// </summary>
	public partial class Events
	{
		/// <summary>
		/// Set of events for a presenceRecord.
		/// </summary>
		public static EventGroup<PresenceRecord> PresenceRecord;
		
		/// <summary>
		/// Set of events for a pagePresenceRecord.
		/// </summary>
		public static EventGroup<PagePresenceRecord, ulong> PagePresenceRecord;
	}
}