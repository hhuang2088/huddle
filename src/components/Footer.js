import React from 'react';
import { Segment, Grid, Header, Input, Icon, Image } from 'semantic-ui-react';
import logo from '../images/logo2.svg';
import footerImage from '../images/bg-footer-desktop.png';

const Footer = () => {
	return(
		<div style={{backgroundColor: '#1A1C1D' }}>
			<Segment basic inverted>
				<Grid container stackable inverted padded divided="vertically">
					<Grid.Row>
						<Segment basic>
							<Image inverted src={logo} />
						</Segment>
					</Grid.Row>
					<Grid.Row centered>
						<Grid.Column computer={4} mobile={16}>
							<Header inverted color="grey">
								Lorem ipsum dolor sit amet<br />
								consectetur adipiscing elit. Morbi<br />
								hendrerit tincidunt risus eget<br />
								vestibulum. Integer vel ligula dictum.<br />
							</Header>
							<Icon size="big" name="facebook" />
							<Icon size="big" name="instagram" />
							<Icon size="big" name="twitter" />
						</Grid.Column>
						<Grid.Column computer={4} mobile={16}>
							<Header inverted size="tiny" color="grey">About Us</Header>
							<Header inverted size="tiny" color="grey">What We Do</Header>
							<Header inverted size="tiny" color="grey">FAQ</Header>
						</Grid.Column>
						<Grid.Column computer={4} mobile={16}>
							<Header inverted size="tiny" color="grey">Career</Header>
							<Header inverted size="tiny" color="grey">Blog</Header>
							<Header inverted size="tiny" color="grey">Contact Us</Header>
						</Grid.Column>
						<Grid.Column computer={4} mobile={16}>
							<Header inverted color="grey" size="medium">SUBSCRIBE</Header>
							<Input icon={<Icon bordered inverted name="arrow right" color="pink" link />} placeholder='email@example.com' />
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Segment>
			<div>
				<Image fluid src={footerImage} />
				<Header color="grey" textAlign='center' size="tiny">© 2018 Huddle Copyright</Header>
			</div>
		</div>
	);
};

export default Footer;
