"use client"
import React from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'


const ShowData = () => {
    const {isLoading,data,error,isError} = useQuery({queryKey:['shows'],queryFn:getData})
    if (isLoading) return 'Loading...'
  
  if (isError) return <h1>An error has occurred</h1> 

  return (
    <div>
      {data?.map((row:{id:number,name:string},index:number)=>{
        return <h1 key={row.id}>{row.name}</h1>
      })}
    </div>
  )
}

export default ShowData

const getData = async()=>{
  const res = await axios.get("http://localhost:5000/names")
        const data = res.data
        return data
}