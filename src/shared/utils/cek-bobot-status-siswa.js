import { STATUS_SISWA } from 'constant'

export const cekBobotStatusSiswa = (statusSiswa) => {
switch (statusSiswa) {
        case STATUS_SISWA.YATIM_PIATU:
            return '4'
        case STATUS_SISWA.YATIM:
            return '3'
        case STATUS_SISWA.PIATU:
            return '2'
        case STATUS_SISWA.LENGKAP:
            return '1'
        default:
            return ''
    }
}
