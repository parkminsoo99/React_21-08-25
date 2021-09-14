import React, {Component} from 'react';
import pageTemplate from './PageTemplate';
import TodoInputContainer from '../containers/TodoInputContainer';
import todoListContiner from '../containers/TodoListContainer';

class App extends Component {
	render() {
		return(
			<pageTemplate>
				<TodoInputContainer>
				<TodoListContainer>
				</TodoListContainer>
				</TodoInputContainer>
			</pageTemplate>
		);
	}
}
export default App;