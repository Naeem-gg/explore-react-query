import Link from 'next/link'
import React from 'react'

const getDate = async ()=>{
  const data = await fetch("http://api.aladhan.com/v1/gToH/16-10-2023")
  const date = await data.json()
  return date
}

const page = async() => {
  const date = await getDate()
  return (
    <div className='flex flex-col'>
      <h1> {date.data.hijri.day} {date.data.hijri.month.ar} </h1>
      <Link href="/show">Fetch Data</Link>
    </div>
  )
}

export default page
