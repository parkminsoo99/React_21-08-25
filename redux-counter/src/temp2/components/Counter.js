import React from 'react';
import Proptypes from 'prop-types';
import './Counter.css';

const Counter = ({number, color, onIncrement, onDecrement, onSetColor}) => {
    return (
        <div 
            className="Counter" 
            onClick={onIncrement} 
            onContextMenu={
                (e) => { 
                    e.preventDefault(); 
                    onDecrement();
                }
            } 
            onDoubleClick={onSetColor}
            style={{backgroundColor: color}}>
                {number}
        </div>
    );
};

Counter.propTypes = {
	vnumber : Proptypes.number,
	color : Proptypes.string,
	onIncrement : Proptypes.func,
	onDecrement : Proptypes.func,
	onSetColor : Proptypes.func
}
Counter.defaultProps = {
	number : 0,
	color : 'black',
	onIncrement : () => console.warn("not onIncrement"),
	onDecrement : () => console.warn("not onDecrement"),
	onSetColor : () => console.warn("not color")
}
export default Counter;