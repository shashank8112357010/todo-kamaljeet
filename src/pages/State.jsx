import React, { useState } from 'react'

const State = () => {
    const [data, setData] = useState("Shashank");

    function handleChange(event) {
        console.log(event);
        setData(event.target.value)
    }
    return (
        <>
            <input className='form-control w-25' onChange={(event) => handleChange(event)} placeholder='Enter Name' />
            <div className={`text-white bg-success ${data}` } style={{height : "200px"}}>
              Hey My name is shashank 
            </div>

        </>
    )
}

export default State