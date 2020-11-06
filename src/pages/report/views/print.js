import React, { memo, Fragment, Component } from 'react'
import { Box, Column, Columns } from 'libs'
import moment from 'moment'

import TablePengajuanPrint from './table-print'

class Print extends Component {
    render() {
        const { ref, data, checkedItems } = this.props
        const dataToBePrint = checkedItems.length === 0 ? data : checkedItems

        return (
            <div ref={ref}>
                <Fragment>
                    <Box title='Daftar Penerima Beasiswa PIP'>
                        <TablePengajuanPrint dataPengajuan={dataToBePrint} />
                    </Box>
                    <footer className='footer'>
                        <div className='content'>
                            <Columns>
                                <Column>
                                    <div className='mb-6'>Kepala Sekolah</div>
                                    <div>Nama :</div>
                                    <div>NIP :</div>
                                </Column>
                                <Column>
                                    <div>
                                        {`Jamblang, ${moment().format(
                                            'DD MMMM YYYY'
                                        )}`}
                                        <br />
                                        <div className='mb-6'>Petugas,</div>
                                        <div>Nama :</div>
                                        <div>NIP :</div>
                                    </div>
                                </Column>
                            </Columns>
                        </div>
                    </footer>
                </Fragment>
            </div>
        )
    }
}

export default memo(Print)
