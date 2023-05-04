import React from 'react'
import { NavLink } from 'react-router-dom'

const ActiveLink = ({to,children}) => {
    return (
        <NavLink
            to={to}
            className={({ isActive, isPending }) =>
                isActive ? "underline": ""
            }
        >
           {children}
        </NavLink>
    )
}

export default ActiveLink