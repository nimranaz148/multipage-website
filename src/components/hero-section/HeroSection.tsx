
import styles from './HeroSection.module.css'
 import { italiana,  instrumentSans } from '@/font'
 import Image from 'next/image'
function HeroSection() {
  return (
    <div>
        <section className={styles.hero}>
            <div className={styles.heroleft}>
                <h1 className={italiana.className}>Discover And <br />Find Your <span>Own Fashion</span></h1>

                <p className={instrumentSans.className}>Explore  our  collection  of   stylish   bags   and 
                accesories   tailored   to  your   Unique   taste </p>

                <button className={instrumentSans.className}>EXPLORE NOW</button>
            </div>

            <div className={styles.heroright}>
                <div className={styles.herorightimg}>
                 <Image src={"/bagsimage/fashioncopy.png"} alt='heroimg' width={511} height={662} ></Image>
                </div>
            </div>

            

        </section>
      
    </div>
  )
}

export default HeroSection
