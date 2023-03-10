
namespace Api.CanvasRenderer
{
	
	/// <summary>
	/// Available canvas rendering modes.
	/// </summary>
	public enum RenderMode : int
	{
		/// <summary>
		/// State only - no actual html or text output.
		/// </summary>
		None = 0,
		/// <summary>
		/// Html output.
		/// </summary>
		Html = 1,
		/// <summary>
		/// Text only output.
		/// </summary>
		Text = 2,
		/// <summary>
		/// Both text and html output.
		/// </summary>
		Both = 3
	}
	
}