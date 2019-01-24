import React from 'react'

class ErrorBoundary extends React.Component {

    constructor(props) {
    	super(props)

    	this.state = { hasError: false }
    }
    
    componentDidCatch() {
        this.setState({ hasError: true })
    }
    
    render() {
    	return this.state.hasError
	    	? (
	    		<section id="react-error">
			        <div className="error-warning">
			            &#9888;
			        </div>
			        <h2>Sorry, something went wrong!</h2>
			        <p>Please try again or contact me at <a href="mailto:davidjohnwoolf@gmail.com">davidjohnwoolf@gmail.com</a>.</p>
			    </section>
			) : this.props.children
    }
}

export default ErrorBoundary