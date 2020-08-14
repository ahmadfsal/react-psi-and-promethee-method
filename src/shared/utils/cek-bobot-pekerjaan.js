import { PEKERJAAN } from 'constant'

export const cekBobotPekerjaan = (pekerjaan) => {
    switch (pekerjaan) {
        case PEKERJAAN.PETANI:
            return '4'
        case PEKERJAAN.BURUH:
            return '3'
        case PEKERJAAN.WIRASWASTA:
            return '2'
        case PEKERJAAN.PNS:
            return '1'
        default:
            return ''
    }
}
