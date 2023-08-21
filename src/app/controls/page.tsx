import React from 'react'
import { ControlTable } from '@/components/ControlTable';

type Props = {}

const Controls = (props: Props) => {
    return (
        <div className='m-4'>
            <div className='mb-16'>
                <h1 className='text-6xl'>User Access Controls</h1>
            </div>
            <div>
                <ControlTable />
            </div>
        </div>
    )
}

export default Controls;