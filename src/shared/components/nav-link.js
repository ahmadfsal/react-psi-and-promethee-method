import React, { memo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import classnames from 'classnames'

const NavLink = ({ label, path }) => {
    const pathname = useLocation().pathname
    const isMatch = pathname === path
    const linkClasses = classnames(isMatch ? 'is-active' : '')

    return (
        <Link to={path} className={linkClasses}>
            {label}
        </Link>
    )
}

export default memo(NavLink)
