import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';
import { TasksContext } from '../context/TasksContext';


const ToDo = () => {
    const { tasks } = useContext(TasksContext)
    const { isLightTheme, light, dark } = useContext(ThemeContext)
    const theme = isLightTheme ? light : dark
    return (
        <div className='TD-list' style={{ color: theme.syntax, background: theme.bg }}>
            <ul style={{ background: theme.ui }}>
                {tasks.map(task =>
                    <li key={task.id} style={{ background: theme.ui }}>{task.name}</li>
                )}

            </ul>
        </div>
    )
}

export default ToDo

//without useContext
// export default class ToDo extends Component {
//     static contextType = ThemeContext

//     render() {
//         const { isLightTheme, light, dark } = this.context
//         const theme = isLightTheme ? light : dark

//         return (
//             <div className='TD-list' style={{ color: theme.syntax, background: theme.bg }}>
//                 <ul style={{ background: theme.ui }}>
//                     <li style={{ background: theme.ui }}>Do this</li>
//                     <li style={{ background: theme.ui }}>Do that</li>
//                     <li style={{ background: theme.ui }}>Do some else</li>
//                 </ul>
//             </div>
//         )
//     }
// }
