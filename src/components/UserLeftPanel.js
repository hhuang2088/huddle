import React from 'react';
import { Container, Header } from 'semantic-ui-react';

const UserLeftPanel = () => {
	return(
		<div>
			<Container text padded="very">
				<Header>Grow Together</Header>
				<Header size="tiny" color="grey">
					Generate meaningful discussions with your audience and<br />
					build a strong, loyal community. Think of the insightful<br />
					conversations you miss out on with a feedback fom.
				</Header>
			</Container>
			<br />
			<br />
			<Container text>
				<Header>Flowing Conversations</Header>
				<Header size="tiny" color="grey">
					You wouldn't paginate a conversation in real life, so why do it<br />
					online? Our threads have just-in-time loading for a more<br />
					natural flow.
				</Header>
			</Container>
			<br />
			<br />
			<Container text>
				<Header>Your Users</Header>
				<Header size="tiny" color="grey">
					It takes no time at all to integrate Huddle with your app's<br />
					authentication solution. This means, once signed in to your<br />
					app, your users can start chatting immediately.
				</Header>
			</Container>
		</div>
	);
};

export default UserLeftPanel;
