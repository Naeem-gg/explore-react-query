import React from 'react'
import SearchableList from '../components/searching'
import { Amiri } from 'next/font/google'
import prisma from '@/prisma/client'
const inter = Amiri({subsets:['arabic'],weight:"400" })

const getData = async()=>{
  try {
    
    const res = await prisma.time.findMany({})
    if(res !== undefined)return res
  } catch (error) {
    console.log(error)
  }
}

const page = async() => {

  const data = await getData()
  if(data === undefined)return
  console.log(data)
  return (
    <div className='h-screen w-screen'>
      <div className={`${inter.className} w-screen h-1/6 text-center p-4 text-3xl`}>إِنَّ الصَّلَاةَ تَنْهَىٰ عَنِ الْفَحْشَاءِ وَالْمُنكَرِ </div>
      <SearchableList data={data}/>
    </div>
  )
}

export default page
