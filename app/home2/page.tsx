import React from 'react'
import SearchableList from '../components/searching'

const page = () => {
  return (
    <div className='h-screen w-screen'>
      <div className="w-screen h-1/6 text-center p-4 text-3xl">إِنَّ الصَّلَاةَ تَنْهَىٰ عَنِ الْفَحْشَاءِ وَالْمُنكَرِ </div>
      <SearchableList />
    </div>
  )
}

export default page
