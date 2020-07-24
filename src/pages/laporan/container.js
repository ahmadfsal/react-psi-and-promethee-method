import React, { memo, Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { Box, Columns, Column } from 'libs'

import TablePsi from './views/table-psi'
import TablePromethee from './views/table-promethee'

const Laporan = () => {
    return (
        <Fragment>
            <Helmet title='Laporan | SPK' />
            <div className='mb-5 has-text-weight-medium is-size-5 has-text-black'>
                Laporan
            </div>
            <Columns>
                <Column>
                    <Box title='Preference Selection Index (PSI)'>
                        <TablePsi />
                    </Box>
                </Column>
                <Column>
                    <Box title='Promethee'>
                        <TablePromethee />
                    </Box>
                </Column>
            </Columns>
        </Fragment>
    )
}

export default memo(Laporan)
