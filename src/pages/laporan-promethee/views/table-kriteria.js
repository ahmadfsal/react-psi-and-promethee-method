import React, { memo } from 'react'
import { Box, Table } from 'libs'
import {
    cekBobotPekerjaan,
    cekBobotPenghasilan,
    cekBobotStatusRumah,
    cekBobotStatusSiswa
} from 'shared/utils'

const TableKriteria = ({ data }) => {
    return (
        <Box>
            <div className='table-container'>
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
                                    <td>{cekBobotPekerjaan(item.pekerjaan)}</td>
                                    <td>
                                        {cekBobotPenghasilan(item.penghasilan)}
                                    </td>
                                    <td>
                                        {cekBobotStatusRumah(item.status_rumah)}
                                    </td>
                                    <td>
                                        {cekBobotStatusSiswa(item.status_siswa)}
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            </div>
        </Box>
    )
}

export default memo(TableKriteria)
