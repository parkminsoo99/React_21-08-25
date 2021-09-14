import React, { Component } from 'react';
import TodoList from '../components/TodoList/TodoList';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as todosActions from '../modules/todos';

class TodoListContainer extends Component {
	handleToggle = (id) => {
		const { TodoActions } = this.props;
		TodoActions.toggle(id);
	};
	handleRemove = (id) => {
		const { TodoActions } = this.props;
		TodoActions.remove(id);
	};
	render() {
		const { todos } = this.props;
		const { handleRemove, handleToggle } = this;

		return <TodoList todos={todos} onToggle={handleToggle} onRemove={handleRemove} />;
	}
}
export default connect(
	(state) => ({
		todos: state.todos,
	}),
	(dispatch) => ({
		TodoActions: bindActionCreators(todosActions, dispatch),
	})
)(TodoListContainer);