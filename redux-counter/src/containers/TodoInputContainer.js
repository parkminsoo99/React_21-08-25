import React, { Component } from 'react';
import TodoInput from '../components/TodoInput';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as inputActions from '../modules/input';
import * as todosActions from '../modules/todos';

class TodoInputContainer extends Component {
	render() {
		const { value } = this.props;
		const { handleInsert, handleChange } = this;
	id = 1;
	getId = () => {
		return ++this.id;
	};
	handleChange = (e) => {
		const { value } = e.target;
		const { InputActions } = this.props;
		InputActions.setInput(value);
	};
	handleInsert = () => {
		const { InputActions, TodosActions, value } = this.props;
		const todo = {
			id: this.getId(),
			text: value,
			done: false,
		};
		TodosActions.insert(todo);
		TodosActions.setInput('');
	};
	
		return (
			<TodoInput onChange={handleChange} onInsert={handleInsert} value={value}></TodoInput>
		);
	}
}
export default connect(
	(state) => ({
		value: state.input.get('value'),
	}),
	(dispatch) => ({
		InputActions: bindActionCreators(inputActions, dispatch),
		TodosActions: bindActionCreators(todosActions, dispatch),
	})
)(TodoInputContainer);
