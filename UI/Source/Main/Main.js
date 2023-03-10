import ContactList from "UI/ContactList";

export default function Main(props) {
	// reference propTypes
	//const { title, size, width } = props;

	/* access session info, such as the currently logged-in user:
	const { session } = useSession();
	// session.user
	// session.locale
	*/

	/* runs only after component initialisation (comparable to legacy componentDidMount lifecycle method)
	useEffect(() => {
		// ...
	}, []);
	*/

	/* runs after both component initialisation and each update (comparable to legacy componentDidMount / componentDidUpdate lifecycle methods)
	useEffect(() => {
		// ...
	});
	*/

	/* to handle window events such as resize / scroll, etc:
	const [width, setWidth] = useState(window.innerWidth);
	useEffect(() => {
		const handleResize = () => setWidth(window.innerWidth);
		window.addEventListener('resize', handleResize);
		
		// optional return used to clean up
		return () => {
			window.removeEventListener('resize', handleResize);
		};
		
	});


	/* reference images in the same component folder:
	var vectorUrl = getRef(myVectorImage, { url: true });
	var rasterUrl = getRef(myRasterImage, { size: 128, url: true }); // where size represents the closest size required (see Api\ThirdParty\Uploader\UploaderConfig.cs for supported sizes)
	// omit size parameter to return original image resolution
	*/
	
	return (
		<div className="main">
			<ContactList/>
		</div>
	);
}

Main.propTypes = {
	
};

// use defaultProps to define default values, if required
Main.defaultProps = {

}

Main.icon='align-center'; // fontawesome icon
