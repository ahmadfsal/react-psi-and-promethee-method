import React, { memo } from 'react'
import { Box, Table } from 'libs'
import {
    cekBobotPekerjaan,
    cekBobotPenghasilan,
    cekBobotJenisBantuan,
    cekBobotStatusSiswa
} from 'shared/utils'

const TableVariasiPreferensi = ({ dataAlternatif }) => {
    const totalBobotPekerjaan = () => {
        const totalList = dataAlternatif.map(
            (item) => parseInt(cekBobotPekerjaan(item.pekerjaan)) / 4
        )
        const totalResult = totalList.reduce((acc, curr) => acc + curr, 0)

        return totalResult / dataAlternatif.length
    }

    const totalBobotPenghasilan = () => {
        const totalList = dataAlternatif.map(
            (item) => 1 / parseInt(cekBobotPenghasilan(item.penghasilan))
        )
        const totalResult = totalList.reduce((acc, curr) => acc + curr, 0)

        return totalResult / dataAlternatif.length
    }

    const totalBobotStatusRumah = () => {
        const totalList = dataAlternatif.map(
            (item) => parseInt(cekBobotJenisBantuan(item.jenis_bantuan)) / 4
        )
        const totalResult = totalList.reduce((acc, curr) => acc + curr, 0)

        return totalResult / dataAlternatif.length
    }

    const totalBobotStatusSiswa = () => {
        const totalList = dataAlternatif.map(
            (item) => parseInt(cekBobotStatusSiswa(item.status_siswa)) / 4
        )
        const totalResult = totalList.reduce((acc, curr) => acc + curr, 0)

        return totalResult / dataAlternatif.length
    }

    const totalVariasiPreferensi = () => {
        const pekerjaan = dataAlternatif.map(item => {
            return Math.pow(
                cekBobotPekerjaan(item.pekerjaan) - totalBobotPekerjaan(),
                2
            )
        })
        const jumlahPekerjaan = pekerjaan.reduce((acc, curr) => acc + curr, 0)

        const penghasilan = dataAlternatif.map(item => {
            return Math.pow(
                cekBobotPenghasilan(item.penghasilan) - totalBobotPenghasilan(),
                2
            )
        })
        const jumlahPenghasilan = penghasilan.reduce((acc, curr) => acc + curr, 0)

        const statusRumah = dataAlternatif.map(item => {
            return Math.pow(
                cekBobotJenisBantuan(item.jenis_bantuan) - totalBobotStatusRumah(),
                2
            )
        })
        const jumlahStatusRumah = statusRumah.reduce((acc, curr) => acc + curr, 0)

        const statusSiswa = dataAlternatif.map(item => {
            return Math.pow(
                cekBobotStatusSiswa(item.status_siswa) - totalBobotStatusSiswa(),
                2
            )
        })
        const jumlahStatusSiswa = statusSiswa.reduce((acc, curr) => acc + curr, 0)

        return {
            jumlahPekerjaan,
            jumlahPenghasilan,
            jumlahStatusRumah,
            jumlahStatusSiswa
        }
    }

    return (
        <Box>
            <Table>
                <thead>
                    <tr>
                        <td rowSpan="2">Nama</td>
                        <td colSpan="4" className="has-text-centered">Kriteria</td>
                    </tr>
                    <tr>
                        <td>Pekerjaan</td>
                        <td>Penghasilan</td>
                        <td>Status Siswa</td>
                        <td>Jenis Bantuan</td>
                    </tr>
                </thead>
                <tbody>
                    {dataAlternatif.map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.alternatif}</td>
                                <td>
                                    {Math.pow(
                                        cekBobotPekerjaan(item.pekerjaan) -
                                            totalBobotPekerjaan(),
                                        2
                                    )}
                                </td>
                                <td>
                                    {Math.pow(
                                        cekBobotPenghasilan(item.penghasilan) -
                                            totalBobotPenghasilan(),
                                        2
                                    )}
                                </td>
                                <td>
                                    {Math.pow(
                                        cekBobotStatusSiswa(item.status_siswa) -
                                            totalBobotStatusSiswa(),
                                        2
                                    )}
                                </td>
                                <td>
                                    {Math.pow(
                                        cekBobotJenisBantuan(item.jenis_bantuan) -
                                            totalBobotStatusRumah(),
                                        2
                                    )}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <td>Jumlah</td>
                        <td>{totalVariasiPreferensi().jumlahPekerjaan}</td>
                        <td>{totalVariasiPreferensi().jumlahPenghasilan}</td>
                        <td>{totalVariasiPreferensi().jumlahStatusRumah}</td>
                        <td>{totalVariasiPreferensi().jumlahStatusSiswa}</td>
                    </tr>
                </tfoot>
            </Table>
        </Box>
    )
}

export default memo(TableVariasiPreferensi)
