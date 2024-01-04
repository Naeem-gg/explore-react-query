import React from 'react'
import { Amiri } from 'next/font/google'
import prisma from '@/prisma/client'
import SearchableList from '@/app/components/searching'

const inter = Amiri({subsets:['arabic'],weight:"400" })

const getData = async()=>{
  try {
    
    const res = await prisma.time.findMany({})
    if(res !== undefined)return res
  } catch (error) {
    console.log(error)
  }
}
const getDate = async()=>{
  let currentSalah = '' 
  const currentTime = new Date().getHours() * 100 + new Date().getMinutes();

  if (currentTime >= 0 && currentTime < 430) {
    currentSalah = "isha";
  } else if (currentTime >= 430 && currentTime < 700) {
    currentSalah = "fajr";
  } else if (currentTime >= 700 && currentTime < 1450) {
    currentSalah = "zohr";
  } else if (currentTime >= 1450 && currentTime < 1750) {
    currentSalah = "asr"
  } else if (currentTime >= 1750 && currentTime < 1950) {
    currentSalah = "maghrib";
  } else {
    currentSalah = "isha";
  }
  
  return currentSalah;
}
const page = async() => {

  const data = await getData()
  const currentSalah = await getDate()
  if(data === undefined)return
  return (
    <div className='h-screen w-screen'>
      <div className={`${inter.className} w-screen h-1/6 text-center p-4 text-3xl`}>إِنَّ الصَّلَاةَ تَنْهَىٰ عَنِ الْفَحْشَاءِ وَالْمُنكَرِ </div>
      <SearchableList data={data} currentSalah={currentSalah}/>
    </div>
  )
}

export default page
