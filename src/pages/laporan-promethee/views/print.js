import React, { memo, Fragment, Component } from 'react'
import { Box } from 'libs'

import TableAlternatif from './table-alternatif'
import TableKriteria from './table-kriteria'
import TableNilaiAlternatif from './table-nilai-alternatif'
import TablePrometheeRanking from './table-promethee-ranking'

class Print extends Component {
    render() {
        const { ref, data } = this.props
        return (
            <div ref={ref}>
                <Fragment>
                    <Box title='Data Alternatif'>
                        <TableAlternatif data={data} />
                    </Box>

                    <Box title='Nilai Preferensi' className='mt-5'>
                        <TableKriteria data={data} />
                    </Box>

                    <Box title='Hitung Nilai Preferensi' className='mt-5'>
                        <TableNilaiAlternatif data={data} />
                    </Box>

                    <Box title='Promethee Ranking' className='mt-5'>
                        <TablePrometheeRanking data={data} />
                    </Box>
                </Fragment>
            </div>
        )
    }
}

export default memo(Print)
