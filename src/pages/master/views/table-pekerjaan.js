import React, { memo } from 'react'
import { Box, Table } from 'libs'

const TablePekerjaan = ({ dataPekerjaan }) => {
    return (
        <Box title='Pekerjaan Orang Tua'>
            {dataPekerjaan.length >= 1 ? (
                <Table>
                    <thead>
                        <tr>
                            <th>Sub Kriteria</th>
                            <th>Bobot</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataPekerjaan?.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.sub_kriteria}</td>
                                    <td>{item.bobot}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            ) : (
                <p>Tidak ada data Pekerjaan.</p>
            )}
        </Box>
    )
}

export default memo(TablePekerjaan)
