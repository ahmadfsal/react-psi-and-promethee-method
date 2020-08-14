import React, { memo } from 'react'
import { Container, Navbar } from 'libs'
import { NavLink, NavList } from 'shared/components'
import { listMenuLaporan } from 'constant'
import MainRoutes from './main.routes'

const Main = () => {
    return (
        <section className='columns is-fullheight'>
            <Navbar>
                <NavLink label='Dashboard' path='/' />
                <NavLink label='Master' path='/master' />
                <NavLink label='Pengajuan' path='/pengajuan' />
                <NavList label='Laporan' list={listMenuLaporan} />
            </Navbar>
            <Container className='column is-10'>
                <div className='section'>
                    <MainRoutes />
                </div>
            </Container>
        </section>
    )
}

export default memo(Main)
