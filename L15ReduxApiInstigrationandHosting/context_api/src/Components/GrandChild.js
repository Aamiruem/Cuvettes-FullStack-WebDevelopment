// import React from 'react';
// import { useContext } from "react";

// import { Data } from "../App";

// const GrandChild = () => {
    
//     const EmpData = useContext(Data);
//     return (
//         <>
//         <GrandChild/>
//             {
//                 EmpData.map((item, index) => {
//                     return (
//                         <div key={index}>
//                             <h1>{item.name}</h1>
//                             <h2>{item.age}</h2>
//                         </div>
//                     )
//                 })
//         }
//         </>
//     )
// }
// export default GrandChild





import React, { useContext } from 'react';
import { DataContext } from '../App';

const GrandChild = () => {
    const EmpData = useContext(DataContext);
    
    if (!EmpData || EmpData.length === 0) {
        return <div className="no-data">No employee data available</div>;
    }
    
    return (
        <div className="table-container">
            <table className="employee-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    {EmpData.map((employee) => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.name}</td>
                            <td>{employee.age}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default GrandChild;
