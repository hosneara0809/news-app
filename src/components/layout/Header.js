import Link from 'next/link'
import React from 'react'
import Marquee from "react-fast-marquee";
export default function Header() {
  return (
    <>
    <nav className='flex justify-center items-center py-5'>
      <Link href="/">
        <div className=' flex justify-center relative w-[300px] h-[100px] m-70'>
            <img src="./img/logo1.png" alt='logo' className='object-contain' />
        </div>
      </Link>
    </nav>
    <div className="trending-bar trending-light d-md-block">
    <div className="container bg-red-50">
        <div className="row justify-content-between">
            <div className="col-md-12 text-center text-red-600 font-bold">
                <h1 className="title-m"><Marquee direction="left" >... Stay with English News...</Marquee></h1>
            </div>
        </div>
    </div>
</div>
    </>
  )
}
