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

export const Data = createContext();

const WorkoutContext = ({ children }) => {
    const [workouts, setWorkouts] = useState([]);

    return (
        <Data.Provider value={[workouts, setWorkouts]}>
            {children}
        </Data.Provider>
    );
};

export default WorkoutContext;
