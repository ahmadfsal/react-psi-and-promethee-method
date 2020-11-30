import React, { memo } from 'react'
import { Box, Table } from 'libs'
import {
    cekBobotPekerjaan,
    cekBobotPenghasilan,
    cekBobotJenisBantuan,
    cekBobotStatusSiswa
} from 'shared/utils'

const TableKriteria = ({ data }) => {
    return (
        <Box>
            <div className='table-container'>
                <Table>
                    <thead>
                        <tr>
                            <td rowSpan={2}>Nama</td>
                            <td colSpan={4} className="has-text-centered">Kriteria</td>
                        </tr>
                        <tr>
                            <td>Pekerjaan Orang Tua</td>
                            <td>Penghasilan Orang Tua</td>
                            <td>Status Siswa</td>
                            <td>Jenis Bantuan</td>
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
                                        {cekBobotStatusSiswa(item.status_siswa)}
                                    </td>
                                    <td>
                                        {cekBobotJenisBantuan(item.jenis_bantuan)}
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
