import React, { Component } from 'react'
import { ThemeContext } from '../context/ThemeContext';
import { AuthContext } from '../context/AuthContext';

export class Navbar extends Component {
    // static contextType = ThemeContext
    render() {
        // console.log('this.context', this.context)
        // const { isLightTheme, light, dark } = this.context
        // const theme = isLightTheme ? light : dark
        return (
            <AuthContext.Consumer>{(authContext) => (
                <ThemeContext.Consumer>{(themeContext) => {
                    // const { isLightTheme, light, dark } = this.context

                    const { isAuthenticated, toggleAuth } = authContext
                    const { isLightTheme, light, dark } = themeContext
                    const theme = isLightTheme ? light : dark
                    return (
                        <nav style={{ background: theme.ui, color: theme.syntax }}>
                            <div onClick={toggleAuth}>
                                {isAuthenticated ? 'Logged in' : 'Logged out'}
                            </div>
                            <ul>
                                <li>Home</li>
                                <li>About</li>
                            </ul>
                        </nav>
                    )
                }}

                </ThemeContext.Consumer>
            )
            }</AuthContext.Consumer>


        )
    }
}

export default Navbar
