import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import { setCountInterval } from '../Redux/actions'; 
import { setCountInterval } from '../Redux/Slices/counterSlice'; 



const Counter = () => {
    const count = useSelector((state) => {
        return state.counter.count;
    });
    const dispatch = useDispatch();
    console.log(count);

    const handleIncrement = () => {
        dispatch(setCountInterval({ count: count + 1 }));
    };
    return (
        <div>
            <h1>count</h1>
            <h2>{count}</h2>
            <button onClick={() => dispatch(setCountInterval({count: 0}))}>Reset</button>
            <button onClick={() => dispatch(setCountInterval({count: count + 1}))}>Increment</button>
            <button onClick={() => dispatch(setCountInterval({ count: count - 1 }))}>Decrement</button>
            

            <button onClick={() => dispatch(setCountInterval({ count: count + 5 }))}>Increment by 5</button>
            <button onClick={() => dispatch(setCountInterval({ count: count - 5 }))}>Decrement by 5</button>

            
            <button onClick={handleIncrement }>+</button>

        </div>
    );
};

export default Counter;
