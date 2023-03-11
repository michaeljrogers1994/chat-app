/**Contact - general use component to show contact in contact list. */
import defaultUser from './default-user.jpg';
import getRef from 'UI/Functions/GetRef'; 
import {useMain} from 'UI/SessionMain';

export default function Contact({ user }) {
	const defaultUserUrl = getRef(defaultUser, { url: true });
	const {main, setMain} = useMain();
	const isActive = main?.id === user.id;
	
	return (
		<button className={`contact ${isActive && `active`}`} onClick = {() => {setMain(user)}}>
			<img className = "image" src = {defaultUserUrl} />
			<div className = {`online-status ${user ? "online" : "offline"}`}/>
			<span className = "name">
				{user.username}
			</span>
		</button>
	);
}
