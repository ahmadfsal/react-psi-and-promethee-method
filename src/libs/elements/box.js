import React, { memo } from 'react'
import classnames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Box = ({ children, className, title, icon, onClickIcon }) => {
    const classes = classnames('box', className)

    return (
        <div className={classes}>
            {title && (
                <div className='level'>
                    <div className='level-left has-text-weight-medium has-text-black'>
                        {title}
                    </div>
                    <div className='level-right'>
                        <FontAwesomeIcon
                            icon={icon && icon}
                            onClick={onClickIcon}
                        />
                    </div>
                </div>
            )}
            {children}
        </div>
    )
}

export default memo(Box)
