// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// // import { setCountInterval } from '../Redux/actions';
// import { setCountInterval } from '../Redux/Slices/counterSlice';



// const Counter = () => {
//     const count = useSelector((state) => {
//         return state.counter.count;
//     });
//     const dispatch = useDispatch();
//     console.log(count);

//     const handleIncrement = () => {
//         dispatch(setCountInterval({ count: count + 1 }));

//     };
//     const handleDecrement = () => {
//         dispatch(setCountInterval({ count: count - 1 }));


//     };
//     return (
//         <div>
//             <h1>count</h1>
//             <h2>{count}</h2>
//             <button onClick={() => dispatch(setCountInterval({ count: 0 }))}>Reset</button>
//             <button onClick={() => dispatch(setCountInterval({ count: count + 1 }))}>Increment</button>
//             <button onClick={() => dispatch(setCountInterval({ count: count - 1 }))}>Decrement</button>


//             <button onClick={() => dispatch(setCountInterval({ count: count + 5 }))}>Increment by 5</button>
//             <button onClick={() => dispatch(setCountInterval({ count: count - 5 }))}>Decrement by 5</button>


//             <button onClick={handleIncrement}>+</button>
//             {/* <button onClick={() => dispatch(setCountInterval({ count: count - 1 }))}>-</button> */}

//             <button onClick={handleDecrement}>-</button>

//             <h1>User</h1>

//         </div>
//     );
// };

// export default Counter;








import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "../Redux/Slices/counterSlice";



const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    const handleDecrement = () => {
        dispatch(decrement());
    };

    const handleIncrement = () => {
        dispatch(increment());
    };

    const handleIncrementByFive = () => {
        dispatch(incrementByAmount(5));
    };

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleIncrementByFive}>Increment by 5</button>
        </div>
    );
};

export default Counter;
