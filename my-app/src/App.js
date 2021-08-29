import React, {Component} from 'react';

import ScrollBox from './ex/ScrollBox.js';

class App extends Component{
	render(){
		return(
			<div>
			<ScrollBox ref={(ref) => this.scrollBox = ref}/>
			<button onClick = {() => this.scrollBox.scrolltoBottom()}>맨 밑으로</button>
			</div>
		);
	}
}


export default App;
