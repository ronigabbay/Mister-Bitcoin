
import { NavLink, withRouter } from 'react-router-dom'
import React, { Component } from 'react'

export default class _AppHeader extends Component {
    render() {
        return (
            <nav className="app-header"> 
                <NavLink to="/contact" >Contacts</NavLink>
                <NavLink to="/statistic" >Statictic</NavLink>
                <NavLink to="/signup" >Signup</NavLink>
                <NavLink exact to="/" >Home</NavLink>
            </nav>
        )
    }
}
export const AppHeader = withRouter(_AppHeader)