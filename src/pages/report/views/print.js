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
                    <Box>
                        <Columns>
                            <Column>
                                <div
                                    className='has-text-weight-bold is-size-5'
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    Daftar Penerima Program Indonesia Pintar
                                    (PIP)
                                </div>

                                <div
                                    className='has-text-weight-bold is-size-5'
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center'
                                    }}
                                >
                                    Pada SMKN 1 Jamblang Tahun 2020
                                </div>
                            </Column>
                        </Columns>
                        <div className='mt-4'>
                            <TablePengajuanPrint
                                dataPengajuan={dataToBePrint}
                            />
                        </div>
                    </Box>
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
            </div>
        )
    }
}

export default memo(Print)
