// import React, { useState, useContext } from 'react';
// import axios from 'axios';
// import './Form.css';
// import { Data } from '../../Context/WorkoutContext';

// const Form = () => {
//   // Use context to access workouts and setter
//   const [workouts, setWorkouts] = useContext(Data);
//   // const {form, setForm} = useContext(Data);

//   // Form state
//   const [form, setForm] = useState({
//     title: '',
//     reps: '',
//     load: '',
//     notes: ''
//   });

//   // Handle input changes
//   const updateFormField = (e) => {
//     const { name, value } = e.target;
//     setForm({
//       ...form,
//       [name]: value
//     });
//   };

//   // Handle form submission
//   const createWorkout = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:4000/api/workouts', form);
//       setWorkouts([...workouts, response.data]); // Update workouts list
//       setForm({
//         title: '',
//         reps: '',
//         load: '',
//         notes: ''
//       }); // Reset form
//     } catch (error) {
//       console.error('Error creating workout:', error.message);
//     }
//   };

//   // Render form UI
//   return (
//     <div className="form-container">
//       <h2>Add New Workout</h2>
//       <form onSubmit={createWorkout}>
//         <input
//           type="text"
//           name="title"
//           placeholder="Workout Title"
//           value={form.title}
//           onChange={updateFormField}
//           required
//         />

//         <input
//           type="number"
//           name="reps"
//           placeholder="Reps"
//           value={form.reps}
//           onChange={updateFormField}
//           required
//         />

//         <input
//           type="number"
//           name="load"
//           placeholder="Load (kg)"
//           value={form.load}
//           onChange={updateFormField}
//           required
//         />

//         <textarea
//           name="notes"
//           placeholder="Notes (optional)"
//           value={form.notes}
//           onChange={updateFormField}
//         />

//         <button type="submit">Add Workout</button>
//       </form>
//     </div>
//   );
// };

// export default Form;









// import React, { useContext, useState } from 'react';
// import axios from 'axios';
// import './Form.css';
// import { Data } from '../../Context/WorkoutContext';

// const Form = () => {
//   const {
//     workouts,
//     setWorkouts,
//     form,
//     setForm,
//     updateForm,
//     handleUpdateFieldChange,
//     updateWorkout,
//   } = useContext(Data);

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(false);

//   // Handle create workout form input
//   const updateFormField = (e) => {
//     const { name, value } = e.target;
//     setForm({
//       ...form,
//       [name]: value
//     });
//   };

//   // Submit handler for creating a workout
//   const createWorkout = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);
//     setSuccess(false);

//     try {
//       const response = await axios.post('http://localhost:4000/api/workouts', form);
//       setWorkouts([...workouts, response.data]);
//       setForm({ title: '', reps: '', load: '', notes: '' });
//       setSuccess(true);
//     } catch (err) {
//       console.error('Error creating workout:', err.message);
//       setError('Failed to create workout. Please try again.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Submit handler for updating a workout
//   const handleUpdate = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);
//     setSuccess(false);

//     try {
//       await updateWorkout(updateForm._id);
//       setSuccess(true);
//     } catch (err) {
//       console.error('Error updating workout:', err.message);
//       setError('Failed to update workout.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="form-container">
//       <h2>Add New Workout</h2>

//       {error && <p className="error">{error}</p>}
//       {success && <p className="success">Success!</p>}

//       <form onSubmit={createWorkout}>
//         <input
//           type="text"
//           name="title"
//           placeholder="Workout Title"
//           value={form.title}
//           onChange={updateFormField}
//           required
//         />
//         <input
//           type="number"
//           name="reps"
//           placeholder="Reps"
//           value={form.reps}
//           onChange={updateFormField}
//           required
//         />
//         <input
//           type="number"
//           name="load"
//           placeholder="Load (kg)"
//           value={form.load}
//           onChange={updateFormField}
//           required
//         />
//         <textarea
//           name="notes"
//           placeholder="Notes (optional)"
//           value={form.notes}
//           onChange={updateFormField}
//         />
//         <button type="submit" disabled={loading}>
//           {loading ? 'Adding...' : 'Add Workout'}
//         </button>
//       </form>

//       {/* Update Form (only show if editing) */}
//       {updateForm._id && (
//         <>
//           <h2>Update Workout</h2>
//           <form onSubmit={handleUpdate}>
//             <input
//               type="text"
//               name="title"
//               value={updateForm.title}
//               onChange={handleUpdateFieldChange}
//               required
//             />
//             <input
//               type="number"
//               name="reps"
//               value={updateForm.reps}
//               onChange={handleUpdateFieldChange}
//               required
//             />
//             <input
//               type="number"
//               name="load"
//               value={updateForm.load}
//               onChange={handleUpdateFieldChange}
//               required
//             />
//             <textarea
//               name="notes"
//               value={updateForm.notes}
//               onChange={handleUpdateFieldChange}
//             />
//             <button type="submit" disabled={loading}>
//               {loading ? 'Updating...' : 'Update Workout'}
//             </button>
//           </form>
//         </>
//       )}
//     </div>
//   );
// };

// export default Form;














import React, { useContext, useState } from 'react';
import axios from 'axios';
import './Form.css';
import { Data } from '../../Context/WorkoutContext';

const Form = () => {
  const {
    workouts,
    setWorkouts,
    form,
    setForm,
    updateForm,
    handleUpdateFieldChange,
    updateWorkout,
  } = useContext(Data);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const updateFormField = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const createWorkout = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await axios.post('http://localhost:4000/api/workouts', form);
      setWorkouts([...workouts, response.data]);
      setForm({ title: '', reps: '', load: '', notes: '' });
      setSuccess(true);
    } catch (err) {
      console.error('Error creating workout:', err.message);
      setError('Failed to create workout. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await updateWorkout(updateForm._id);
      setSuccess(true);
    } catch (err) {
      console.error('Error updating workout:', err.message);
      setError('Failed to update workout.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-sidebar">
      <div className="form-section">
        <h2>Add New Workout</h2>

        {error && <p className="error">{error}</p>}
        {success && <p className="success">Success!</p>}

        <form onSubmit={createWorkout}>
          <input
            type="text"
            name="title"
            placeholder="Workout Title"
            value={form.title}
            onChange={updateFormField}
            required
          />
          <input
            type="number"
            name="reps"
            placeholder="Reps"
            value={form.reps}
            onChange={updateFormField}
            required
          />
          <input
            type="number"
            name="load"
            placeholder="Load (kg)"
            value={form.load}
            onChange={updateFormField}
            required
          />
          <textarea
            name="notes"
            placeholder="Notes (optional)"
            value={form.notes}
            onChange={updateFormField}
          />
          <button type="submit" disabled={loading}>
            {loading ? 'Adding...' : 'Add Workout'}
          </button>
        </form>
      </div>

      {/* Update Form (only show if editing) */}
      {updateForm._id && (
        <div className="form-section">
          <h2>Update Workout</h2>
          <form onSubmit={handleUpdate}>
            <input
              type="text"
              name="title"
              value={updateForm.title}
              onChange={handleUpdateFieldChange}
              required
            />
            <input
              type="number"
              name="reps"
              value={updateForm.reps}
              onChange={handleUpdateFieldChange}
              required
            />
            <input
              type="number"
              name="load"
              value={updateForm.load}
              onChange={handleUpdateFieldChange}
              required
            />
            <textarea
              name="notes"
              value={updateForm.notes}
              onChange={handleUpdateFieldChange}
            />
            <button type="submit" disabled={loading}>
              {loading ? 'Updating...' : 'Update Workout'}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Form;
