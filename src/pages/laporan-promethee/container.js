import React, { memo, Fragment, useEffect, useState, useRef } from 'react'
import { Helmet } from 'react-helmet'
import { Accordion, Button } from 'libs'
import { API_URL } from 'constant'
import axios from 'axios'
import ReactToPrint from 'react-to-print'

import PrintPage from './views/print'
import TableAlternatif from './views/table-alternatif'
import TableKriteria from './views/table-kriteria'
import TableNilaiAlternatif from './views/table-nilai-alternatif'
import TablePrometheeRanking from './views/table-promethee-ranking'

const LaporanPromethee = () => {
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
                    Metode Promethee
                </div>
                <div className='level-right'>
                    <ReactToPrint
                        content={() => printPage.current}
                        trigger={() => <Button className='is-link'>Print</Button>}
                    />  
                </div>
            </div>

            <div style={{ display: 'none' }}>
                <PrintPage ref={printPage} data={dataAlternatif} />
            </div>

            <Accordion title='Data Alternatif'>
                <TableAlternatif data={dataAlternatif} />
            </Accordion>

            <Accordion title='Nilai Preferensi' className="mt-5">
                <TableKriteria data={dataAlternatif} />
            </Accordion>

            <Accordion title='Hitung Nilai Preferensi' className='mt-5'>
                <TableNilaiAlternatif data={dataAlternatif} />
            </Accordion>

            <Accordion title='Promethee Ranking' className='mt-5'>
                <TablePrometheeRanking data={dataAlternatif} />
            </Accordion>
        </Fragment>
    )
}

export default memo(LaporanPromethee)
