import React, { useState, createContext } from 'react'

export const TasksContext = createContext()


const TasksContextProvider = (props) => {
    const [tasks, setTasks] = useState([
        { name: 'myTask1', id: 1 },
        { name: 'myTask2', id: 2 },
    ])
    return (
        <TasksContext.Provider value={{ tasks }}>
            {props.children}
        </TasksContext.Provider>
    )
}

export default TasksContextProvider
