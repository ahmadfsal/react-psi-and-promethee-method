import React, { memo, Fragment, useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import { Accordion } from 'libs'
import { API_URL } from 'constant'
import axios from 'axios'

import TableAlternatif from './views/table-alternatif'
import TableKriteria from './views/table-kriteria'
import TableNilaiAlternatif from './views/table-nilai-alternatif'
import TablePrometheeRanking from './views/table-promethee-ranking'

const LaporanPromethee = () => {
    const [dataAlternatif, setDataAlternatif] = useState([])

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
            <div className='mb-5 has-text-weight-medium is-size-5 has-text-black'>
                Metode Promethee
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
