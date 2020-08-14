import React, { memo } from 'react'
import { Box, Table } from 'libs'

const TableAlternatif = ({ data }) => {
    return (
        <Box>
            <div className="table-container">
                <Table>
                    <thead>
                        <tr>
                            <td rowSpan={2}>Alternatif</td>
                            <td colSpan={4} className="has-text-centered">Kriteria</td>
                        </tr>
                        <tr>
                            <td>Pekerjaan Orang Tua</td>
                            <td>Penghasilan Orang Tua</td>
                            <td>Status Siswa</td>
                            <td>Status Rumah</td>
                        </tr>
                    </thead>
                    <tbody>
                        {data?.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.alternatif}</td>
                                    <td>{item.pekerjaan}</td>
                                    <td>{item.penghasilan}</td>
                                    <td>{item.status_siswa}</td>
                                    <td>{item.status_rumah}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
        </Box>
    )
}

export default memo(TableAlternatif)