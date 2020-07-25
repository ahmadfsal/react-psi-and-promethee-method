import React, { memo, Fragment } from 'react'
import { Columns, Column, Input } from 'libs'

const FormStatusRumah = ({ data, handleChangeInput }) => {
    return (
        <Fragment>
            <Columns>
                <Column>
                    <Input
                        name='sub_kriteria'
                        label='Sub Kriteria'
                        value={data.sub_kriteria}
                        onChange={(e) => handleChangeInput(e)}
                    />
                </Column>
                <Column>
                    <Input
                        name='bobot'
                        label='Bobot'
                        value={data.bobot}
                        onChange={(e) => handleChangeInput(e)}
                    />
                </Column>
            </Columns>
        </Fragment>
    )
}

export default memo(FormStatusRumah)
