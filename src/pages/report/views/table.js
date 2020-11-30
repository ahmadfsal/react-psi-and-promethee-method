import React, { memo, Fragment } from 'react'
import { Column, Columns, Table } from 'libs'
import moment from 'moment'

const TablePengajuan = ({
    checkedItems,
    dataPengajuan,
    handleCheckedItems
}) => {
    const isChecked = (id) => {
        return checkedItems.some((val) => val.id === id)
    }

    return (
        <Fragment>
            {dataPengajuan.length >= 1 ? (
                <Fragment>
                    <Table>
                        <thead>
                            <tr>
                                <td>
                                    <input
                                        type='checkbox'
                                        checked={
                                            checkedItems.length ===
                                            dataPengajuan.length
                                        }
                                        onChange={(e) =>
                                            handleCheckedItems(e, 'all')
                                        }
                                    />
                                </td>
                                <td>No</td>
                                <th>NISN</th>
                                <th>Nama</th>
                                <th>Kelas</th>
                                <th>Kejuruan</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataPengajuan?.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            <input
                                                type='checkbox'
                                                checked={isChecked(item.id)}
                                                onChange={(e) =>
                                                    handleCheckedItems(e, {
                                                        ...item,
                                                        no: index + 1
                                                    })
                                                }
                                            />
                                        </td>
                                        <td>{index + 1}</td>
                                        <td>{item.nisn ?? '-'}</td>
                                        <td>{item.alternatif ?? '-'}</td>
                                        <td>{item.kelas ?? '-'}</td>
                                        <td>{item.jurusan ?? '-'}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>

                    <footer className='footer'>
                        <div className='content'>
                            <Columns>
                                <Column>
                                    &nbsp;
                                    <div className='mt-6 has-text-weight-bold has-text-centered'>
                                        Kepala Sekolah
                                    </div>
                                </Column>
                                <Column>
                                    <div>
                                        <div className='has-text-weight-bold has-text-centered'>{`Cirebon, ${moment().format(
                                            'DD MMMM YYYY'
                                        )}`}</div>
                                        <div className='mt-6 has-text-weight-bold has-text-centered'>
                                            Admin
                                        </div>
                                    </div>
                                </Column>
                            </Columns>
                        </div>
                    </footer>
                </Fragment>
            ) : (
                <p>Tidak ada data pengajuan.</p>
            )}
        </Fragment>
    )
}

export default memo(TablePengajuan)
