import React, { memo } from 'react'
import { RouteWithSubRoutes } from 'libs'
import Loadable from 'react-loadable'

const routes = [
    {
        path: '/',
        title: 'Dashboard',
        exact: true,
        component: Loadable({
            loader: () => import(/* webpackChunkName: 'dashboard' */ './dashboard'),
            loading: () => null,
            modules: ['dashboard'],
        }),
    },
    {
        path: '/master',
        title: 'Master',
        exact: true,
        component: Loadable({
            loader: () => import(/* webpackChunkName: 'master' */ './master'),
            loading: () => null,
            modules: ['master'],
        }),
    },
    {
        path: '/laporan',
        title: 'Laporan',
        exact: true,
        component: Loadable({
            loader: () => import(/* webpackChunkName: 'laporan' */ './laporan'),
            loading: () => null,
            modules: ['laporan'],
        }),
    },
]

const MainRoutes = () => <RouteWithSubRoutes routes={routes} />

export default memo(MainRoutes)