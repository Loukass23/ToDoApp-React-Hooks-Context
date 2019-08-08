import React, { Component } from 'react'
import { ThemeContext } from '../context/ThemeContext';

export default class ToDo extends Component {
    static contextType = ThemeContext

    render() {
        const { isLightTheme, light, dark } = this.context
        const theme = isLightTheme ? light : dark

        return (
            <div className='TD-list' style={{ color: theme.syntax, background: theme.bg }}>
                <ul style={{ background: theme.ui }}>
                    <li style={{ background: theme.ui }}>Do this</li>
                    <li style={{ background: theme.ui }}>Do that</li>
                    <li style={{ background: theme.ui }}>Do some else</li>
                </ul>
            </div>
        )
    }
}
