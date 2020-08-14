import React, { memo, Fragment } from 'react'
import { Box, Table } from 'libs'
import {
    cekBobotPekerjaan,
    cekBobotPenghasilan,
    cekBobotStatusRumah,
    cekBobotStatusSiswa
} from 'shared/utils'

const TableMatrixKeputusan = ({ dataAlternatif }) => {
    return (
        <Box>
            {dataAlternatif.length >= 1 ? (
                <Table>
                    <thead>
                        <tr>
                            <td rowSpan="2">Alternatif</td>
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
                        {dataAlternatif?.map((item, index) => {
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
            ) : (
                <p>Tidak ada data alternatif.</p>
            )}
        </Box>
    )
}

export default memo(TableMatrixKeputusan)
