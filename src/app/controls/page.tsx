import { ControlTable } from '@/components/ControlTable';
import React from 'react'

type Props = {}

const Control = (props: Props) => {
    return (
        <div className='p-4'>
            <h1 className='text-6xl mb-16'>User Access Control</h1>
            <ControlTable />
        </div>
    )
}

export default Control;