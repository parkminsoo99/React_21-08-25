import React, {Component} from 'react';

class MapExample extends Component{
	state = {
		names : ['눈사람','얼음','눈'],
		name : ''
	}
	handleChange = (e) => {
		this.setState({
			name : e.target.value,
		});
	}
	handleInsert = () => {
		this.setState({
			names : this.state.names.concat(this.state.name),
			name : ''
		});
	}
	handleRemove = (index) => {
		const {names} = this.state;
		this.setState({
			names : names.filter((item, i ) => i !== index) //filter를 이용한 삭제방법
			/*names :[
				...names.slice(0,index),
				...names.slice(index+1,names.length)
			] */ //2번째 삭제 방법
		});
	}
	
	render (){
		const nameList = this.state.names.map((name,index) =>(<li key ={index} onDoubleClick = {() => this.handleRemove(index)}>{name}</li>));
		return (
			<div>
			<input  onChange = {this.handleChange} value = {this.state.name}/>
			<button onClick = {this.handleInsert}>추가</button>
			<ul>
			{nameList}
			</ul>
				</div>
		);
	}
}
export default MapExample;
