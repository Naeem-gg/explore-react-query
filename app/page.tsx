import Link from 'next/link'
import React from 'react'
import DateInput from "@/app/components/DateInput"
const getDate = async()=> {
  const currentDate = new Date();
  const day = currentDate.getDate().toString().padStart(2, '0');
  const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
  const year = currentDate.getFullYear();
  const formattedDate = `${day}-${month}-${year}`;
  const data = await fetch(`http://api.aladhan.com/v1/gToH/${formattedDate}`)
  const date = await data.json()
  return date
}

const page = async() => {
  const date = await getDate()
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return (
    <div className='flex flex-col'>
      <h1 className=''>Today:  {date.data.hijri.day} {date.data.hijri.month.ar} </h1>
      <h1>Your timezone:{timezone}</h1>
      <DateInput />
      <Link href="/test">Show sample</Link>
    </div>
  )
}

export default page
