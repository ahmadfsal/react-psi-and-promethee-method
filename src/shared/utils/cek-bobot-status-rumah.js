import { STATUS_RUMAH } from 'constant'

export const cekBobotStatusRumah = (statusRumah) => {
switch (statusRumah) {
        case STATUS_RUMAH.TIDAK_LAYAK:
            return '4'
        case STATUS_RUMAH.KURANG_LAYAK:
            return '3'
        case STATUS_RUMAH.CUKUP_LAYAK:
            return '2'
        case STATUS_RUMAH.SANGAT_LAYAK:
            return '1'
        default:
            return ''
    }
}
