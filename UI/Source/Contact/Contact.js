// Module import examples - none are required:
// import webRequest from 'UI/Functions/WebRequest';
// import Loop from 'UI/Loop';
// import { useSession } from 'UI/Session';
import { useState, useEffect } from 'react'; 
// import Container from 'UI/Container';
// import Row from 'UI/Row';
// import Col from 'UI/Column';
// import myVectorImage from './filename.svg';
import defaultUser from './default-user.jpg';
import getRef from 'UI/Functions/GetRef'; 
import presence from 'UI/Functions/Presence';

export default function Contact(props) {
	// reference propTypes
	const { user } = props;

	/* access session info, such as the currently logged-in user:
	const { session } = useSession();
	// session.user
	// session.locale
	*/


	useEffect(() => {
		//console.log(presence.send);
	});


	/* runs after both component initialisation and each update (comparable to legacy componentDidMount / componentDidUpdate lifecycle methods)
	useEffect(() => {
		// ...
	});
	*/
	var defaultUserUrl = getRef(defaultUser, { url: true });

	
	return (
		<button className="contact">
			<img className = "image" src = {defaultUserUrl} />
			<div className = {`online-status ${user ? "online" : "offline"}`}/>
			<span className = "name">
				{user.username}
			</span>
		</button>
	);
}

/*
// propTypes are used to describe configuration on your component in the editor.
// Just setting it to an empty object will make your component appear as something that can be added.
// Define your available props like the examples below.

Contact.propTypes = {
	title: 'string', // text input
	size: [1,2,3,4], // dropdowns
	width: [ // dropdown with separate labels/values
		{ name: '1/12', value: 1 },
		{ name: '2/12', value: 2 },
		{ name: '3/12 (25%)', value: 3 },
		{ name: '4/12 (33%)', value: 4 },
		{ name: '5/12', value: 5 },
		{ name: '6/12 (50%)', value: 6 },
		{ name: '7/12', value: 7 },
		{ name: '8/12 (66%)', value: 8 },
		{ name: '9/12 (75%)', value: 9 },
		{ name: '10/12', value: 10 },
		{ name: '11/12', value: 11 },
		{ name: '12/12 (100%)', value: 12 }
	],

	// alternatively, specify property parameters on a more granular level
	scrolledBackgroundColor: {
        type: 'color',
        label: 'Background colour (when scrolled)', // optional replacement label
        help: 'Default background colour when page has been scrolled', // optional help text to be shown along with the field (default position is between the label and field)
        helpPosition: 'icon', // help text position can be set on a per-field basis by including helpPosition (above, below or icon - with icon, the help text is hidden as alt text on an info icon displayed alongside the field)
        placeholder: 'Select a colour' // by default, placeholder inherits the default value (if any) - set here to override this if necessary
    },	

	// All <Input type='x' /> values are supported - checkbox, color etc.
	// Also the special id type which can be used to select some other piece of content (by contact name), like this:
	templateToUse: {type: 'id', content: 'Template'}
};

// use defaultProps to define default values, if required
Contact.defaultProps = {
	title: "Example string",
	size: 1,
	width: 6	
}

// icon used to represent component when adding to a page via /en-admin/page
// see https://fontawesome.com/icons?d=gallery for available classnames
// NB: exclude the "fa-" prefix
Contact.icon='align-center'; // fontawesome icon
*/