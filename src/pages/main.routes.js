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
        path: '/psi',
        title: 'PSI',
        exact: true,
        component: Loadable({
            loader: () => import(/* webpackChunkName: 'psi' */ './psi'),
            loading: () => null,
            modules: ['psi'],
        }),
    },
    {
        path: '/promethee',
        title: 'Promethee',
        exact: true,
        component: Loadable({
            loader: () => import(/* webpackChunkName: 'promethee' */ './promethee'),
            loading: () => null,
            modules: ['promethee'],
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