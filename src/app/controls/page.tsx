"use client";
import React, { useState } from 'react'
import { ControlTable } from '@/components/ControlTable';
import { trpc } from '../_trpc/client';

type Props = {}

const Controls = (props: Props) => {
    const getControls = trpc.controls.list.useQuery();
    const addControl = trpc.controls.addControl.useMutation({
        onSettled: () => {
            getControls.refetch();
        }
    });
    const [input, setInput] = useState("");

    return (
        <div className='m-4 h-full flex flex-col justify-end'>
            <div className='mb-16'>
                <h1 className='text-6xl'>User Controls</h1>
                <div>
                    <input className='text-black' type="text" value={input} onChange={e => setInput(e.target.value)} />
                    <button onClick={async () => {
                        if (input.length) {
                            addControl.mutate(input);
                            setInput("");
                        }
                    }}>Add Control</button>
                </div>
                <div>{JSON.stringify(getControls.data)}</div>
            </div>
            <div className='grow'>
                <ControlTable />
            </div>
        </div>
    )
}

export default Controls;