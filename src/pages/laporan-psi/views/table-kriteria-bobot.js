import React, { memo, Fragment } from 'react'
import { Box, Table } from 'libs'
import {
    cekBobotPekerjaan,
    cekBobotPenghasilan,
    cekBobotStatusRumah,
    cekBobotStatusSiswa
} from 'shared/utils'

const TableKriteriaBobot = ({ dataAlternatif }) => {
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
            (item) => parseInt(cekBobotStatusRumah(item.status_rumah)) / 4
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
                cekBobotStatusRumah(item.status_rumah) - totalBobotStatusRumah(),
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

    const total = () => {
        const {
            jumlahPekerjaan,
            jumlahPenghasilan,
            jumlahStatusRumah,
            jumlahStatusSiswa
        } = totalVariasiPreferensi()

        const kriteria = {
            jumlahPekerjaan,
            jumlahPenghasilan,
            jumlahStatusRumah,
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
                        <td rowSpan="2">Bobot</td>
                        <td colSpan="4" className="has-text-centered">Kriteria</td>
                    </tr>
                    <tr>
                        <td>Pekerjaan</td>
                        <td>Penghasilan</td>
                        <td>Status Rumah</td>
                        <td>Status Siswa</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>
                        	{totalVariasiPreferensi()
                    			.jumlahPekerjaan
                    			.toFixed(2) / total()
                        	}
                        </td>
                        <td>
                        	{totalVariasiPreferensi()
                        		.jumlahPenghasilan
                        		.toFixed(2) / total()
                        	}
                        </td>
                        <td>
                        	{totalVariasiPreferensi()
                        		.jumlahStatusRumah
                        		.toFixed(2) / total()
                        	}
                        </td>
                        <td>
                        	{totalVariasiPreferensi()
                        		.jumlahStatusSiswa
                        		.toFixed(2) / total()
                        	}
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Box>
    )
}

export default memo(TableKriteriaBobot)
