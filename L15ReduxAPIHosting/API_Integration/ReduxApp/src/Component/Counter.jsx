// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement, reset } from './Redux/Store/store';

// const Counter = () => {
//     const count = useSelector(state => state.count);
//     const dispatch = useDispatch();

//     return (
//         <div style={styles.container}>
//             <h1 style={styles.heading}>Counter App with Redux</h1>
//             <div style={styles.counter}>Count: {count}</div>
//             <div style={styles.buttons}>
//                 <button
//                     style={styles.button}
//                     onClick={() => dispatch(increment())}
//                 >
//                     Increment
//                 </button>
//                 <button
//                     style={styles.button}
//                     onClick={() => dispatch(decrement())}
//                 >
//                     Decrement
//                 </button>
//                 <button
//                     style={styles.button}
//                     onClick={() => dispatch(reset())}
//                 >
//                     Reset
//                 </button>
//             </div>
//         </div>
//     );
// };

// const styles = {
//     container: {
//         textAlign: 'center',
//         marginTop: '50px',
//         fontFamily: 'Arial, sans-serif'
//     },
//     heading: {
//         color: '#333'
//     },
//     counter: {
//         fontSize: '24px',
//         margin: '20px 0'
//     },
//     buttons: {
//         display: 'flex',
//         justifyContent: 'center',
//         gap: '10px'
//     },
//     button: {
//         padding: '10px 20px',
//         fontSize: '16px',
//         backgroundColor: '#4CAF50',
//         color: 'white',
//         border: 'none',
//         borderRadius: '4px',
//         cursor: 'pointer'
//     }
// };


// export default Counter;






import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset } from '../Redux/counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Counter App with Redux</h1>
      <div>Count: {count}</div>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default Counter;
