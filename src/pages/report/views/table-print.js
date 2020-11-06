import React, { memo, Fragment } from 'react'
import { Table } from 'libs'

const TablePengajuanPrint = ({ dataPengajuan }) => {
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
                        </tr>
                    </thead>
                    <tbody>
                        {dataPengajuan?.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.no ? item.no : index + 1}</td>
                                    <td>{item.nisn ?? '-'}</td>
                                    <td>{item.alternatif ?? '-'}</td>
                                    <td>{item.kelas ?? '-'}</td>
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

export default memo(TablePengajuanPrint)
