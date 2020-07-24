import React, { memo } from 'react'
import classnames from 'classnames'
import { Link, useLocation } from 'react-router-dom'

const Navbar = ({ objectList = [] }) => {
    const location = useLocation()

    return (
        <aside className='navbar column is-2'>
            <p class='menu-label'>Menu</p>
            <ul className='menu-list'>
                {objectList.map((item, index) => {
                    const isMatch = location.pathname === item.path
                    const linkClasses = classnames(isMatch ? 'is-active' : '')

                    return (
                        <Link
                            key={index}
                            to={item.path}
                            className={linkClasses}
                        >
                            {item.title}
                        </Link>
                    )
                })}
            </ul>
        </aside>
    )
}

export default memo(Navbar)
