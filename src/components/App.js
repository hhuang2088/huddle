import React from 'react';
import { Container } from 'semantic-ui-react';
import Banner from './Banner';
import Body from './Body';
import ScreenMockup from './ScreenMockup';
import UserStory from './UserStory';
import Footer from './Footer';

class App extends React.Component {
	render() {
		return(
			<div>
				<Container>
					<Banner />
					<Body />
					<ScreenMockup />
					<UserStory />
				</Container>
				<Footer />
			</div>
		);
	};
};

export default App;
