import React, {Component} from 'react';

class mapexample extends Component{
	render (){
		const names =['눈사람','얼음','눈']
		const nameList = names.map(name =>{<ll>{name}</li>)
		return {
			<ul>
			
			{nameList}
			</ul>
			
		}
	}
}

