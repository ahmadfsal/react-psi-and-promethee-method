import React, { memo } from 'react'
import { Button, Columns, Column, Modal } from 'libs'

import FormPenghasilan from './form-penghasilan'
import FormStatusSiswa from './form-status-siswa'
import FormPekerjaan from './form-pekerjaan'
import FormPreferensi from './form-preferensi'
import FormStatusRumah from './form-status-rumah'

const ModalAddData = ({
    formPenghasilan,
    formPekerjaan,
    formPreferensi,
    formStatusRumah,
    formStatusSiswa,
    handleChangeInput,
    handleModal,
    handleSave,
    modalAttr
}) => {
    const getTitle = () => {
        switch (modalAttr.type) {
            case 'STATUS_SISWA':
                return 'Status Siswa'
            case 'PREFERENSI':
                return 'Preferensi'
            case 'STATUS_RUMAH':
                return 'Status Rumah'
            case 'PEKERJAAN':
                return 'Pekerjaan Orang Tua'
            case 'PENGHASILAN':
                return 'Penghasilan'
            default:
                return ''
        }
    }

    const getType = () => {
        switch (modalAttr.type) {
            case 'STATUS_SISWA':
                return (
                    <FormStatusSiswa
                        data={formStatusSiswa}
                        handleChangeInput={handleChangeInput}
                    />
                )

            case 'PREFERENSI':
                return (
                    <FormPreferensi
                        data={formPreferensi}
                        handleChangeInput={handleChangeInput}
                    />
                )

            case 'STATUS_RUMAH':
                return (
                    <FormStatusRumah
                        data={formStatusRumah}
                        handleChangeInput={handleChangeInput}
                    />
                )

            case 'PEKERJAAN':
                return (
                    <FormPekerjaan
                        data={formPekerjaan}
                        handleChangeInput={handleChangeInput}
                    />
                )

            case 'PENGHASILAN':
                return (
                    <FormPenghasilan
                        data={formPenghasilan}
                        handleChangeInput={handleChangeInput}
                    />
                )

            default:
                return ''
        }
    }

    return (
        <Modal
            isShow={modalAttr.isShow}
            onClose={handleModal}
            title={`Tambah ${getTitle()}`}
        >
            <form className='my-5'>{getType()}</form>

            <Columns>
                <Column className='is-offset-8'>
                    <Button
                        className='is-danger is-light'
                        onClick={handleModal}
                    >
                        Batal
                    </Button>
                    <Button className='is-primary ml-5' onClick={handleSave}>
                        Simpan
                    </Button>
                </Column>
            </Columns>
        </Modal>
    )
}

export default memo(ModalAddData)
