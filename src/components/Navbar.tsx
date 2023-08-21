import Link from 'next/link';
import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
    return (
        <div className='border border-[#bbb] w-56'>
            <div className='mt-16 pl-8 flex flex-col gap-4'>
                <Link href="/access-reviews">Access Reviews</Link>
                <Link href="/controls">Controls</Link>
            </div>
        </div>
    )
}

export default Navbar;