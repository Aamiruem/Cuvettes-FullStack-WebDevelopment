import React from 'react';
import { useContext } from "react";

import { Data } from "../App";

const GrandChild = () => {
    
    const EmpData = useContext(Data);
    return (
        <>
        <GrandChild/>
            {
                EmpData.map((item, index) => {
                    return (
                        <div key={index}>
                            <h1>{item.name}</h1>
                            <h2>{item.age}</h2>
                        </div>
                    )
                })
        }
        </>
    )
}
export default GrandChild
