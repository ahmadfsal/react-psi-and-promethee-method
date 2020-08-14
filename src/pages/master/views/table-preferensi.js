import React, { memo } from 'react'
import { Box, Table } from 'libs'

const TablePreferensi = ({ dataPreferensi }) => {
    return (
        <Box title='Preferensi'>
            {dataPreferensi.length >= 1 ? (
                <Table>
                    <thead>
                        <tr>
                            <th>Kategori</th>
                            <th>Nilai</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataPreferensi?.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.kategori}</td>
                                    <td>{item.nilai}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            ) : (
                <p>Tidak ada data Preferensi.</p>
            )}
        </Box>
    )
}

export default memo(TablePreferensi)
