import React, { useState, useEffect } from 'react'
import uuid from 'uuid/v1'
import NewUserForm from './NewUserForm';

const UserList = () => {
    const [users, setUsers] = useState([
        { name: 'Lucas', id: 1 },
        { name: 'Ottavia', id: 2 },
    ])
    const [age, setAge] = useState(23)
    const addUser = (name) => {
        setUsers([...users, { name, id: uuid() }])
    }

    useEffect(() => {
        console.log('users :', users);
    }, [users])
    useEffect(() => {
        console.log('age :', age);
    }, [age])
    return (
        <div>
            <ul>
                {users.map(user => {
                    return (
                        <li key={user.id}>{user.name}</li>
                    )
                })}
            </ul>
            <NewUserForm addUser={addUser} />
            <button onClick={() => setAge(age + 1)}>Add 1 to age {age}</button>
        </div>
    )
}

export default UserList
