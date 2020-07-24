import React, { memo } from 'react'
import { Box, Table } from 'libs'

const TableKriteria = () => {
    return (
        <Box title='Kriteria'>
            <Table>
                <thead>
                    <tr>
                        <th>Kriteria</th>
                        <th>Keterangan</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </Table>
        </Box>
    )
}

export default memo(TableKriteria)
