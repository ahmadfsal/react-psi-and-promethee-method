import React, { Component, memo } from 'react'
import { Box, Column, Columns } from 'libs'
import moment from 'moment'

import TableHasilAkhir from 'pages/laporan-psi/views/table-hasil-akhir'
import TablePrometheeRanking from 'pages/laporan-promethee/views/table-promethee-ranking'

class Print extends Component {
    render() {
        const { ref, dataAlternatif } = this.props

        return (
            <div ref={ref}>
                <Box title='Preference Selection Index (PSI)' className='mb-3'>
                    <TableHasilAkhir dataAlternatif={dataAlternatif} />
                </Box>

                <Box title='Promethee'>
                    <TablePrometheeRanking data={dataAlternatif} />
                </Box>

                <footer className='footer'>
                    <div className='content'>
                        <Columns>
                            <Column>
                                <div className="mb-6">Kepala Sekolah</div>
                                <div>Nama    :</div>
                                <div>NIP     :</div>
                            </Column>
                            <Column>
                                <div>
                                    {`Jamblang, ${moment().format('DD MMMM YYYY')}`}<br />
                                    <div className="mb-6">Petugas,</div>
                                    <div>Nama    :</div>
                                    <div>NIP     :</div>
                                </div>
                            </Column>
                        </Columns>
                    </div>
                </footer>
            </div>
        )
    }
}

export default memo(Print)
