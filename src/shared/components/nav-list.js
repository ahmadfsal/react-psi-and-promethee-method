import React, { memo } from 'react'
import NavLink from './nav-link'

const NavList = ({ label, list = [] }) => {
    return (
        <li>
            <a>{label}</a>
            {list.map((item, index) => {
                return (
                    <ul key={index}>
                        <li>
                            <NavLink label={item.title} path={item.path} />
                        </li>
                    </ul>
                )
            })}
        </li>
    )
}

export default memo(NavList)
