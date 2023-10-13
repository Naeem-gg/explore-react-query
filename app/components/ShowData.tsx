"use client"
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'

const ShowData = () => {
    const {isLoading,data,error,isError} = useQuery({queryKey:['shows'],queryFn:async()=>{
        const res = await axios.get("http://localhost:5000/names")
        const data = res.data
        return data
    }})
    if (isLoading) return 'Loading...'
  if (isError) return 'An error has occurred: ' 

  return (
    <div>
      {data?.map((row:{id:number,name:string},index:number)=>{
        return <h1 key={row.id}>{row.name}</h1>
      })}
    </div>
  )
}

export default ShowData
