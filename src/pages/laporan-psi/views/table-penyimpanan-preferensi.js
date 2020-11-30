import React, { memo } from 'react'
import { Box, Table } from 'libs'
import {
    cekBobotPekerjaan,
    cekBobotPenghasilan,
    cekBobotJenisBantuan,
    cekBobotStatusSiswa
} from 'shared/utils'

const TablePenyimpananPreferensi = ({ dataAlternatif }) => {
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

    const totalBobotJenisBantuan = () => {
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

        const jenisBantuan = dataAlternatif.map(item => {
            return Math.pow(
                cekBobotJenisBantuan(item.jenis_bantuan) - totalBobotJenisBantuan(),
                2
            )
        })
        const jumlahJenisBantuan = jenisBantuan.reduce((acc, curr) => acc + curr, 0)

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
            jumlahJenisBantuan,
            jumlahStatusSiswa
        }
    }

    const total = () => {
        const {
            jumlahPekerjaan,
            jumlahPenghasilan,
            jumlahJenisBantuan,
            jumlahStatusSiswa
        } = totalVariasiPreferensi()

        const kriteria = {
            jumlahPekerjaan,
            jumlahPenghasilan,
            jumlahJenisBantuan,
            jumlahStatusSiswa
        }

        const nilaiKriteria = Object.values(kriteria)
        const result = nilaiKriteria.reduce((acc, curr) => acc + curr, 0)

        return result
    }

    return (
        <Box>
            <Table>
                <thead>
                    <tr>
                        <td rowSpan="3">Nilai Preferensi</td>
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
                    <tr>
                        <td></td>
                        <td>{totalVariasiPreferensi().jumlahPekerjaan.toFixed(2) - 1}</td>
                        <td>{totalVariasiPreferensi().jumlahPenghasilan.toFixed(2) - 1}</td>
                        <td>{totalVariasiPreferensi().jumlahStatusSiswa.toFixed(2) - 1}</td>
                        <td>{totalVariasiPreferensi().jumlahJenisBantuan.toFixed(2) - 1}</td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr>
                        <td>Total</td>
                        <td colSpan='4' style={{ textAlign: 'center' }} >{total().toFixed(2)}</td>
                    </tr>
                </tfoot>
            </Table>
        </Box>
    )
}

export default memo(TablePenyimpananPreferensi)
