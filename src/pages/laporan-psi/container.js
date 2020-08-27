import React, { memo, Fragment, useState, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { API_URL } from 'constant'
import { Accordion } from 'libs'
import axios from 'axios'

import TableDataAlternatif from './views/table-data-alternatif' // Step 1
import TableMatrixKeputusan from './views/table-matrix-keputusan' // Step 2
import TableMatrix from './views/table-matrix' // Step 3
import TableNilaiMean from './views/table-nilai-mean' // Step 4
import TableVariasiPreferensi from './views/table-variasi-preferensi' // Step 5
import TablePenyimpananPreferensi from './views/table-penyimpanan-preferensi' // Step 6
import TableKriteriaBobot from './views/table-kriteria-bobot' // Step 7
import TableHitungPsi from './views/table-hitung-psi' // Step 8
import TableHasilAkhir from './views/table-hasil-akhir' // Step 9

const LaporanPsi = () => {
    const [dataAlternatif, setDataAlternatif] = useState([])

    const fetchDataPengajuan = () => {
        axios
            .get(`${API_URL}/pengajuan`)
            .then((res) => {
                if (res.data) setDataAlternatif(res.data)
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        fetchDataPengajuan()
    }, [])

    return (
        <Fragment>
            <Helmet title='Laporan Metode PSI | SPK' />
            <div className='level'>
                <div className='level-left mb-5 has-text-weight-medium is-size-5 has-text-black'>
                    Metode PSI
                </div>
                <div className='level-right'>
                    <button className='button' onClick={() => window.print()}>
                        Print
                    </button>
                </div>
            </div>

            <Accordion title='Data Alternatif'>
                <TableDataAlternatif dataAlternatif={dataAlternatif} />
            </Accordion>

            <Accordion title='Matrix Keputusan' className='mt-5'>
                <TableMatrixKeputusan dataAlternatif={dataAlternatif} />
            </Accordion>

            <Accordion title='Matrix' className='mt-5'>
                <TableMatrix dataAlternatif={dataAlternatif} />
            </Accordion>

            <Accordion title='Menghitung Nilai Mean' className='mt-5'>
                <TableNilaiMean dataAlternatif={dataAlternatif} />
            </Accordion>

            <Accordion
                title='Menghitung Nilai Variasi Preferensi'
                className='mt-5'
            >
                <TableVariasiPreferensi dataAlternatif={dataAlternatif} />
            </Accordion>

            <Accordion title='Penyimpanan Nilai Preferensi' className='mt-5'>
                <TablePenyimpananPreferensi dataAlternatif={dataAlternatif} />
            </Accordion>

            <Accordion title='Menentukan Kriteria Bobot' className='mt-5'>
                <TableKriteriaBobot dataAlternatif={dataAlternatif} />
            </Accordion>

            <Accordion
                title='Menghitung Preference Selection Index (PSI)'
                className='mt-5'
            >
                <TableHitungPsi dataAlternatif={dataAlternatif} />
            </Accordion>

            <Accordion title='Hasil Akhir' className='mt-5'>
                <TableHasilAkhir dataAlternatif={dataAlternatif} />
            </Accordion>
        </Fragment>
    )
}

export default memo(LaporanPsi)
