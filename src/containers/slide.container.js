import React from 'react';
import { withRouter } from 'react-router';

class SlideContainer extends React.Component {

	constructor(props) {
		super(props);

		this.state = { didMount: false, didTransition: false }

		this.buildClassList = this.buildClassList.bind(this);
	}

	componentDidMount() {
		//why set timeout
       setTimeout(() => {
            this.setState({ didMount: true });
        }, 0)
    }

	componentDidUpdate() {
		if (this.props.config.transition) {
			const dest = this.props.config.dest;

			setTimeout(() => {
				this.props.resetHandler();
	            this.props.history.push(dest);
	        }, 500)
		}
	}

	buildClassList() {
		const isForward = this.isForward;
		let classNames = '';

		isForward ? (classNames += ' f-enter-start') : (classNames += ' f-enter-start')

		if (this.state.didMount) isForward ? (classNames += ' f-enter') : (classNames += ' f-enter')

		if (this.props.config.transition) isForward ? (classNames += ' f-exit') : (classNames += ' f-exit')

		return classNames;
	}

	render() {
		return (
			<div className={ this.buildClassList() }>
				{ this.props.children }
			</div>
		)
	}
}

export default withRouter(SlideContainer);