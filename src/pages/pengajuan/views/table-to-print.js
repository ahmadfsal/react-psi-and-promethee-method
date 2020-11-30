import React, { memo, Fragment } from 'react'
import { Table } from 'libs'

const TableToPrint = ({ dataPengajuan }) => {
    return (
        <Fragment>
            {dataPengajuan.length >= 1 ? (
                <Table>
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>NISN</th>
                            <th>Nama Lengkap</th>
                            <th>Kelas</th>
                            <th>Kejuruan</th>
                            <th>Pekerjaan Orang Tua</th>
                            <th>Penghasilan Orang Tua</th>
                            <th>Status Siswa</th>
                            <th>Jenis Bantuan</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataPengajuan?.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{item.nisn ?? '-'}</td>
                                    <td>{item.alternatif ?? '-'}</td>
                                    <td>{item.kelas ?? '-'}</td>
                                    <td>{item.jurusan ?? '-'}</td>
                                    <td>{item.pekerjaan ?? '-'}</td>
                                    <td>{item.penghasilan ?? '-'}</td>
                                    <td>{item.status_siswa ?? '-'}</td>
                                    <td>{item.jenis_bantuan ?? '-'}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            ) : (
                <p>Tidak ada data pengajuan.</p>
            )}
        </Fragment>
    )
}

export default memo(TableToPrint)
