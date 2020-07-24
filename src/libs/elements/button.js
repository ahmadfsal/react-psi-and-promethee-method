import React, { memo } from 'react'
import classnames from 'classnames'

const Button = ({ children, className }) => {
    const classes = classnames('button', className)
    return (
        <div className={classes}>
            {children}
        </div>
    )
}

export default memo(Button)