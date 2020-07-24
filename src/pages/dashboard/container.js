import React, { memo, Fragment } from 'react'
import { Helmet } from 'react-helmet'

const Dashboard = () => {
    return (
        <Fragment>
            <Helmet title='Dashboard | SPK' />
            Selamat datang di aplikasi <b>Sistem Pendukung Keputusan</b> dengan
            metode&nbsp;
            <i>
                <b>Preference Selection Index (PSI)</b>
            </i>
            &nbsp; dan <b>Promethee</b>
        </Fragment>
    )
}

export default memo(Dashboard)
