import React, { memo } from 'react'
import { Box, Table } from 'libs'

const TableStatusRumah = ({ dataStatusRumah }) => {
    return (
        <Box title='Status Rumah'>
            {dataStatusRumah.length >= 1 ? (
                <Table>
                    <thead>
                        <tr>
                            <th>Sub Kriteria</th>
                            <th>Bobot</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataStatusRumah?.map((item, index) => {
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
                <p>Tidak ada data Status Rumah.</p>
            )}
        </Box>
    )
}

export default memo(TableStatusRumah)
