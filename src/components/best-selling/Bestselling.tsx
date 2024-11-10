'use client'
import React, { useEffect } from 'react'
import styles from './bestsellig.module.css'
import useEmblaCarousel from 'embla-carousel-react'
import Image  from 'next/image'
import { FaStar } from "react-icons/fa";
import { cardData } from '@/constant/card'

import { instrumentSans } from '@/font'
import { abhayaLibre } from '@/font'
import Autoplay from 'embla-carousel-autoplay'
import Link from 'next/link'

function Bestselling() {

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true },[Autoplay({delay:2000,
    stopOnInteraction:false, stopOnMouseEnter:true })])

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()) // Access API
    }
  }, [emblaApi])
  return (
    <div>
      <section className={styles.bestsellig}>
         <h1 className={abhayaLibre.className}>Best Selling</h1>

        <p className={instrumentSans.className}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusveniam, quis nostrud .</p>

        <div className={`${styles.cardsection} ${styles.embla}`} ref={emblaRef}>
            <div className={styles.embla__container}>

  
           {cardData.map((data)=>{return(
                 <div className={styles.embla__slide} key={data.id}>
                 <div className={styles.imgdiv} style={{backgroundColor:data.backgroundColor}}>
                   <Image src={data.src} alt={"bagpic"} width={371}
                   height={405} className={styles.cardimg}></Image>
                 </div>

                 <div className={styles.cardtext}>
                   <h1>{data.heading}</h1>
                <div className={styles.pricediv}>
                <p>{data.price} {data.rating}.0<FaStar size={25} color='yellow' className={styles.star}/></p>
                </div>
              </div>
           </div>
           )})}

            </div>
        </div>
         
         <Link href='/shop'><button>See More</button></Link>


      </section>
    </div>
  )
}

export default Bestselling
