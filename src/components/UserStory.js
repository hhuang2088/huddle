import React from 'react';
import { Grid, Segment, Header, Button } from 'semantic-ui-react';
import UserLeftPanel from './UserLeftPanel';
import UserRightPanel from './UserRightPanel';

const UserStory = () => {
	return(
		<div>
			<Grid divided="vertically">
				<Grid.Row>
					<Grid.Column computer={8} mobile={16}>
						<UserLeftPanel />
					</Grid.Column>
					<Grid.Column computer={8} mobile={16}>
						<UserRightPanel />
					</Grid.Column>
				</Grid.Row>
			</Grid>
			<div style={{paddingBottom: '100px'}}>
				<Segment padded="very" basic textAlign="center">
					<Header textAlign="center" as="h1" size="huge">Ready to Build Your Community</Header>
					<Button size="massive" color="pink" content="Get Started For Free" />
				</Segment>
			</div>
		</div>
	);
};

export default UserStory;
