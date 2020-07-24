import React, { memo } from 'react'
import classnames from 'classnames'

const Level = ({ children, className }) => {
    const classes = classnames('level', className)
    return (
        <div className={classes}>
            {children}
        </div>
    )
}

export default memo(Level)