import React, { Component, memo } from 'react'
import { Box } from 'libs'

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
            </div>
        )
    }
}

export default memo(Print)