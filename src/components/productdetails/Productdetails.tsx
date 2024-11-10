import React from 'react'
import styles from './Productdetails.module.css'
import Image  from 'next/image'
import { abhayaLibre } from '@/font'
import { cardData } from '@/constant/card'



function Productdetails(props: {cardid:number}) {
     let data = cardData.find((item) =>{return item.id == props.cardid})

  return (
    <div>
      <section className={styles.productdetails}>
        <div className={styles.leftimgdiv} style={{backgroundColor:data?.backgroundColor}}>
            <Image src={data?.src || "/bagsimage/golden.jpg"}  alt={"bag"} width={400} height={600} className={styles.img}></Image>

        </div>

        <div className={styles.righttextdiv}>
            <h1 className={abhayaLibre.className}>{data?.heading}</h1>
            <p>{data?.price}</p>

            <div className={styles.cartdiv}>
            <input type="number" />
            <button>ADD TO CART</button>
            </div>

            <p style={{fontSize:"30px"}}>Product Details</p>

            <p  style={{fontSize:"16px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore aut aliquid et dolorum exercitationem facere consequatur voluptate corrupti fugiat quas. Architecto, rem minima rerum dolorem laudantium voluptates neque, voluptatum maxime assumenda illum voluptatibus dolor voluptate tenetur accusantium doloribus distinctio corrupti culpa id sed labore. Maiores sit corrupti, modi aperiam inventore quaerat labore sint nemo tempora eius nulla excepturi veniam exercitationem quasi illo incidunt accusantium neque officia, temporibus iusto eaque rerum voluptatibus quidem rem. Et beatae suscipit, repellendus optio saepe quod repellat quisquam ad assumenda, possimus id reiciendis porro aliquam deserunt .</p>

        </div>
      </section>
    </div>
  )
}

export default Productdetails
