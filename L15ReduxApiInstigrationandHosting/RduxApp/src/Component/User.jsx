import React from 'react'
import { useSelector } from 'react-redux';


const User = () => {
    const count = useSelector(state => {
        return state.counter.count
    })
    return (
        <div>
            <h1>{count} </h1>
        </div>
    )
}

export default User
