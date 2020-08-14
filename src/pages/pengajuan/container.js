import React, { memo, useState, useEffect, Fragment } from 'react'
import { Button } from 'libs'
import { Helmet } from 'react-helmet'
import { API_URL } from 'constant'
import axios from 'axios'

import ModalBuatPengajuan from './views/modal-buat-pengajuan'
import TablePengajuan from './views/table'

const Pengajuan = () => {
    const defaultFormData = {
        alternatif: '',
        pekerjaan: '',
        penghasilan: '',
        status_rumah: '',
        status_siswa: ''
    }
    const [dataPekerjaan, setDataPekerjaan] = useState([])
    const [dataPengajuan, setDataPengajuan] = useState([])
    const [formData, setFormData] = useState(defaultFormData)
    const [dataPenghasilan, setDataPenghasilan] = useState([])
    const [dataStatusRumah, setDataStatusRumah] = useState([])
    const [dataStatusSiswa, setDataStatusSiswa] = useState([])
    const [showModalPengajuan, setShowModalPengajuan] = useState(false)

    const handleChangeInputForm = (e) => {
        const { name, value } = e.target

        setFormData((prevValue) => ({
            ...prevValue,
            [name]: value
        }))
    }

    const handleBuatPengajuan = (e) => {
        e.preventDefault()

        axios
            .post(`${API_URL}/pengajuan`, formData)
            .then((res) => {
                if (res) {
                    alert('Berhasil buat pengajuan')
                    handleModalPengajuan()
                    fetchInitialMasterData()
                }
            })
            .catch((err) => console.log(err))
    }

    const fetchDataPengajuan = () => {
        axios
            .get(`${API_URL}/pengajuan`)
            .then((res) => {
                if (res.data) setDataPengajuan(res.data)
            })
            .catch((err) => console.log(err))
    }

    const handleModalPengajuan = () =>
        setShowModalPengajuan(!showModalPengajuan)

    const fetchDataPekerjaan = () => {
        axios
            .get(`${API_URL}/pekerjaan`)
            .then((res) => {
                if (res.data) {
                    let initialArr = []

                    res.data.map((item) => {
                        initialArr.push({
                            value: item.sub_kriteria,
                            text: item.sub_kriteria
                        })
                    })
                    setDataPekerjaan(initialArr)
                }
            })
            .catch((err) => console.log(err))
    }

    const fetchDataPenghasilan = () => {
        axios
            .get(`${API_URL}/penghasilan`)
            .then((res) => {
                if (res.data) {
                    let initialArr = []

                    res.data.map((item) => {
                        initialArr.push({
                            value: item.sub_kriteria,
                            text: item.sub_kriteria
                        })
                    })
                    setDataPenghasilan(initialArr)
                }
            })
            .catch((err) => console.log(err))
    }

    const fetchDataStatusRumah = () => {
        axios
            .get(`${API_URL}/status-rumah`)
            .then((res) => {
                if (res.data) {
                    let initialArr = []

                    res.data.map((item) => {
                        initialArr.push({
                            value: item.sub_kriteria,
                            text: item.sub_kriteria
                        })
                    })
                    setDataStatusRumah(initialArr)
                }
            })
            .catch((err) => console.log(err))
    }

    const fetchDataStatusSiswa = () => {
        axios
            .get(`${API_URL}/status-siswa`)
            .then((res) => {
                if (res.data) {
                    let initialArr = []

                    res.data.map((item) => {
                        initialArr.push({
                            value: item.sub_kriteria,
                            text: item.sub_kriteria
                        })
                    })
                    setDataStatusSiswa(initialArr)
                }
            })
            .catch((err) => console.log(err))
    }

    const fetchInitialMasterData = () => {
        fetchDataPengajuan()
        fetchDataPekerjaan()
        fetchDataPenghasilan()
        fetchDataStatusRumah()
        fetchDataStatusSiswa()
    }

    useEffect(() => {
        fetchInitialMasterData()
    }, [])

    return (
        <Fragment>
            <Helmet title='Pengajuan | SPK' />
            <div className='level mb-5'>
                <div className='level-left has-text-weight-medium is-size-5 has-text-black'>
                    Pengajuan
                </div>
                <div className='level-right'>
                    <Button
                        className='is-primary'
                        onClick={handleModalPengajuan}
                    >
                        Buat Pengajuan Baru
                    </Button>
                </div>
            </div>

            <ModalBuatPengajuan
                dataPekerjaan={dataPekerjaan}
                dataPenghasilan={dataPenghasilan}
                dataStatusRumah={dataStatusRumah}
                dataStatusSiswa={dataStatusSiswa}
                formData={formData}
                handleBuatPengajuan={handleBuatPengajuan}
                handleChangeInputForm={handleChangeInputForm}
                handleModalPengajuan={handleModalPengajuan}
                isShow={showModalPengajuan}
            />

            <TablePengajuan dataPengajuan={dataPengajuan} />
        </Fragment>
    )
}

export default memo(Pengajuan)