import React, { memo, Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { Column, Columns } from 'libs'

import TableCalonPenerima from './views/table-calon-penerima'
import TableKriteria from './views/table-kriteria'
import TablePekerjaan from './views/table-pekerjaan'
import TablePreferensi from './views/table-preferensi'
import TableStatusRumah from './views/table-status-rumah'

const Promethee = () => {
    return (
        <Fragment>
            <Helmet title='Promethee | SPK' />

            <div className='mb-5 has-text-weight-medium is-size-5 has-text-black'>
                Master Data Promethee
            </div>

            <Columns>
                <Column>
                    <TableKriteria />
                </Column>
                <Column>
                    <TablePreferensi />
                </Column>
            </Columns>

            <Columns>
                <Column>
                    <TableStatusRumah />
                </Column>
                <Column>
                    <TablePekerjaan />
                </Column>
            </Columns>

            <Columns>
                <Column>
                    <TableCalonPenerima />
                </Column>
            </Columns>
        </Fragment>
    )
}

export default memo(Promethee)
