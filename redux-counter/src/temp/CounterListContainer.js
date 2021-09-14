import CounterList from '../components/CounterList';
import * as actions from '../actions';
import {connect} from 'react-redux';
import getRandomColor from '../lib/getRandomColor';
const CounterList=({counters, onIncrement, onDecrement, onSetColor}) => {
	const counterList = counter.map((counter, i) => (
	<Counter 
		key={i}
		index={i}
		{...counter}
		onIncrement = {onIncrement}
		onDecrement = {onDecrement}
		onSetColor = {onSetColor} ></Counter>
		));
	return (
	<div className = "CounterList">
		{counterList}
		</div>
	);
};

counterList.defaultProps =  {
	counters : []
}
export default CounterList;