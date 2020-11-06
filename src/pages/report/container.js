import React, { Fragment, useState, useRef, useEffect } from 'react'
import { Button } from 'libs'
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
            if (checked) setCheckedItems(prevValue => [...prevValue, item])
            else {
                const arrayWithoutUncheckedRow = reject(
                    checkedItems,
                    val => val.id === item.id
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
            <div className='level mb-5 '>
                <div className='level-left has-text-weight-medium is-size-5 has-text-black'>
                    Daftar Penerima Beasiswa PIP
                </div>
                <div className='level-right'>
                    <ReactToPrint
                        content={() => printRef.current}
                        trigger={() => (
                            <Button className='is-link'>Print</Button>
                        )}
                    />
                </div>
            </div>

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
