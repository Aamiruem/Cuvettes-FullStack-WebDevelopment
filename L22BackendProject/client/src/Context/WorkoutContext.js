// import { createContext, useState } from 'react';
// export const Data = createContext();


// const WorkoutContext = ({children}) => {
//     //Get Request
//     const [workouts, setWorkouts] = useState([]);
//     return (
//         <div>
//             <Data.Provider value={{ workouts, setWorkouts }}>
//                 {children}
//             </Data.Provider>
//         </div>
//     )
// }

// export default WorkoutContext



import { createContext, useState } from 'react';
import axios from 'axios';

export const Data = createContext();

const WorkoutContext = ({ children }) => {
    // All workouts
    const [workouts, setWorkouts] = useState([]);

    // Form state for creating new workout
    const [form, setForm] = useState({
        title: '',
        reps: '',
        load: '',
        notes: ''
    });

    // Form state for updating a workout
    const [updateForm, setUpdateForm] = useState({
        _id: null,
        title: '',
        reps: '',
        load: '',
        notes: ''
    });

    // Fetch workouts from backend
    const getWorkouts = async () => {
        try {
            const response = await axios.get('http://localhost:4000/api/workouts');
            const data = response.data;
            setWorkouts(data);
        } catch (error) {
            console.error('Error fetching workouts:', error.message);
        }
    };

    // Delete workout
    const deleteWorkout = async (_id) => {
        try {
            await axios.delete(`http://localhost:4000/api/workouts/${_id}`);
            getWorkouts();
        } catch (error) {
            console.error('Error deleting workout:', error.message);
        }
    };

    // Start editing a workout
    const startEditing = (workout) => {
        setUpdateForm({
            _id: workout._id,
            title: workout.title,
            reps: workout.reps,
            load: workout.load,
            notes: workout.notes || ''
        });
    };

    // Handle update field change
    const handleUpdateFieldChange = (e) => {
        setUpdateForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }));
    };

    // Update workout
    const updateWorkout = async (_id) => {
        try {
            await axios.put(`http://localhost:4000/api/workouts/${_id}`, updateForm);
            getWorkouts();
            setUpdateForm({ _id: null, title: '', reps: '', load: '', notes: '' }); // Reset after update
        } catch (error) {
            console.error('Error updating workout:', error.message);
        }
    };

    return (

        
        <Data.Provider
            value={{
                workouts,
                setWorkouts,
                form,
                setForm,
                getWorkouts,
                deleteWorkout,
                updateWorkout,
                updateForm,
                handleUpdateFieldChange,
                startEditing,
                

            }}
        >
            {children}
        </Data.Provider>

        
    
    );

        

};

export default WorkoutContext;
