import React from 'react';
import { withRouter } from 'react-router';

class CustomLink extends React.Component {

	render() {
		return (
			<a href="javascript:void(0);" onClick={ () => this.props.startHandler(this.props.location.pathname) }>
				{ this.props.children }
			</a>
		);
	}
}

export default withRouter(CustomLink);