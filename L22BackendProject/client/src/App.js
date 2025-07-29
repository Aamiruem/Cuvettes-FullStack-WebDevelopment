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







// import './App.css';
// import { useState, useEffect } from 'react';
// import axios from 'axios';

// function App() {
//   const [workouts, setWorkouts] = useState([]);

//   // Fetch workouts from API
//   const getWorkouts = async () => {
//     try {
//       const response = await axios.get('http://localhost:4000/api/workouts');
//       setWorkouts(response.data);
//     } catch (error) {
//       console.error('Error fetching workouts:', error.message);
//     }
//   };

//   useEffect(() => {
//     getWorkouts();
//   }, []);

//   // Form State
//   const [form, setForm] = useState({
//     title: '',
//     load: '',
//     reps: '',
//     notes: ''
//   });

//   // Update form field on input change
//   const updateFormField = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value
//     });
//   };

//   // Handle form submission
//   const createWorkout = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:4000/api/workouts', form);
//       getWorkouts(); // Refresh list
//       setForm({ title: '', load: '', reps: '', notes: '' }); // Reset form
//     } catch (error) {
//       console.error('Error creating workout:', error.message);
//     }
//   };

//   return (
//     <div className="App">
//       <form onSubmit={createWorkout}>
//         <h1>Create Record</h1>

//         <label htmlFor="title">Title</label>
//         <input
//           type="text"
//           name="title"
//           value={form.title}
//           onChange={updateFormField}
//           placeholder="Workout Title"
//           required
//         />
//         <br /><br />

//         <label htmlFor="load">Load (kg)</label>
//         <input
//           type="number"
//           name="load"
//           value={form.load}
//           onChange={updateFormField}
//           placeholder="Load in kg"
//           required
//         />
//         <br /><br />

//         <label htmlFor="reps">Reps</label>
//         <input
//           type="number"
//           name="reps"
//           value={form.reps}
//           onChange={updateFormField}
//           placeholder="Number of reps"
//           required
//         />
//         <br /><br />

//         <label htmlFor="notes">Notes</label>
//         <input
//           type="text"
//           name="notes"
//           value={form.notes}
//           onChange={updateFormField}
//           placeholder="Optional notes"
//         />
//         <br /><br />

//         <button type="submit">Save</button>
//       </form>

//       <h1>Workout Tracker</h1>
//       <button onClick={getWorkouts}>Refresh Workouts</button>

//       {/* Render each workout */}
//       {workouts.length > 0 ? (
//         workouts.map((item) => (
//           <div key={item._id} className="record">
//             <h2>{item.title}</h2>
//             <p>Reps: {item.reps}</p>
//             <p>Load: {item.load} kg</p>
//             {item.notes && <p>Notes: {item.notes}</p>}
//           </div>
//         ))
//       ) : (
//         <p>No workouts found.</p>
//       )}
//     </div>
//   );
// }

// export default App;















// import './App.css';
// import { useState, useEffect } from 'react';
// import axios from 'axios';

// function App() {
//   const [workouts, setWorkouts] = useState([]);
//   const [form, setForm] = useState({
//     title: '',
//     load: '',
//     reps: '',
//     notes: ''
//   });
//   const [editingId, setEditingId] = useState(null); // null means we're in 'create' mode

//   // Fetch all workouts
//   const getWorkouts = async () => {
//     try {
//       const response = await axios.get('http://localhost:4000/api/workouts');
//       setWorkouts(response.data);
//     } catch (error) {
//       console.error('Error fetching workouts:', error.message);
//     }
//   };

//   useEffect(() => {
//     getWorkouts();
//   }, []);

//   // Update form values
//   const updateFormField = (e) => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value
//     });
//   };

//   // Create or Update workout based on editingId
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (editingId) {
//         // Update workout
//         await axios.patch(`http://localhost:4000/api/workouts/${editingId}`, form);
//         setEditingId(null); // Reset mode
//       } else {

//         // Create new workout
//         await axios.post('http://localhost:4000/api/workouts', form);
//       }
//       setForm({ title: '', load: '', reps: '', notes: '' });
//       getWorkouts();
//     } catch (error) {
//       console.error('Error saving workout:', error.message);
//     }
//   };

//   // Delete workout
//   const deleteWorkout = async (id) => {
//     try {
//       await axios.delete(`http://localhost:4000/api/workouts/${id}`);
//       getWorkouts();
//     } catch (error) {
//       console.error('Error deleting workout:', error.message);
//     }
//   };

//   // Load data into form for editing
//   const startEditing = (workout) => {
//     setForm({
//       title: workout.title,
//       load: workout.load,
//       reps: workout.reps,
//       notes: workout.notes || ''
//     });
//     setEditingId(workout._id);
//   };

//   return (
//     <div className="App">
//       <form onSubmit={handleSubmit}>
//         <h1>{editingId ? 'Update Workout' : 'Create Workout'}</h1>

//         <label htmlFor="title">Title</label>
//         <input
//           type="text"
//           name="title"
//           value={form.title}
//           onChange={updateFormField}
//           required
//           placeholder="Workout Title"
//         />
//         <br /><br />

//         <label htmlFor="load">Load (kg)</label>
//         <input
//           type="number"
//           name="load"
//           value={form.load}
//           onChange={updateFormField}
//           required
//           placeholder="Load in kg"
//         />
//         <br /><br />

//         <label htmlFor="reps">Reps</label>
//         <input
//           type="number"
//           name="reps"
//           value={form.reps}
//           onChange={updateFormField}
//           required
//           placeholder="Number of reps"
//         />
//         <br /><br />

//         <label htmlFor="notes">Notes</label>
//         <input
//           type="text"
//           name="notes"
//           value={form.notes}
//           onChange={updateFormField}
//           placeholder="Optional notes"
//         />
//         <br /><br />

//         <button type="submit">{editingId ? 'Update' : 'Save'}</button>
//         {editingId && (
//           <button
//             type="button"
//             onClick={() => {
//               setEditingId(null);
//               setForm({ title: '', load: '', reps: '', notes: '' });
//             }}
//           >
//             Cancel
//           </button>
//         )}
//       </form>

//       <h1>Workout Tracker</h1>
//       <button onClick={getWorkouts}>Refresh Workouts</button>

//       {/* Render workouts */}
//       {workouts.length > 0 ? (
//         workouts.map((item) => (
//           <div key={item._id} className="record">
//             <h2>{item.title}</h2>

//             <p>Reps: {item.reps}</p>

//             <p>Load: {item.load} kg</p>

//             {item.notes && <p>Notes: {item.notes}</p>}

//             <button onClick={() => startEditing(item)}>Edit</button>

//             <button onClick={() => deleteWorkout(item._id)}>Delete</button>
//           </div>
//         ))
//       ) : (
//         <p>No workouts found.</p>
//       )}
//     </div>
//   );
// }

// export default App;











// // Import necessary tools and styles
// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import './App.css'; // custom styling


// function App() {
//   // ======== STATE MANAGEMENT ========

//   // Store the list of workouts
//   const [workouts, setWorkouts] = useState([]);

//   // Store the form input values
//   const [formData, setFormData] = useState({
//     title: '',
//     load: '',
//     reps: '',
//     notes: ''
//   });

//   // Track if we are editing an existing workout (null = create mode)
//   const [editingId, setEditingId] = useState(null);

//   // Base URL for the API
//   const API_BASE_URL = 'http://localhost:4000/api/workouts';

//   // ======== API FUNCTIONS (CRUD) ========

//   // Create a new workout (POST)
//   const createWorkout = async () => {
//     try {
//       await axios.post(API_BASE_URL, formData); // send new data
//       fetchWorkouts(); // refresh list
//       resetForm();     // clear form
//     } catch (error) {
//       console.error('Error creating workout:', error.message);
//     }
//   };

//   // Read (GET) all workouts from the API
//   const fetchWorkouts = async () => {
//     try {
//       const response = await axios.get(API_BASE_URL); // fetch all workouts
//       setWorkouts(response.data);                     // update UI with data on display 
//     } catch (error) {
//       console.error('Error fetching workouts:', error.message);
//     }
//   };

//   // Update (PATCH) an existing workout
//   const updateWorkout = async () => {
//     try {
//       await axios.patch(`${API_BASE_URL}/${editingId}`, formData); // send updated data
//       fetchWorkouts();     // refresh list
//       resetForm();         // clear form
//       setEditingId(null);  // exit edit mode
//     } catch (error) {
//       console.error('Error updating workout:', error.message);
//     }
//   };

//   // Delete (DELETE) a workout by its ID
//   const deleteWorkout = async (id) => {
//     try {
//       await axios.delete(`${API_BASE_URL}/${id}`); // delete by id
//       fetchWorkouts(); // refresh list
//     } catch (error) {
//       console.error('Error deleting workout:', error.message);
//     }
//   };

//   // ======== HELPERS ========

//   // Fetch workouts when the component first loads (like componentDidMount)
//   useEffect(() => {
//     fetchWorkouts();
//   }, []);

//   // Handle typing in form fields (input changes)
//   const handleInputChange = (e) => {
//     const { name, value } = e.target; // get the name and value from input
//     setFormData({
//       ...formData,          // spread previous data
//       [name]: value         // update the specific field by name
//     });
//   };

//   // Reset form to empty values
//   const resetForm = () => {
//     setFormData({
//       title: '',
//       load: '',
//       reps: '',
//       notes: ''
//     });
//   };

//   // Handle form submit — either create or update
//   const handleSubmit = (e) => {
//     e.preventDefault(); // prevent page reload
//     if (editingId) {
//       updateWorkout();  // if editing, call update
//     } else {
//       createWorkout();  // if not, create new workout
//     }
//   };

//   // When Edit is clicked, load workout data into form and enter edit mode
//   const startEditing = (workout) => {
//     setFormData({
//       title: workout.title,
//       load: workout.load,
//       reps: workout.reps,
//       notes: workout.notes || ''
//     });
//     setEditingId(workout._id); // mark the workout being edited
//   };

//   // Cancel editing and reset form
//   const cancelEditing = () => {
//     setEditingId(null); // exit edit mode
//     resetForm();        // clear form
//   };

//   // ======== UI RENDERING ========
//   return (
//     <div className="app-container">

//       {/* Workout Form */}
//       <div className="form-container">
//         <form onSubmit={handleSubmit}>
//           <h1 className="form-title">{editingId ? 'Update Workout' : 'Create Workout'}</h1>

//           {/* Input: Title */}
//           <div className="form-group">
//             <label htmlFor="title">Title</label>
//             <input
//               type="text"
//               name="title"
//               value={formData.title}
//               onChange={handleInputChange}
//               required
//               placeholder="Workout Title"
//             />
//           </div>

//           {/* Input: Load */}
//           <div className="form-group">
//             <label htmlFor="load">Load (kg)</label>
//             <input
//               type="number"
//               name="load"
//               value={formData.load}
//               onChange={handleInputChange}
//               required
//               placeholder="Load in kg"
//             />
//           </div>

//           {/* Input: Reps */}
//           <div className="form-group">
//             <label htmlFor="reps">Reps</label>
//             <input
//               type="number"
//               name="reps"
//               value={formData.reps}
//               onChange={handleInputChange}
//               required
//               placeholder="Number of reps"
//             />
//           </div>

//           {/* Input: Notes */}
//           <div className="form-group">
//             <label htmlFor="notes">Notes</label>
//             <textarea
//               name="notes"
//               value={formData.notes}
//               onChange={handleInputChange}
//               placeholder="Optional notes"
//               rows="3"
//             />
//           </div>

//           {/* Submit + Cancel Buttons */}
//           <div className="form-actions">
//             <button type="submit" className="btn btn-primary">
//               {editingId ? 'Update' : 'Save'} {/* label changes based on mode */}
//             </button>

//             {/* Show cancel button only in edit mode */}
//             {editingId && (
//               <button type="button" className="btn btn-secondary" onClick={cancelEditing}>
//                 Cancel
//               </button>
//             )}
//           </div>
//         </form>
//       </div>

//       {/* Workout List */}
//       <div className="workouts-container">
//         <div className="workouts-header">
//           <h1>Your Workouts</h1>
//           <button className="btn btn-refresh" onClick={fetchWorkouts}>
//             Refresh Workouts
//           </button>
//         </div>

//         {/* Show workouts or fallback message */}
//         {workouts.length > 0 ? (
//           <div className="workouts-grid">
//             {workouts.map((workout) => (
//               <div key={workout._id} className="workout-card">
//                 <h2>{workout.title}</h2>
//                 <div className="workout-details">
//                   <p><strong>Reps:</strong> {workout.reps}</p>
//                   <p><strong>Load:</strong> {workout.load} kg</p>
//                   {workout.notes && <p><strong>Notes:</strong> {workout.notes}</p>}
//                 </div>

//                 {/* Edit and Delete buttons */}
//                 <div className="workout-actions">
//                   <button className="btn btn-edit" onClick={() => startEditing(workout)}>
//                     Edit
//                   </button>
//                   <button className="btn btn-delete" onClick={() => deleteWorkout(workout._id)}>
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         ) : (
//           <p className="no-workouts">No workouts found. Create your first workout!</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default App;












// Importing necessary hooks and dependencies
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import { Routes, Route } from 'react-router-dom'; // Just Routes here

// Components
import Navbar from './Components/Navbar';
import Home from './Pages/Home/Home'; // Adjust path as needed

function App() {
  const [workouts, setWorkouts] = useState([]);

  const [formData, setFormData] = useState({
    title: '',
    load: '',
    reps: '',
    notes: ''
  });

  const [editingId, setEditingId] = useState(null);
  const API_BASE_URL = 'http://localhost:4000/api/workouts';

  const createWorkout = async () => {
    try {
      await axios.post(API_BASE_URL, formData);
      fetchWorkouts();
      resetForm();
    } catch (error) {
      console.error('Error creating workout:', error.message);
    }
  };

  const fetchWorkouts = async () => {
    try {
      const response = await axios.get(API_BASE_URL);
      setWorkouts(response.data);
    } catch (error) {
      console.error('Error fetching workouts:', error.message);
    }
  };

  const updateWorkout = async () => {
    try {
      await axios.patch(`${API_BASE_URL}/${editingId}`, formData);
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
    setFormData({
      ...formData,
      [name]: value
    });
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
    setEditingId(null);
    resetForm();
  };

  return (
    <div className="app-container">
      <Navbar />

      {/* Workout Form */}
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h1 className="form-title">{editingId ? 'Update Workout' : 'Create Workout'}</h1>

          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              required
              placeholder="Workout Title"
            />
          </div>

          <div className="form-group">
            <label htmlFor="load">Load (kg)</label>
            <input
              type="number"
              name="load"
              value={formData.load}
              onChange={handleInputChange}
              required
              placeholder="Load in kg"
            />
          </div>

          <div className="form-group">
            <label htmlFor="reps">Reps</label>
            <input
              type="number"
              name="reps"
              value={formData.reps}
              onChange={handleInputChange}
              required
              placeholder="Number of reps"
            />
          </div>

          <div className="form-group">
            <label htmlFor="notes">Notes</label>
            <textarea
              name="notes"
              value={formData.notes}
              onChange={handleInputChange}
              placeholder="Optional notes"
              rows="3"
            />
          </div>

          <div className="form-actions">
            <button type="submit" className="btn btn-primary">
              {editingId ? 'Update' : 'Save'}
            </button>
            {editingId && (
              <button type="button" className="btn btn-secondary" onClick={cancelEditing}>
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>

      {/* Workout Cards */}
      <div className="workouts-container">
        <div className="workouts-header">
          <h1>Your Workouts</h1>
          <button className="btn btn-refresh" onClick={fetchWorkouts}>
            Refresh Workouts
          </button>
        </div>

        {workouts.length > 0 ? (
          <div className="workouts-grid">
            {workouts.map((workout) => (
              <div key={workout._id} className="workout-card">
                <h2>{workout.title}</h2>
                <div className="workout-details">
                  <p><strong>Reps:</strong> {workout.reps}</p>
                  <p><strong>Load:</strong> {workout.load} kg</p>
                  {workout.notes && <p><strong>Notes:</strong> {workout.notes}</p>}
                </div>

                <div className="workout-actions">
                  <button className="btn btn-edit" onClick={() => startEditing(workout)}>
                    Edit
                  </button>
                  <button className="btn btn-delete" onClick={() => deleteWorkout(workout._id)}>
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="no-workouts">No workouts found. Create your first workout!</p>
        )}
      </div>

      {/* Routes for additional pages */}
      <Routes>
        {/* <Navbar /> */}
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
