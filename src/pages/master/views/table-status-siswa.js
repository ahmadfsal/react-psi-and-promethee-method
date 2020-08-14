import React, { memo } from 'react'
import { Box, Table } from 'libs'

const TableStatusSiswa = ({ dataStatusSiswa }) => {
    return (
        <Box title='Status Siswa'>
            {dataStatusSiswa.length >= 1 ? (
                <Table>
                    <thead>
                        <tr>
                            <th>Sub Kriteria</th>
                            <th>Bobot</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataStatusSiswa?.map((item, index) => {
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
                <p>Tidak ada data Status Siswa.</p>
            )}
        </Box>
    )
}

export default memo(TableStatusSiswa)
