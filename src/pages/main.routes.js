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
        path: '/pengajuan',
        title: 'Pengajuan',
        exact: true,
        component: Loadable({
            loader: () => import(/* webpackChunkName: 'pengajuan' */ './pengajuan'),
            loading: () => null,
            modules: ['pengajuan'],
        }),
    },
    {
        path: '/laporan/psi',
        title: 'Laporan PSI',
        exact: true,
        component: Loadable({
            loader: () => import(/* webpackChunkName: 'laporan-psi' */ './laporan-psi'),
            loading: () => null,
            modules: ['laporan-psi'],
        }),
    },
    {
        path: '/laporan/promethee',
        title: 'Laporan Promethee',
        exact: true,
        component: Loadable({
            loader: () => import(/* webpackChunkName: 'laporan-promethee' */ './laporan-promethee'),
            loading: () => null,
            modules: ['laporan-promethee'],
        }),
    },
    {
        path: '/laporan/hasil-banding',
        title: 'Hasil Perbandingan',
        exact: true,
        component: Loadable({
            loader: () => import(/* webpackChunkName: 'laporan-hasil-banding' */ './laporan-hasil-banding'),
            loading: () => null,
            modules: ['laporan-hasil-banding'],
        }),
    },
    {
        path: '/laporan/report',
        title: 'Report',
        exact: true,
        component: Loadable({
            loader: () => import(/* webpackChunkName: 'report' */ './report'),
            loading: () => null,
            modules: ['report'],
        }),
    },
]

const MainRoutes = () => <RouteWithSubRoutes routes={routes} />

export default memo(MainRoutes)