import React, {Component} from 'react';
import PropTypes from 'prop-types';
class MyComponent extends Component{
	render(){
		return (
			<div>
				이름 {this.props.name}
				나이
				{this.props.age}
			</div>
		);
	}
			
}
MyComponent.defaultProps = {
	name : '기본 이름'
}
MyComponent.propTypes = {
	name : PropTypes.string,
	age : PropTypes.number.isRequired
}
export default MyComponent;