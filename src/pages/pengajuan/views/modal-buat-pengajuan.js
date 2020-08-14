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
    handleModalPengajuan,
    isShow
}) => {
    return (
        <Modal
            isShow={isShow}
            title='Buat Pengajuan'
            onClose={handleModalPengajuan}
        >
            <form className='mt-5' onSubmit={handleBuatPengajuan}>
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
                        <Button className='is-primary' type='submit'>Buat</Button>
                    </Column>
                </Columns>
            </form>
        </Modal>
    )
}

export default memo(ModalBuatPengajuan)
