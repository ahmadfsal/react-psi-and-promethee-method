import React, { memo } from 'react'
import classnames from 'classnames'

const Button = ({ children, className, onClick }) => {
    const classes = classnames('button', className)
    return (
        <button onClick={onClick} className={classes}>
            {children}
        </button>
    )
}

export default memo(Button)