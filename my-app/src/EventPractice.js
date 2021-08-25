import React, {Component} from 'react';

class EventPractice extends Component{

	handleChange = (e) => {
		this.setState({
			[e.target.name] : e.target.value
		});
	}
	handleClick = () =>{
		alert(this.state.username + ':' +this.state.message);
		this.setState({
			username : '',
			message : ''
		});
	}
	state = {
		username : '',
		message : ''
	}
	render() {
		return (
		<div>
			<h1>이벤트 연습</h1>
				<input type = "text" 
					name = "username" 
					placeholder = "유저명" 
					value = {this.state.username} 
					onChange = {this.handleChange} 
					/>
				<input type ="text"
					name = "message"
					plaeceholder = "아무거나 입력"
					value = {this.state.message}
					onChange = {this.handleChange}/>
				<button onClick={this.handleClick}>확인</button>
			</div>
		);
	}
}
export default EventPractice;