import React, { memo } from 'react'
import classnames from 'classnames'
import { Button } from 'libs'

const Box = ({
    children,
    className,
    title,
    buttonTitle,
    onClick,
    buttonClass
}) => {
    const classes = classnames('box', className)
    const btnClasses = classnames('is-light', buttonClass)

    return (
        <div className={classes}>
            {title && (
                <div className='level'>
                    <div className='level-left has-text-weight-medium has-text-black'>
                        {title}
                    </div>
                    {buttonTitle && (
                        <Button onClick={onClick} className={btnClasses}>
                            {buttonTitle}
                        </Button>
                    )}
                </div>
            )}
            {children}
        </div>
    )
}

export default memo(Box)
