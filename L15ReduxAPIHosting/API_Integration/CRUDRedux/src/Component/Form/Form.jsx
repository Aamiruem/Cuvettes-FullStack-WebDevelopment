import React, { useContext } from 'react'; // Corrected import
import { UserContext } from '../../Context/UserContextProvider'; // Corrected path

const Form = () => {
    const { user, handleChange, handleSubmit } = useContext(UserContext); // 'user' not 'User'

    return (
        <div className='form'>
            <h1>Create Record</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder='Name'
                    name='name'
                    value={user.name}
                    onChange={handleChange}
                />
                <br /><br />

                <input
                    type="text"
                    placeholder='Email'
                    name='email'
                    value={user.email}
                    onChange={handleChange}
                />
                <br /><br />

                <input
                    type="text"
                    placeholder='Password'
                    name='password'
                    value={user.password}
                    onChange={handleChange}
                />
                <br /><br />

                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Form;
