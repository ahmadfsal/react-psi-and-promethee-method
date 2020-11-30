import { JENIS_BANTUAN } from 'constant'

export const cekBobotJenisBantuan = (jenisBantuan) => {

    const { KIP, KKS, SKTM, TIDAK_ADA } = JENIS_BANTUAN

    switch (jenisBantuan) {
        case KIP:
            return '4'
        case KKS:
            return '3'
        case SKTM:
            return '2'
        case TIDAK_ADA:
            return '1'
        default:
            return ''
    }
}
