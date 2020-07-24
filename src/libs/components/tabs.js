import React, { memo } from 'react'
import classnames from 'classnames'
import { Link, useLocation } from 'react-router-dom'

const Tabs = ({ className, objectList=[] }) => {
    const classes = classnames('tabs', className)
    const location = useLocation()
    const pathname = location.pathname.replace('/', '')

    return (
        <div className={classes}>
            <ul>
                {objectList.map((item, index) => {
                    const isMatch = pathname === item.path
                    const listClasses = classnames(isMatch && 'is-active')

                    return (
                        <li key={index} className={listClasses}>
                            <Link to={item.path}>
                                {item.title}
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default memo(Tabs)
