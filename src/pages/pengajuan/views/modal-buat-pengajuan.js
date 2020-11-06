import React, { memo } from 'react'
import { Button, Column, Columns, Dropdown, Input, Modal } from 'libs'

const ModalBuatPengajuan = ({
    dataPekerjaan,
    dataPenghasilan,
    dataStatusRumah,
    dataStatusSiswa,
    formData,
    handleBuatPengajuan,
    handleChangeInputForm,
    handleEditPengajuan,
    handleModalPengajuan,
    isShow,
    modalType,
}) => {
    const handlerSimpan = () => {
        if (modalType === 'BUAT') {
            handleBuatPengajuan()
        } else {
            handleEditPengajuan()
        }
    }

    return (
        <Modal
            isShow={isShow}
            title={`${modalType === 'BUAT' ? 'Buat' : 'Edit'} Pengajuan`}
            onClose={handleModalPengajuan}
        >
            <Columns>
                <Column>
                    <Input
                        label='NISN'
                        placeholder='Masukkan NISN'
                        name='nisn'
                        value={formData.nisn}
                        onChange={(e) => handleChangeInputForm(e)}
                    />
                </Column>
            </Columns>
            <Columns>
                <Column>
                    <Input
                        label='Alternatif'
                        placeholder='Masukkan nama alternatif'
                        name='alternatif'
                        value={formData.alternatif}
                        onChange={(e) => handleChangeInputForm(e)}
                    />
                </Column>
            </Columns>
            <Columns>
                <Column>
                    <Input
                        label='Kelas'
                        placeholder='Masukkan kelas'
                        name='kelas'
                        value={formData.kelas}
                        onChange={(e) => handleChangeInputForm(e)}
                    />
                </Column>
            </Columns>
            <Columns>
                <Column>
                    <Dropdown
                        label='Pekerjaan Orang Tua'
                        placeholder='Pilih pekerjaan'
                        name='pekerjaan'
                        objectValue={dataPekerjaan}
                        value={formData.pekerjaan}
                        onChange={(e) => handleChangeInputForm(e)}
                    />
                </Column>
            </Columns>
            <Columns>
                <Column>
                    <Dropdown
                        label='Penghasilan Orang Tua'
                        placeholder='Pilih penghasilan'
                        name='penghasilan'
                        objectValue={dataPenghasilan}
                        value={formData.penghasilan}
                        onChange={(e) => handleChangeInputForm(e)}
                    />
                </Column>
            </Columns>
            <Columns>
                <Column>
                    <Dropdown
                        label='Status Siswa'
                        placeholder='Pilih status siswa'
                        name='status_siswa'
                        objectValue={dataStatusSiswa}
                        value={formData.status_siswa}
                        onChange={(e) => handleChangeInputForm(e)}
                    />
                </Column>
            </Columns>
            <Columns>
                <Column>
                    <Dropdown
                        label='Status Rumah'
                        placeholder='Pilih status rumah'
                        name='status_rumah'
                        objectValue={dataStatusRumah}
                        value={formData.status_rumah}
                        onChange={(e) => handleChangeInputForm(e)}
                    />
                </Column>
            </Columns>

            <Columns>
                <Column className='is-one-quarter'>
                    <Button
                        className='is-primary is-fullwidth'
                        type='button'
                        onClick={handlerSimpan}
                    >
                        {modalType === 'BUAT' ? 'Buat' : 'Simpan'}
                    </Button>
                </Column>
            </Columns>
        </Modal>
    )
}

export default memo(ModalBuatPengajuan)
