import React, { memo } from 'react'
import { Box, Column, Columns, Table } from 'libs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle, faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'

const TablePenghasilan = ({ handleClickIcon }) => {
    return (
        <Box
            title='Penghasilan Orang Tua'
            icon={faPlusCircle}
            buttonTitle="Tambah data"
            onClick={() => handleClickIcon('PENGHASILAN')}
        >
            <Table>
                <thead>
                    <tr>
                        <th>Sub Kriteria</th>
                        <th>Bobot</th>
                        <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td></td>
                        <td></td>
                        <td>
                            <Columns>
                                <Column className='has-text-centered has-text-info'>
                                    <FontAwesomeIcon icon={faEdit} />
                                </Column>
                                <Column className='has-text-centered has-text-danger'>
                                    <FontAwesomeIcon icon={faTrash} />
                                </Column>
                            </Columns>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </Box>
    )
}

export default memo(TablePenghasilan)
