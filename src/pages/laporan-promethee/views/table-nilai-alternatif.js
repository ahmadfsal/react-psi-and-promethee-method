import React, { memo, Fragment } from 'react'
import { Box, Table } from 'libs'
import {
    cekBobotPekerjaan,
    cekBobotPenghasilan,
    cekBobotStatusRumah,
    cekBobotStatusSiswa
} from 'shared/utils'

const TableNilaiAlternatif = ({ data }) => {
    return (
        <Box>
            {data?.map((i, index) => (
                <Fragment key={index}>
                    <Table>
                        <thead>
                            <tr>
                                <td rowSpan={data.length}>{i.alternatif}</td>
                                <td rowSpan={2}>Alternatif</td>
                                <td colSpan={6} className='has-text-centered'>
                                    Kriteria
                                </td>
                            </tr>
                            <tr>
                                <td>Pekerjaan Orang Tua</td>
                                <td>Penghasilan Orang Tua</td>
                                <td>Status Siswa</td>
                                <td>Status Rumah</td>
                                <td>Total Nilai Preferensi</td>
                                <td>Indeks Preferensi Multikriteria</td>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, ind) => {
                                const bobotPekerjaan = cekBobotPekerjaan(i.pekerjaan) - cekBobotPekerjaan(item.pekerjaan)
                                const hasilPekerjaan = bobotPekerjaan <= 0 ? 0 : 1

                                const bobotPenghasilan = cekBobotPenghasilan(i.penghasilan) - cekBobotPenghasilan(item.penghasilan)
                                const hasilPenghasilan = bobotPenghasilan <= 0 ? 0 : 1

                                const bobotStatusSiswa = cekBobotStatusSiswa(i.status_siswa) - cekBobotStatusSiswa(item.status_siswa)
                                const hasilStatusSiswa = bobotStatusSiswa <= 0 ? 0 : 1

                                const bobotStatusRumah = cekBobotStatusRumah(i.status_rumah) - cekBobotStatusRumah(item.status_rumah)
                                const hasilStatusRumah = bobotStatusRumah <= 0 ? 0 : 1

                                const total = hasilPekerjaan + hasilPenghasilan + hasilStatusSiswa + hasilStatusRumah

                                const indeksPreferensiMultikriteria = 1/4 * total

                                return (
                                    <tr key={ind}>
                                        <td></td>
                                        <td>{item.alternatif}</td>
                                        <td>{hasilPekerjaan}</td>
                                        <td>{hasilPenghasilan}</td>
                                        <td>{hasilStatusSiswa}</td>
                                        <td>{hasilStatusRumah}</td>
                                        <td>{total}</td>
                                        <td>{indeksPreferensiMultikriteria}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                </Fragment>
            ))}
        </Box>
    )
}

export default memo(TableNilaiAlternatif)
