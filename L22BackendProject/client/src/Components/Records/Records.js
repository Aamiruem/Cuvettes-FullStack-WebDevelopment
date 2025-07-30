// import "./RecordStyle.css";

// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import {Data} from '../../Context/WorkoutContext';
// import { useContext } from 'react';

// const Records = () => {
//     const [workouts, setWorkouts] = useState(null);

//     // Fetch workouts when component mounts
//     useEffect(() => {
//         const getWorkouts = async () => {
//             try {
//                 const response = await axios.get('http://localhost:4000/api/workouts');
//                 console.log(response.data);
//                 setWorkouts(response.data);
//             } catch (error) {
//                 console.error('Error fetching data:', error.message);
//             }
//         };

//         getWorkouts();
//     }, []);

//     // Optional: delete handler (for the button to work)
//     const deleteWorkout = async (id) => {
//         try {
//             await axios.delete(`http://localhost:4000/api/workouts/${id}`);
//             setWorkouts(workouts.filter(workout => workout._id !== id)); // update local state
//         } catch (error) {
//             console.error('Error deleting workout:', error.message);
//         }
//     };

//     return (
//         <div>
//             <h2>Workout Records</h2>
//             {workouts ? (
//                 workouts.map((item) => (
//                     <div key={item._id} className="record">
//                         <h3>{item.title}</h3>
//                         <p>Reps: {item.reps}</p>
//                         <p>Load: {item.load} kg</p>
//                         {item.notes && <p>Notes: {item.notes}</p>}
//                         <button onClick={() => alert("Edit functionality not implemented")}>Edit</button>
//                         <button onClick={() => deleteWorkout(item._id)}>Delete</button>
//                     </div>
//                 ))
//             ) : (
//                 <p>Loading workouts...</p>
//             )}
//         </div>
//     );
// };

// export default Records;











// Import styles specific to this component
import "./RecordStyle.css";

// Import necessary hooks and dependencies
import { useEffect, useContext } from 'react';
import axios from 'axios'; // HTTP client for API calls
import { Data } from '../../Context/WorkoutContext'; // Context to manage global workout state

// Define the Records component
const Records = () => {
    // Destructure the context value (workouts and setWorkouts function)
    const [workouts, setWorkouts] = useContext(Data);

    // useEffect hook runs once after component mounts (empty dependency array [])
    useEffect(() => {
        // Async function to fetch workout data
        const getWorkouts = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/workouts'); // Fetch data from backend
                console.log(response.data); // Log the result to browser console
                setWorkouts(response.data); // Update state in context
            } catch (error) {
                console.error('Error fetching data:', error.message); // Log error message if request fails
            }
        };

        getWorkouts(); // Call the function
    }, []); // [] ensures it only runs once after initial render

    // Function to delete a workout by ID
    const deleteWorkout = async (id) => {
        try {
            // Call DELETE endpoint on backend
            await axios.delete(`http://localhost:4000/api/workouts/${id}`);
            // Update local state by filtering out the deleted workout
            setWorkouts(workouts.filter(workout => workout._id !== id));
        } catch (error) {
            console.error('Error deleting workout:', error.message);
        }
    };

    // JSX to render UI
    return (
        <div>
            <h2>Workout Records</h2>

            {/* Conditional rendering: If workouts are fetched */}
            {workouts ? (
                // Map through each workout item
                workouts.map((item) => (
                    <div key={item._id} className="record">
                        <h3>{item.title}</h3>
                        <p>Reps: {item.reps}</p>
                        <p>Load: {item.load} kg</p>
                        {/* Render notes only if present */}
                        {item.notes && <p>Notes: {item.notes}</p>}

                        {/* Placeholder edit button */}
                        <button onClick={() => alert("Edit functionality not implemented")}>Edit</button>

                        {/* Delete button */}
                        <button onClick={() => deleteWorkout(item._id)}>Delete</button>
                    </div>
                ))
            ) : (
                // If data hasn't loaded yet
                <p>Loading workouts...</p>
            )}
        </div>
    );
};

// Export component so it can be used in other files
export default Records;
