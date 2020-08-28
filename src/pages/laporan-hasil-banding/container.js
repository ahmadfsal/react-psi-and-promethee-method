import React, { memo, Fragment, useEffect, useState, useRef } from 'react'
import { Box, Button } from 'libs'
import { API_URL } from 'constant'
import { Helmet } from 'react-helmet'
import ReactToPrint from 'react-to-print'
import axios from 'axios'

import PrintPage from './print'
import TableHasilAkhir from 'pages/laporan-psi/views/table-hasil-akhir'
import TablePrometheeRanking from 'pages/laporan-promethee/views/table-promethee-ranking'

const LaporanHasilBanding = () => {
    const [dataAlternatif, setDataAlternatif] = useState([])
    const printPage = useRef()

    useEffect(() => {
        axios
            .get(`${API_URL}/pengajuan`)
            .then((res) => {
                if (res.data) setDataAlternatif(res.data)
            })
            .catch((err) => console.log(err))
    }, [])

    return (
        <Fragment>
            <Helmet title='Laporan Metode Promethee | SPK' />
            <div className='level mb-5 '>
                <div className='level-left has-text-weight-medium is-size-5 has-text-black'>
                    Hasil Perbandingan
                </div>
                <div className='level-right'>
                    <ReactToPrint
                        content={() => printPage.current}
                        trigger={() => <Button className='is-link'>Print</Button>}
                    />  
                </div>
            </div>

            <div style={{ display: 'none' }}>
                <PrintPage ref={printPage} dataAlternatif={dataAlternatif} />
            </div>

            <Box title='Preference Selection Index (PSI)' className='mb-3'>
                <TableHasilAkhir dataAlternatif={dataAlternatif} />
            </Box>

            <Box title='Promethee'>
                <TablePrometheeRanking data={dataAlternatif} />
            </Box>
        </Fragment>
    )
}

export default memo(LaporanHasilBanding)