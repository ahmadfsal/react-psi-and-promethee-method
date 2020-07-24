import React, { memo } from 'react'
import { Table } from 'libs'

const TablePromethee = () => {
    return (
        <div className='table-container'>
            <Table></Table>
        </div>
    )
}

export default memo(TablePromethee)