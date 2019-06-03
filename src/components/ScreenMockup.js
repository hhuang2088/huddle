import React from 'react';
import { Segment, Image } from 'semantic-ui-react';
import screenMockup from '../images/screen-mockups.svg';

const ScreenMockup = () => {
	return(
		<div>
			<Segment padded="very" basic textAlign="center">
				<Image src={screenMockup} />
			</Segment>
		</div>
	);
};

export default ScreenMockup;
