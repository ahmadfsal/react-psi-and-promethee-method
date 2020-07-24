import React, { memo } from 'react'

const Container = ({ children }) => {
    return (
        <div className='container'>
            {children}
        </div>
    )
}

export default memo(Container)