import React, { memo } from 'react'
import { Box, Table } from 'libs'

const TableStatusRumah = () => {
    return (
        <Box title='Status Rumah'>
            <Table>
                <thead>
                    <tr>
                        <th>Status</th>
                        <th>Bobot</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </Table>
        </Box>
    )
}

export default memo(TableStatusRumah)
