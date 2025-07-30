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








import "./RecordStyle.css";
import { useEffect, useContext, useState } from 'react';
import axios from 'axios';
import { Data } from '../../Context/WorkoutContext';

const Records = () => {
    const { workouts, setWorkouts } = useContext(Data);

    const [editingId, setEditingId] = useState(null);
    const [formData, setFormData] = useState({
        title: '',
        load: '',
        reps: '',
        notes: ''
    });

    const API_BASE_URL = 'http://localhost:4000/api/workouts';

    const fetchWorkouts = async () => {
        try {
            const response = await axios.get(API_BASE_URL);
            setWorkouts(response.data);
        } catch (error) {
            console.error('Error fetching workouts:', error.message);
        }
    };

    const createWorkout = async () => {
        try {
            await axios.post(API_BASE_URL, {
                ...formData,
                reps: Number(formData.reps),
                load: Number(formData.load)
            });
            fetchWorkouts();
            resetForm();
        } catch (error) {
            console.error('Error creating workout:', error.message);
        }
    };

    const updateWorkout = async () => {
        try {
            await axios.patch(`${API_BASE_URL}/${editingId}`, {
                ...formData,
                reps: Number(formData.reps),
                load: Number(formData.load)
            });
            fetchWorkouts();
            resetForm();
            setEditingId(null);
        } catch (error) {
            console.error('Error updating workout:', error.message);
        }
    };

    const deleteWorkout = async (id) => {
        try {
            await axios.delete(`${API_BASE_URL}/${id}`);
            fetchWorkouts();
        } catch (error) {
            console.error('Error deleting workout:', error.message);
        }
    };

    useEffect(() => {
        fetchWorkouts();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const resetForm = () => {
        setFormData({
            title: '',
            load: '',
            reps: '',
            notes: ''
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        editingId ? updateWorkout() : createWorkout();
    };

    const startEditing = (workout) => {
        setFormData({
            title: workout.title,
            load: workout.load,
            reps: workout.reps,
            notes: workout.notes || ''
        });
        setEditingId(workout._id);
    };

    const cancelEditing = () => {
        resetForm();
        setEditingId(null);
    };

    return (
        <div className="record-container">
            <h2>Workout Records</h2>

            <form onSubmit={handleSubmit} className="record-form">
                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="number"
                    name="reps"
                    placeholder="Reps"
                    value={formData.reps}
                    onChange={handleInputChange}
                    required
                />
                <input
                    type="number"
                    name="load"
                    placeholder="Load (kg)"
                    value={formData.load}
                    onChange={handleInputChange}
                    required
                />
                <textarea
                    name="notes"
                    placeholder="Notes (optional)"
                    value={formData.notes}
                    onChange={handleInputChange}
                />
                <button type="submit">
                    {editingId ? 'Update Workout' : 'Add Workout'}
                </button>
                {editingId && (
                    <button type="button" onClick={cancelEditing}>Cancel</button>
                )}
            </form>

            <div className="record-list">
                {workouts && workouts.length > 0 ? (
                    workouts.map((item) => (
                        <div key={item._id} className="record-card">
                            <h3>{item.title}</h3>
                            <p>Reps: {item.reps}</p>
                            <p>Load: {item.load} kg</p>
                            {item.notes && <p>Notes: {item.notes}</p>}
                            <button onClick={() => startEditing(item)}>Edit</button>
                            <button onClick={() => deleteWorkout(item._id)}>Delete</button>
                        </div>
                    ))
                ) : (
                    <p>Loading workouts...</p>
                )}
            </div>
        </div>
    );
};

export default Records;
