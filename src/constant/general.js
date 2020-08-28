export const API_URL = 'http://127.0.0.1:8080'
export const listMenuLaporan = [
    {
        path: '/laporan/psi',
        title: 'Metode PSI'
    },
    {
        path: '/laporan/promethee',
        title: 'Metode Promethee'
    },
    {
        path: '/laporan/hasil-banding',
        title: 'Hasil Perbandingan'
    }
]

export const PEKERJAAN = {
    PETANI: 'Petani',
    BURUH: 'Buruh',
    WIRASWASTA: 'Wiraswasta',
    PNS: 'PNS'
}

export const PENGHASILAN = {
    LESS_600: '< 600.000',
    RANGE_600_1800: '600.000 - 1.800.000',
    RANGE_1800_2400: '1.800.000 - 2.400.000',
    MORE_2400: '> 2.400.000'
}

export const STATUS_RUMAH = {
    TIDAK_LAYAK: 'Tidak Layak',
    KURANG_LAYAK: 'Kurang Layak',
    CUKUP_LAYAK: 'Cukup Layak',
    SANGAT_LAYAK: 'Sangat Layak'
}

export const STATUS_SISWA = {
    YATIM_PIATU: 'Yatim Piatu',
    YATIM: 'Yatim',
    PIATU: 'Piatu',
    LENGKAP: 'Lengkap'
}
