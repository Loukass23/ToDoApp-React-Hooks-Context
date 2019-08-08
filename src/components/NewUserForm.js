import React, { useState } from 'react'

const NewUserForm = ({ addUser }) => {
    const [name, setName] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        addUser(name)
        setName('');
    }


    return (
        <form onSubmit={handleSubmit} >
            <label htmlFor="" >User Name</label>
            <input type="text" value={name} required onChange={(e) => setName(e.target.value)} />
            <input type='submit' value='add user' />
        </form>
    )
}

export default NewUserForm
