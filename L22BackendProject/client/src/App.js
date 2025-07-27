// import './App.css';
// import { useState, useEffect } from 'react'; // ✅ Imported useEffect
// import axios from 'axios';

// function App() {
//   // ✅ State to store fetched workouts
//   const [workouts, setWorkouts] = useState([]);

//   // ✅ Function to fetch workouts from backend
//   const getWorkouts = async () => {
//     try {
//       const response = await axios.get('http://localhost:4000/api/workouts');
//       console.log(response.data); // Optional: log full response data
//       setWorkouts(response.data); // ✅ Set the workouts state
//     } catch (error) {
//       console.error('Error fetching data:', error.message);
//     }
//   };

//   // ✅ Fetch workouts on component mount
//   useEffect(() => {
//     getWorkouts();
//   }, []);

//   return (
    

//     <div className="App">
//       <h1>Workout Tracker</h1>

//       {/* Optional manual refetch button */}
//       <button onClick={getWorkouts}>Refresh Workouts</button>

//       {/* Render workouts */}
//       <ul>
//         {workouts.map((workout) => (
//           <li key={workout._id}>
//             <strong>{workout.title}</strong>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;












// import './App.css';
// import { useState, useEffect } from 'react';
// import axios from 'axios';

// function App() {
//   // ✅ State to store fetched workouts
//   const [workouts, setWorkouts] = useState([]);

//   // ✅ Function to fetch workouts from backend
//   const getWorkouts = async () => {
//     try {
//       const response = await axios.get('http://localhost:4000/api/workouts');
//       console.log(response.data);
//       setWorkouts(response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error.message);
//     }
//   };

//   // ✅ Fetch workouts on component mount
//   useEffect(() => {
//     getWorkouts();
//   }, []);

//   return (
//     <div className="App">
//       <h1>Workout Tracker</h1>

//       {/* Optional manual refetch button */}
//       <button onClick={getWorkouts}>Refresh Workouts</button>

//       {/* Render detailed workout cards */}
//       {workouts.length > 0 ? (
//         workouts.map((item) => (
//           <div key={item._id} className="workout-item">
//             <h2>{item.title}</h2>
//             <p>{item.description}</p>
//             <p>Date: {new Date(item.createdAt).toLocaleDateString()}</p>
//             <p>Duration: {item.duration} minutes</p>
//           </div>
//         ))
//       ) : (
//         <p>No workouts found.</p>
//       )}
//     </div>
//   );
// }

// export default App;








import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [workouts, setWorkouts] = useState([]);

  // Fetch workouts from API
  const getWorkouts = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/workouts');
      setWorkouts(response.data);
    } catch (error) {
      console.error('Error fetching workouts:', error.message);
    }
  };

  // Fetch once when component mounts
  useEffect(() => {
    getWorkouts();
  }, []);

  return (
    <div className="App">
      <h1>Workout Tracker</h1>
      <button onClick={getWorkouts}>Refresh Workouts</button>

      {/* Render each workout */}
      {workouts.length > 0 ? (
        workouts.map((item) => (
          <div key={item._id} className="record">
            <h2>{item.title}</h2>
            <p>Reps: {item.reps}</p>
            <p>Load: {item.load} kg</p>
          </div>
        ))
      ) : (
        <p>No workouts found.</p>
      )}
    </div>
  );
}

export default App;
