import React, { memo } from 'react'
import { Container, Navbar } from 'libs'
import { navbarMenu } from 'constant'
import MainRoutes from './main.routes'

const Main = () => {
    return (
        <section className='columns is-fullheight'>
            <Navbar objectList={navbarMenu} />
            <Container className='column is-10'>
                <div className='section'>
                    <MainRoutes />
                </div>
            </Container>
        </section>
    )
}

export default memo(Main)
