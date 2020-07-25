import React, { memo } from 'react'
import classnames from 'classnames'

const Input = ({ className, label, name, onChange, value, ...rest }) => {
    const inputClass = classnames('input', className)

    return (
        <div className='field'>
            {label && <label className='label'>{label}</label>}
            <div className='control'>
                <input
                    className={inputClass}
                    name={name}
                    value={value}
                    onChange={onChange}
                    {...rest}
                />
            </div>
        </div>
    )
}

export default memo(Input)
