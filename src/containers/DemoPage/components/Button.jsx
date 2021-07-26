import React from 'react'

// >React 16.8 class组件写法
export default class Button extends React.Component {
	state = {
		count: 1,
	}

	constructor(props) {
    super(props)
		console.log( this.props)
	}

	handleClick() {
		this.setState({ count: this.state.count + 1 })
	}

	render() {
		return (
			<div>
				<h1>{this.state.count}</h1>
				<button onClick={() => this.handleClick()}>Click Me</button>
			</div>
		)
	}
}