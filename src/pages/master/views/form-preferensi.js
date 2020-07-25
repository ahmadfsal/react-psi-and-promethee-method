import React, { memo, Fragment } from 'react'
import { Columns, Column, Input } from 'libs'

const FormPreferensi = ({ data, handleChangeInput }) => {
    return (
        <Fragment>
            <Columns>
                <Column>
                    <Input
                        name='kategori'
                        label='Kategori'
                        value={data.kategori}
                        onChange={(e) => handleChangeInput(e)}
                    />
                </Column>
                <Column>
                    <Input
                        name='nilai'
                        label='Nilai'
                        value={data.nilai}
                        onChange={(e) => handleChangeInput(e)}
                    />
                </Column>
            </Columns>
        </Fragment>
    )
}

export default memo(FormPreferensi)
