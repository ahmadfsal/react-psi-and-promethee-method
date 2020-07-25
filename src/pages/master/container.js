import React, { memo, useState, Fragment, useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { Column, Columns } from 'libs'
import { API_URL } from 'constant'
import axios from 'axios'

import ModalAddData from './views/modal-add-data'
import TablePekerjaan from './views/table-pekerjaan'
import TablePenghasilan from './views/table-penghasilan'
import TableStatusSiswa from './views/table-status-siswa'
import TablePreferensi from './views/table-preferensi'
import TableStatusRumah from './views/table-status-rumah'
import './style.scss'

const Master = () => {
    const defaultPreferensi = {
        kategori: '',
        nilai: ''
    }
    const defaultStatusSiswa = {
        sub_kriteria: '',
        bobot: ''
    }
    const defaultStatusRumah = {
        sub_kriteria: '',
        bobot: ''
    }
    const defaultPekerjaan = {
        sub_kriteria: '',
        bobot: ''
    }
    const defaultPenghasilan = {
        sub_kriteria: '',
        bobot: ''
    }
    const [modalAttr, setModalAttr] = useState({
        isShow: false,
        type: ''
    })
    const [formStatusSiswa, setFormStatusSiswa] = useState(defaultStatusSiswa)
    const [formPreferensi, setFormPreferensi] = useState(defaultPreferensi)
    const [formPekerjaan, setFormPekerjaan] = useState(defaultPekerjaan)
    const [formStatusRumah, setFormStatusRumah] = useState(defaultStatusRumah)
    const [formPenghasilan, setFormPenghasilan] = useState(defaultPenghasilan)

    const closeModal = () => {
        setModalAttr((prevValue) => ({
            ...prevValue,
            isShow: !prevValue.isShow
        }))
    }

    const handleModal = () => {
        switch (modalAttr.type) {
            case 'STATUS_SISWA':
                setFormStatusSiswa(defaultStatusSiswa)
                closeModal()
                break

            case 'PREFERENSI':
                setFormPreferensi(defaultPreferensi)
                closeModal()
                break

            case 'STATUS_RUMAH':
                setFormStatusRumah(defaultStatusRumah)
                closeModal()
                break

            case 'PEKERJAAN':
                setFormPekerjaan(defaultPekerjaan)
                closeModal()
                break

            case 'PENGHASILAN':
                setFormPenghasilan(defaultPenghasilan)
                closeModal()
                break

            default:
                return ''
        }
    }

    const handleSave = () => {
        switch (modalAttr.type) {
            case 'STATUS_SISWA':
                httpSaveData('status-siswa')
                break

            case 'PREFERENSI':
                httpSaveData('preferensi')
                break

            case 'STATUS_RUMAH':
                httpSaveData('status-rumah')
                break

            case 'PEKERJAAN':
                httpSaveData('pekerjaan')
                break

            case 'PENGHASILAN':
                httpSaveData('penghasilan')
                break

            default:
                break
        }
    }

    const getBodyToSave = () => {
        let objData = {}

        switch (modalAttr.type) {
            case 'STATUS_SISWA':
                objData = formStatusSiswa
                break

            case 'PREFERENSI':
                objData = formPreferensi
                break

            case 'STATUS_RUMAH':
                objData = formStatusRumah
                break

            case 'PEKERJAAN':
                objData = formPekerjaan
                break

            case 'PENGHASILAN':
                objData = formPenghasilan
                break

            default:
                break
        }

        return objData
    }

    const httpSaveData = (url) => {
        // axios.post(`${API_URL}/${url}`, JSON.stringify(bodyToSave))
        //     .then(res => {
        //         if (res) {
        //             alert('Sukses tambah data')
        //             resetFormAfterSave()
        //             fetchInitialMasterData()
        //         }
        //     })
        //     .catch(err => console.log(err))
    }

    const resetFormAfterSave = () => {
        switch (modalAttr.type) {
            case 'STATUS_SISWA':
                setFormStatusSiswa(defaultStatusSiswa)
                break

            case 'PREFERENSI':
                setFormPreferensi(defaultPreferensi)
                break

            case 'STATUS_RUMAH':
                setFormStatusRumah(defaultStatusRumah)
                break

            case 'PEKERJAAN':
                setFormPekerjaan(defaultPekerjaan)
                break

            case 'PENGHASILAN':
                setFormPenghasilan(defaultPenghasilan)
                break

            default:
                break
        }
    }

    const handleClickIcon = (type) => {
        setModalAttr((prevValue) => ({
            ...prevValue,
            isShow: !prevValue.isShow,
            type
        }))
    }

    const handleChangeInput = (e) => {
        const { name, value } = e.target

        switch (modalAttr.type) {
            case 'STATUS_SISWA':
                setFormStatusSiswa((prevValue) => ({
                    ...prevValue,
                    [name]: value
                }))
                break

            case 'PREFERENSI':
                setFormPreferensi((prevValue) => ({
                    ...prevValue,
                    [name]: value
                }))
                break

            case 'STATUS_RUMAH':
                setFormStatusRumah((prevValue) => ({
                    ...prevValue,
                    [name]: value
                }))
                break

            case 'PEKERJAAN':
                setFormPekerjaan((prevValue) => ({
                    ...prevValue,
                    [name]: value
                }))
                break

            case 'PENGHASILAN':
                setFormPenghasilan((prevValue) => ({
                    ...prevValue,
                    [name]: value
                }))
                break

            default:
                return ''
        }
    }

    // const httpGet = (url) => {
    //     axios
    //         .get(`${API_URL}/${url}`).then((res) => {
    //             if (res) return then
    //         }).catch((err) => {
    //             if (err) console.log(err)
    //             return null
    //         })
    // }

    // const fetchDataPekerjaan = () => {
    //     const result = httpGet('pekerjaan')
    //     if (result) {
    //         // Do here
    //     }
    // }

    // const fetchDataPenghasilan = () => {
    //     const result = httpGet('penghasilan')
    //     if (result) {
    //         // Do here
    //     }
    // }

    // const fetchDataPreferensi = () => {
    //     const result = httpGet('preferensi')
    //     if (result) {
    //         // Do here
    //     }
    // }

    // const fetchDataStatusRumah = () => {
    //     const result = httpGet('status-rumah')
    //     if (result) {
    //         // Do here
    //     }
    // }

    // const fetchDataStatusSiswa = () => {
    //     const result = httpGet('status-siswa')
    //     if (result) {
    //         // Do here
    //     }
    // }

    // const fetchInitialMasterData = () => {
    //     fetchDataPekerjaan()
    //     fetchDataPenghasilan()
    //     fetchDataPreferensi()
    //     fetchDataStatusRumah()
    //     fetchDataStatusSiswa()
    // }

    // useEffect(() => {
    //     fetchInitialMasterData()
    // }, [])

    return (
        <Fragment>
            <Helmet title='Master | SPK' />

            <div className='mb-5 has-text-weight-medium is-size-5 has-text-black'>
                Master Data
            </div>

            <Columns>
                <Column>
                    <TableStatusSiswa handleClickIcon={handleClickIcon} />
                </Column>
                <Column>
                    <TablePreferensi handleClickIcon={handleClickIcon} />
                </Column>
            </Columns>

            <Columns>
                <Column>
                    <TableStatusRumah handleClickIcon={handleClickIcon} />
                </Column>
                <Column>
                    <TablePekerjaan handleClickIcon={handleClickIcon} />
                </Column>
            </Columns>

            <Columns>
                <Column>
                    <TablePenghasilan handleClickIcon={handleClickIcon} />
                </Column>
            </Columns>

            <ModalAddData
                formPekerjaan={formPekerjaan}
                formPenghasilan={formPenghasilan}
                formPreferensi={formPreferensi}
                formStatusRumah={formStatusRumah}
                formStatusSiswa={formStatusSiswa}
                handleChangeInput={handleChangeInput}
                handleModal={handleModal}
                handleSave={handleSave}
                modalAttr={modalAttr}
            />
        </Fragment>
    )
}

export default memo(Master)
