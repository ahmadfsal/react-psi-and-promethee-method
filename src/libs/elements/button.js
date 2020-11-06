import React, { memo } from 'react'
import classnames from 'classnames'

const Button = ({ children, className, onClick, disabled }) => {
    const classes = classnames('button', className)
    return (
        <button onClick={onClick} className={classes} disabled={disabled}>
            {children}
        </button>
    )
}

export default memo(Button)