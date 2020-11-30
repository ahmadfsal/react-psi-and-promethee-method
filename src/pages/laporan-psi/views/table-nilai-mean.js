import React, { memo } from 'react'
import { Box, Table } from 'libs'
import {
    cekBobotPekerjaan,
    cekBobotPenghasilan,
    cekBobotJenisBantuan,
    cekBobotStatusSiswa
} from 'shared/utils'

const TableNilaiMean = ({ dataAlternatif }) => {
    const totalBobotPekerjaan = () => {
        const totalList = dataAlternatif.map(
            (item) => parseInt(cekBobotPekerjaan(item.pekerjaan)) / 4
        )
        const totalResult = totalList.reduce((acc, curr) => acc + curr, 0)

        return totalResult
    }

    const totalBobotPenghasilan = () => {
        const totalList = dataAlternatif.map(
            (item) => 1 / parseInt(cekBobotPenghasilan(item.penghasilan))
        )
        const totalResult = totalList.reduce((acc, curr) => acc + curr, 0)

        return totalResult
    }

    const totalBobotJenisBantuan = () => {
        const totalList = dataAlternatif.map(
            (item) => parseInt(cekBobotJenisBantuan(item.jenis_bantuan)) / 4
        )
        const totalResult = totalList.reduce((acc, curr) => acc + curr, 0)

        return totalResult
    }

    const totalBobotStatusSiswa = () => {
        const totalList = dataAlternatif.map(
            (item) => parseInt(cekBobotStatusSiswa(item.status_siswa)) / 4
        )
        const totalResult = totalList.reduce((acc, curr) => acc + curr, 0)

        return totalResult
    }

    return (
        <Box>
            <Table>
                <thead>
                    <tr>
                        <th>Nilai Mean</th>
                        <th>Pekerjaan</th>
                        <th>Penghasilan</th>
                        <th>Jenis Kriteria Program Bantuan</th>
                        <th>Status Siswa</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>{totalBobotPekerjaan()}</td>
                        <td>{totalBobotPenghasilan()}</td>
                        <td>{totalBobotJenisBantuan()}</td>
                        <td>{totalBobotStatusSiswa()}</td>
                    </tr>
                </tbody>
            </Table>

            <Table>
                <thead>
                    <tr>
                        <th>Nilai Mean</th>
                        <th>Pekerjaan</th>
                        <th>Penghasilan</th>
                        <th>Status Siswa</th>
                        <th>Jenis Bantuan</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td>
                            {totalBobotPekerjaan() / dataAlternatif.length}
                        </td>
                        <td>
                            {totalBobotPenghasilan() / dataAlternatif.length}
                        </td>
                        <td>
                            {totalBobotStatusSiswa() / dataAlternatif.length}
                        </td>
                        <td>
                            {totalBobotJenisBantuan() / dataAlternatif.length}
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Box>
    )
}

export default memo(TableNilaiMean)
