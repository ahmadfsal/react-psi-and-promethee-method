import React, { memo, Fragment } from 'react'
import { Table } from 'libs'

const TablePengajuan = ({
    checkedItems,
    dataPengajuan,
    handleCheckedItems,
}) => {
    const isChecked = (id) => {
        return checkedItems.some((val) => val.id === id)
    }

    return (
        <Fragment>
            {dataPengajuan.length >= 1 ? (
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
                            <th>Alternatif</th>
                            <th>Kelas</th>
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
