import React, { memo, useState, Fragment, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { Column, Columns } from 'libs'
import { API_URL } from 'constant'
import axios from 'axios'

import TablePekerjaan from './views/table-pekerjaan'
import TablePenghasilan from './views/table-penghasilan'
import TableStatusSiswa from './views/table-status-siswa'
import TablePreferensi from './views/table-preferensi'
import TableProgramBantuan from './views/table-program-bantuan'
import './style.scss'

const Master = () => {
    const [dataPekerjaan, setDataPekerjaan] = useState([])
    const [dataPenghasilan, setDataPenghasilan] = useState([])
    const [dataPreferensi, setDataPreferensi] = useState([])
    const [dataStatusSiswa, setDataStatusSiswa] = useState([])
    const [dataProgramBantuan, setDataProgramBantuan] = useState([])

    const fetchDataPekerjaan = () => {
        axios
            .get(`${API_URL}/pekerjaan`)
            .then((res) => {
                if (res.data) {
                    setDataPekerjaan(res.data)
                }
            })
            .catch((err) => console.log(err))
    }

    const fetchDataPenghasilan = () => {
        axios
            .get(`${API_URL}/penghasilan`)
            .then((res) => {
                if (res.data) {
                    setDataPenghasilan(res.data)
                }
            })
            .catch((err) => console.log(err))
    }

    const fetchDataPreferensi = () => {
        axios
            .get(`${API_URL}/preferensi`)
            .then((res) => {
                if (res.data) {
                    setDataPreferensi(res.data)
                }
            })
            .catch((err) => console.log(err))
    }

    const fetchDataStatusSiswa = () => {
        axios
            .get(`${API_URL}/status-siswa`)
            .then((res) => {
                if (res.data) {
                    setDataStatusSiswa(res.data)
                }
            })
            .catch((err) => console.log(err))
    }

    const fetchDataProgramBantuan = () => {
        axios
            .get(`${API_URL}/program-bantuan`)
            .then((res) => {
                if (res.data) {
                    setDataProgramBantuan(res.data)
                }
            })
            .catch((err) => console.log(err))
    }

    const fetchInitialMasterData = () => {
        fetchDataPekerjaan()
        fetchDataPenghasilan()
        fetchDataPreferensi()
        fetchDataStatusSiswa()
        fetchDataProgramBantuan()
    }

    useEffect(() => {
        fetchInitialMasterData()
    }, [])

    return (
        <Fragment>
            <Helmet title='Master | SPK' />

            <div className='mb-5 has-text-weight-medium is-size-5 has-text-black'>
                Master Data
            </div>

            <Columns>
                <Column>
                    <TableStatusSiswa dataStatusSiswa={dataStatusSiswa} />
                </Column>
                <Column>
                    <TablePreferensi dataPreferensi={dataPreferensi} />
                </Column>
            </Columns>

            <Columns>
                <Column>
                    <TablePenghasilan dataPenghasilan={dataPenghasilan} />
                </Column>
                <Column>
                    <TablePekerjaan dataPekerjaan={dataPekerjaan} />
                </Column>
                <Column>
                    <TableProgramBantuan
                        dataProgramBantuan={dataProgramBantuan}
                    />
                </Column>
            </Columns>
        </Fragment>
    )
}

export default memo(Master)
