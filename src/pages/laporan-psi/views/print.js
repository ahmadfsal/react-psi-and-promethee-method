import React, { Fragment, memo, Component } from 'react'
import { Box } from 'libs'

import TableDataAlternatif from './table-data-alternatif' // Step 1
import TableMatrixKeputusan from './table-matrix-keputusan' // Step 2
import TableMatrix from './table-matrix' // Step 3
import TableNilaiMean from './table-nilai-mean' // Step 4
import TableVariasiPreferensi from './table-variasi-preferensi' // Step 5
import TablePenyimpananPreferensi from './table-penyimpanan-preferensi' // Step 6
import TableKriteriaBobot from './table-kriteria-bobot' // Step 7
import TableHitungPsi from './table-hitung-psi' // Step 8
import TableHasilAkhir from './table-hasil-akhir' // Step 9

class Print extends Component {
    render() {
        const { ref, dataAlternatif } = this.props
        return (
            <div ref={ref}>
                <Fragment>
                    <Box title='Data Alternatif'>
                        <TableDataAlternatif dataAlternatif={dataAlternatif} />
                    </Box>

                    <Box title='Matrix Keputusan' className='mt-5'>
                        <TableMatrixKeputusan dataAlternatif={dataAlternatif} />
                    </Box>

                    <Box title='Matrix' className='mt-5'>
                        <TableMatrix dataAlternatif={dataAlternatif} />
                    </Box>

                    <Box title='Menghitung Nilai Mean' className='mt-5'>
                        <TableNilaiMean dataAlternatif={dataAlternatif} />
                    </Box>

                    <Box
                        title='Menghitung Nilai Variasi Preferensi'
                        className='mt-5'
                    >
                        <TableVariasiPreferensi
                            dataAlternatif={dataAlternatif}
                        />
                    </Box>

                    <Box title='Penyimpanan Nilai Preferensi' className='mt-5'>
                        <TablePenyimpananPreferensi
                            dataAlternatif={dataAlternatif}
                        />
                    </Box>

                    <Box title='Menentukan Kriteria Bobot' className='mt-5'>
                        <TableKriteriaBobot dataAlternatif={dataAlternatif} />
                    </Box>

                    <Box
                        title='Menghitung Preference Selection Index (PSI)'
                        className='mt-5'
                    >
                        <TableHitungPsi dataAlternatif={dataAlternatif} />
                    </Box>

                    <Box title='Hasil Akhir' className='mt-5'>
                        <TableHasilAkhir dataAlternatif={dataAlternatif} />
                    </Box>
                </Fragment>
            </div>
        )
    }
}

export default memo(Print)
