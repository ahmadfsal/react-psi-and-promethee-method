import React, { memo, Fragment } from 'react'
import { Table } from 'libs'

const TablePengajuan = ({ dataPengajuan, handleEditItem }) => {
    return (
        <Fragment>
            {dataPengajuan.length >= 1 ? (
                <Table>
                    <thead>
                        <tr>
                            <th>Alternatif</th>
                            <th>Pekerjaan</th>
                            <th>Penghasilan</th>
                            <th>Status Rumah</th>
                            <th>Status Siswa</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataPengajuan?.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td
                                        className='clickable'
                                        onClick={() => handleEditItem(item.id)}
                                    >
                                        {item.alternatif}
                                    </td>
                                    <td>{item.pekerjaan}</td>
                                    <td>{item.penghasilan}</td>
                                    <td>{item.status_rumah}</td>
                                    <td>{item.status_siswa}</td>
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
