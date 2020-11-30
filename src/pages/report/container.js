import React, { Fragment, useState, useRef, useEffect } from 'react'
import { Button, Column, Columns } from 'libs'
import { Helmet } from 'react-helmet'
import { API_URL } from 'constant'
import { reject } from 'underscore'
import axios from 'axios'
import ReactToPrint from 'react-to-print'

import Print from './views/print'
import TablePengajuan from './views/table'

const Report = () => {
    const printRef = useRef()
    const [checkedItems, setCheckedItems] = useState([])
    const [dataPengajuan, setDataPengajuan] = useState([])

    const handleCheckedItems = (e, item) => {
        const { checked } = e.target

        if (item === 'all') {
            if (checked) setCheckedItems(dataPengajuan)
            else setCheckedItems([])
        } else {
            if (checked) setCheckedItems((prevValue) => [...prevValue, item])
            else {
                const arrayWithoutUncheckedRow = reject(
                    checkedItems,
                    (val) => val.id === item.id
                )
                setCheckedItems(arrayWithoutUncheckedRow)
            }
        }
    }

    const fetchDataPengajuan = () => {
        axios
            .get(`${API_URL}/pengajuan`)
            .then((res) => {
                if (res.data) {
                    setDataPengajuan(res.data)
                    setCheckedItems(res.data)
                }
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        fetchDataPengajuan()
    }, [])

    return (
        <Fragment>
            <Helmet title='Laporan Metode PSI | SPK' />

            <Columns>
                <Column className='is-11'>
                    <div
                        className='has-text-weight-bold is-size-5'
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        Daftar Penerima Program Indonesia Pintar (PIP)
                    </div>

                    <div
                        className='has-text-weight-bold is-size-5'
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}
                    >
                        Pada SMKN 1 Jamblang Tahun 2020
                    </div>
                </Column>
                <Column className='is-1'>
                    <ReactToPrint
                        content={() => printRef.current}
                        trigger={() => (
                            <Button className='is-link'>Print</Button>
                        )}
                    />
                </Column>
            </Columns>

            <div style={{ display: 'none' }}>
                <Print
                    ref={printRef}
                    data={dataPengajuan}
                    checkedItems={checkedItems}
                />
            </div>

            <TablePengajuan
                checkedItems={checkedItems}
                dataPengajuan={dataPengajuan}
                handleCheckedItems={handleCheckedItems}
            />
        </Fragment>
    )
}

export default Report
