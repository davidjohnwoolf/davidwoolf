import React from 'react';
import { withRouter } from 'react-router';

class CustomLink extends React.Component {

	render() {
		return (
			<a href="#" onClick={ () => this.props.startHandler(this.props.location.pathname) }>{ this.props.children }</a>
		);
	}
}

export default withRouter(CustomLink);