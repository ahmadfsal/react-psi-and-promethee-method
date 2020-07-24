import React, { memo } from 'react'
import { Box, Table } from 'libs'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

const TableCalonPenerima = () => {
    return (
        <Box title='Data Calon Penerima Dana BOS' icon={faPlusCircle}>
            <Table>
                <thead>
                    <tr>
                        <th>Nama</th>
                        <th>Penghasilan</th>
                        <th>Jumlah Tanggungan</th>
                        <th>Pekerjaan</th>
                        <th>Status Rumah</th>
                    </tr>
                </thead>
                <tbody></tbody>
            </Table>
        </Box>
    )
}

export default memo(TableCalonPenerima)
