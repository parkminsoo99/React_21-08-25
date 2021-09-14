import React, {Component} from 'react';
import pageTemplate from './PageTemplate';
import TodoInputContainer from '../containers/TodoInputContainer';
import TodoListContiner from '../containers/TodoListContainer';

class App extends Component {
	render() {
		return(
			<pageTemplate>
				<TodoInputContainer>
				<TodoListContiner>
				</TodoListContiner>
				</TodoInputContainer>
			</pageTemplate>
		);
	}
}
export default App;