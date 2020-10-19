import React, { memo } from 'react'
import { Modal, Columns, Column, Button } from 'libs'

const ModalDeletePengajuan = ({
    handleModalDeletePengajuan,
    handleDeletePengajuan,
    modalAttr,
}) => {
    return (
        <Modal
            isShow={modalAttr.isShow}
            title='Hapus Pengajuan'
            onClose={handleModalDeletePengajuan}
        >
            <p className="mt-3 mb-5">
                Apa Anda yakin ingin menghapus pengajuan ini?
            </p>
            <Columns>
                <Column className='is-one-quarter'>
                    <Button
                        className='is-danger is-fullwidth'
                        type='button'
                        onClick={() => handleDeletePengajuan(modalAttr.itemId)}
                    >
                        Hapus
                    </Button>
                </Column>
                <Column className='is-one-quarter'>
                    <Button
                        className='is-fullwidth'
                        type='button'
                        onClick={handleModalDeletePengajuan}
                    >
                        Batal
                    </Button>
                </Column>
            </Columns>
        </Modal>
    )
}

ModalDeletePengajuan.displayName = 'ModalDeletePengajuan'

export default memo(ModalDeletePengajuan)
