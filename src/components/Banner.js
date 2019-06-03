import React from 'react';
import { Image, Button, Segment } from 'semantic-ui-react';
import logo from '../images/logo.svg';

const Banner = () => {
	return(
		<div>
			<Segment padded="very" basic>
				<Image floated="left" src={logo} />
				<Button floated="right" basic color='pink'>Try It Free</Button>
			</Segment>
		</div>
	);
};

export default Banner;
