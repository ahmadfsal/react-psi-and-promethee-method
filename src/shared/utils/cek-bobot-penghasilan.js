import { PENGHASILAN } from 'constant'

export const cekBobotPenghasilan = (penghasilan) => {
switch (penghasilan) {
        case PENGHASILAN.LESS_600:
            return '4'
        case PENGHASILAN.RANGE_600_1800:
            return '3'
        case PENGHASILAN.RANGE_1800_2400:
            return '2'
        case PENGHASILAN.MORE_2400:
            return '1'
        default:
            return ''
    }
}
