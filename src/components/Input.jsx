import React, { useState } from 'react'

const Input = ({ task, setTask }) => {

    const [value, setValue] = useState("")
    function changeValue(e) {
        setValue(e.target.value);
        console.log(value);
    }
    function handleSubmit(e) {
        e.preventDefault()
        setTask([...task, value]);
        setValue("");
    }
    return (

        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input onChange={(e) => changeValue(e)} type="text" value={value} />
            </form>
        </div>
    )
}

export default Input