import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Nav = () => {
  return (
    <nav>
        <div className="left">
            <Image src="/next.svg" fill/>
        </div>
        <Link href={'/'}>home</Link>
        <Link href={'/about'}>about</Link>
    </nav>
  )
}

export default Nav