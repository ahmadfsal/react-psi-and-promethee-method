import React, { memo, Fragment } from 'react'
import { Button, Table } from 'libs'

const TablePengajuan = ({
    dataPengajuan,
    handleEditItem,
    handleModalDeletePengajuan,
}) => {
    return (
        <Fragment>
            {dataPengajuan.length >= 1 ? (
                <Table>
                    <thead>
                        <tr>
                            <td>No</td>
                            <th>NISN</th>
                            <th>Alternatif</th>
                            <th>Kelas</th>
                            <th>Pekerjaan</th>
                            <th>Penghasilan</th>
                            <th>Status Rumah</th>
                            <th>Status Siswa</th>
                            <th>Aksi</th>
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
                                    <td>{item.pekerjaan ?? '-'}</td>
                                    <td>{item.penghasilan ?? '-'}</td>
                                    <td>{item.status_rumah ?? '-'}</td>
                                    <td>{item.status_siswa ?? '-'}</td>
                                    <td>
                                        <Button
                                            className='is-info is-light mr-1'
                                            onClick={() => handleEditItem(item.id)}
                                        >
                                            Edit
                                        </Button>
                                        <Button
                                            className='is-danger is-light'
                                            onClick={() => handleModalDeletePengajuan(item.id)}
                                        >
                                            Hapus
                                        </Button>
                                    </td>
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

export default memo(TablePengajuan)
