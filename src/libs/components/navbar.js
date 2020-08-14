import React, { memo } from 'react'

const Navbar = ({ children }) => {
    return (
        <aside className='navbar column is-2'>
            <p className='menu-label'>Menu</p>
            <ul className='menu-list'>{children}</ul>
        </aside>
    )
}

export default memo(Navbar)
