import React from 'react';
import { Segment, Header, Container, Button } from 'semantic-ui-react';

const Body = () => {
	return(
		<div>
			<Segment basic padded="very" textAlign="center">
				<Container text>
					<Header textAlign="center" as="h1" size="huge">Build The Community Your Fans Will Love</Header>
					<Header size="small" color="grey">
						Huddle re-imagines the way we build communities. You have a voice,<br />
						but so does your audience. Create connections with your users as you<br />
						engage in genuine discusion.
					</Header>
					<Button size="massive" color="pink" content="Get Started For Free" />
				</Container>
			</Segment>
		</div>
	);
};

export default Body;
