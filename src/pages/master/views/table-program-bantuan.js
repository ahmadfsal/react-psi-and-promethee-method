import React, { memo } from 'react'
import { Box, Table } from 'libs'

const TableProgramBantuan = ({ dataProgramBantuan }) => {
    return (
        <Box title='Jenis Program Bantuan'>
            {dataProgramBantuan.length >= 1 ? (
                <Table>
                    <thead>
                        <tr>
                            <th>Sub Kriteria</th>
                            <th>Bobot</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataProgramBantuan?.map((item, index) => {
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
                <p>Tidak ada data Jurusan.</p>
            )}
        </Box>
    )
}

export default memo(TableProgramBantuan)
