import React, { Component } from 'react';
import PropTypes from 'prop-types';
class MyComponent extends Component {
	static defaultProps = {
		name: '기본 이름',
	};

	static propTypes = {
		name: PropTypes.string,
		age: PropTypes.number.isRequired,
	};
	state = {
		number: 0,
	};
	render() {
		return (
			<div>
				이름 {this.props.name}
				나이
				{this.props.age}
				숫자 {this.state.number}
				<button
					onClick={() => {
						this.setState({
							number: this.state.number + 1,
						});
					}}
				>
					더하기
				</button>
			</div>
		);
	}
}

export default MyComponent;