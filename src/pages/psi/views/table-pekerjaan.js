import React, { memo } from 'react'
import { Box, Table } from 'libs'

const TablePekerjaan = () => {
    return (
        <Box title='Pekerjaan Orang Tua'>
            <Table>
                <thead>
                    <tr>
                        <th>Pekerjaan</th>
                        <th>Bobot</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </Table>
        </Box>
    )
}

export default memo(TablePekerjaan)
