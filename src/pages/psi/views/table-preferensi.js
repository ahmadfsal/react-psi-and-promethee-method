import React, { memo } from 'react'
import { Box, Table } from 'libs'

const TablePreferensi = () => {
    return (
        <Box title='Preferensi'>
            <Table>
                <thead>
                    <tr>
                        <th>Kategori</th>
                        <th>Nilai</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </Table>
        </Box>
    )
}

export default memo(TablePreferensi)
