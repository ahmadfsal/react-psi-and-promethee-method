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
                    {data.map((item, index) => {
                        const indeksLevelingFlow = getLevelingFlow()[index]
                        const indeksEnteringFlow = getEnteringFlow()[index]

                        const levelingFlow = indeksLevelingFlow
                        const nilaiLevelingFlow = 1/4 * indeksLevelingFlow

                        const enteringFlow = indeksEnteringFlow
                        const nilaiEnteringFlow = 1/4 * indeksEnteringFlow
                        
                        const nilaiRanking = nilaiLevelingFlow - nilaiEnteringFlow

                        const ranking = Object.values({nilaiRanking}).sort((a, b) => a - b)

                        return (
                            <tr key={index}>
                                <td>{item.alternatif}</td>
                                <td>{levelingFlow}</td>
                                <td>{nilaiLevelingFlow}</td>
                                <td>{enteringFlow}</td>
                                <td>{nilaiEnteringFlow}</td>
                                <td>{nilaiRanking}</td>
                        <td>{ranking}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </Box>
    )
}

export default memo(TablePrometheeRanking)
