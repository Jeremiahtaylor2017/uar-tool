import React from 'react'
import { ControlTable } from '@/components/ControlTable';

type Props = {}

const Controls = (props: Props) => {
    return (
        <div className='m-4 h-full flex flex-col justify-end'>
            <div className='mb-16'>
                <h1 className='text-6xl'>User Access Controls</h1>
            </div>
            <div className='grow'>
                <ControlTable />
            </div>
        </div>
    )
}

export default Controls;