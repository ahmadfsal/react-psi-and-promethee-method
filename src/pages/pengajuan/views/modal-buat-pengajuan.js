import React, { memo } from 'react'
import { Button, Column, Columns, Dropdown, Input, Modal } from 'libs'

const ModalBuatPengajuan = ({
    dataPekerjaan,
    dataPenghasilan,
    dataProgramBantuan,
    dataStatusSiswa,
    dataJurusan,
    formData,
    handleBuatPengajuan,
    handleChangeInputForm,
    handleEditPengajuan,
    handleModalPengajuan,
    isShow,
    modalType,
}) => {
    const handlerSimpan = () => {
        if (modalType === 'BUAT') handleBuatPengajuan()
        else handleEditPengajuan()
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
                        label='Nama Lengkap'
                        placeholder='Masukkan Nama Lengkap'
                        name='alternatif'
                        value={formData.alternatif}
                        onChange={(e) => handleChangeInputForm(e)}
                    />
                </Column>
            </Columns>

            <Columns>
                <Column>
                    <Dropdown
                        label='Kelas'
                        placeholder='Pilih kelas'
                        name='kelas'
                        objectValue={[
                            { text: 'X', value: 'X' },
                            { text: 'XI', value: 'XI' },
                            { text: 'XII', value: 'XII' },
                        ]}
                        value={formData.kelas}
                        onChange={(e) => handleChangeInputForm(e)}
                    />
                </Column>
            </Columns>

            <Columns>
                <Column>
                    <Dropdown
                        label='Pilih Kejuruan'
                        placeholder='Pilih Kejuruan'
                        name='jurusan'
                        objectValue={dataJurusan}
                        value={formData.jurusan}
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
                        label='Jenis Program Bantuan'
                        placeholder='Pilih Jenis Program Bantuan'
                        name='jenis_bantuan'
                        objectValue={dataProgramBantuan}
                        value={formData.jenis_bantuan}
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
