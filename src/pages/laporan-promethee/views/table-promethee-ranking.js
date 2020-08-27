import React, { memo } from 'react'
import { Box, Table } from 'libs'
import {
    cekBobotPekerjaan,
    cekBobotPenghasilan,
    cekBobotStatusRumah,
    cekBobotStatusSiswa
} from 'shared/utils'

const TablePrometheeRanking = ({ data }) => {
    const arrIndeksPreferensi = data.map(i => {
        const mappedIndeksPreferensi = data.map(item => {
            const bobotPekerjaan = cekBobotPekerjaan(i.pekerjaan) - cekBobotPekerjaan(item.pekerjaan)
            const hasilPekerjaan = bobotPekerjaan <= 0 ? 0 : 1

            const bobotPenghasilan = cekBobotPenghasilan(i.penghasilan) - cekBobotPenghasilan(item.penghasilan)
            const hasilPenghasilan = bobotPenghasilan <= 0 ? 0 : 1

            const bobotStatusSiswa = cekBobotStatusSiswa(i.status_siswa) - cekBobotStatusSiswa(item.status_siswa)
            const hasilStatusSiswa = bobotStatusSiswa <= 0 ? 0 : 1

            const bobotStatusRumah = cekBobotStatusRumah(i.status_rumah) - cekBobotStatusRumah(item.status_rumah)
            const hasilStatusRumah = bobotStatusRumah <= 0 ? 0 : 1

            const total = hasilPekerjaan + hasilPenghasilan + hasilStatusSiswa + hasilStatusRumah

            return 1/4 * total
        })
        return mappedIndeksPreferensi
    })

    const getLevelingFlow = () => {
        return arrIndeksPreferensi.map(item => item.reduce((acc, curr) => acc + curr, 0))
    }

    const getEnteringFlow = () => {
        return arrIndeksPreferensi.reduce((r, a) => a.map((b, i) => (r[i] || 0) + b), [])
    }

    const getRanking = () => {
        const getNilaiRanking = data?.map((item, index) => {
            const indeksLevelingFlow = getLevelingFlow()[index]
            const indeksEnteringFlow = getEnteringFlow()[index]

            const nilaiLevelingFlow = 1/4 * indeksLevelingFlow
            const nilaiEnteringFlow = 1/4 * indeksEnteringFlow
            const nilaiRanking = nilaiLevelingFlow - nilaiEnteringFlow

            item.leveling_flow = indeksLevelingFlow
            item.nilai_leveling_flow = nilaiLevelingFlow
            item.entering_flow = indeksEnteringFlow
            item.nilai_entering_flow = nilaiEnteringFlow
            item.nilai_ranking = nilaiRanking

            return item
        })

        const sortRanking = getNilaiRanking.sort((a, b) => b.nilai_ranking - a.nilai_ranking)

        return sortRanking
    }

    return (
        <Box>
            <Table>
                <thead>
                    <tr>
                        <td>Alternatif</td>
                        <td>Leveling Flow</td>
                        <td>Nilai Leveling Flow</td>
                        <td>Entering Flow</td>
                        <td>Nilai Entering Flow</td>
                        <td>Nilai Ranking</td>
                        <td>Ranking</td>
                    </tr>
                </thead>
                <tbody>
                    {getRanking().map((item, index) => {
                        return (
                            <tr key={index}>
                                <td>{item.alternatif}</td>
                                <td>{item.leveling_flow}</td>
                                <td>{item.nilai_leveling_flow}</td>
                                <td>{item.entering_flow}</td>
                                <td>{item.nilai_entering_flow}</td>
                                <td>{item.nilai_ranking}</td>
                                <td>{index+1}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </Box>
    )
}

export default memo(TablePrometheeRanking)
