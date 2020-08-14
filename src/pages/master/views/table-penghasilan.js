import React, { memo } from 'react'
import { Box, Table } from 'libs'

const TablePenghasilan = ({ dataPenghasilan }) => {
    return (
        <Box title='Penghasilan Orang Tua'>
            {dataPenghasilan.length >= 1 ? (
                <Table>
                    <thead>
                        <tr>
                            <th>Sub Kriteria</th>
                            <th>Bobot</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataPenghasilan?.map((item, index) => {
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
                <p>Tidak ada data Penghasilan.</p>
            )}
        </Box>
    )
}

export default memo(TablePenghasilan)
