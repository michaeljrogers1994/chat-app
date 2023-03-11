import Container from 'UI/Container';
import Input from 'UI/Input';
import Form from 'UI/Form';
import {useMain} from 'UI/SessionMain';
import {useSession, useRouter} from 'UI/Session';
import logout from 'UI/Functions/Logout';

export default function ActiveConversation(props) {
	const {main, setMain} = useMain();
	const {session, setSession} = useSession();
	const { pageState, setPage } = useRouter();

	if (!main?.id) {
		return (
			<div className="active-conversation">
				<div className = "top-bar">
					{main?.username && <span className = "active-convo-user">
						<i class="far fa-at"></i> {main.username} 
					</span>}
					<button 
						className = "logout-button" 
						onClick = {() => {
							logout("/", setSession, setPage);
						}}
					>
						Logout
					</button>
				</div>
				<Container style = {{color: "black"}}>
					<center>
						<i style = {{marginTop: "20px", fontSize: "128px"}} class="fad fa-comments"></i>
					</center>
					<h3>Welcome to ChatApp!</h3>
					<p>To start a chat, send a chat invite to a user by entering their username below</p>
					<Form
						action = "chat"
					>
						<Input name = "username" type = "text"/>
						<Input type = "submit">Start Chat!</Input>
					</Form>
				</Container>
			</div>
		);
	}

	return (
		<div className="active-conversation">
			<div className = "top-bar">
				<span className = "active-convo-user">
					<i class="far fa-at"></i> {main.username} 
				</span>
			</div>
			<div className = "input-bar">
				<Form
					action = "message"
				>
					<Input type = "textarea" className="form-control text-area"/>
					<Input type = "submit" className="btn btn-primary submit">
						Submit
					</Input>
				</Form>
			</div>
		</div>
	);
}
