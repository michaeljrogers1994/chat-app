import ContactList from "UI/ContactList";
import ActiveConversation from "UI/ActiveConversation";
import {useSession} from 'UI/Session';
import Container from 'UI/Container';
import LoginForm from 'UI/LoginForm';

export default function Main(props) {
	const { session } = useSession();

	if (!session?.user?.id) {
		return <Container>
			<h2>Welcome to ChatApp!</h2>
			<LoginForm noForgot = {true}/>
		</Container>
	}

	return (
		<div className="main">
			<ContactList/>
			<ActiveConversation/>
		</div>
	);
}

Main.propTypes = {
	
};

Main.icon='align-center'; // fontawesome icon
