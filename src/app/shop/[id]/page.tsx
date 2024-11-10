import Bestselling from '@/components/best-selling/Bestselling'
import Productdetails from '@/components/productdetails/Productdetails'
import React from 'react'

function dynamicproduct({params}: {params : {id:number}}) {

    
  return (
    <div>
      <Productdetails cardid={params.id}/>

      <Bestselling></Bestselling>
    </div>
  )
}

export default dynamicproduct
