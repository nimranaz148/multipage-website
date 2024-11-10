import Bestselling from '@/components/best-selling/Bestselling'
import Productdetails from '@/components/productdetails/Productdetails'
import React from 'react'

async function dynamicproduct({params}: {params : Promise<{id : string}>}) {
  const {id} = await params
  return (
    <div>
      <Productdetails cardid ={id}/>

      <Bestselling/>
    </div>
  )
}

export default dynamicproduct

    

