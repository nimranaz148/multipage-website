import React from  'react'
import styles from './footer.module.css'
import {ibmPlexSerif, inter} from '@/font'
import { FaFacebookSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";

function footer() {
  return (
    <div>
      <section className={`${styles.footer} ${styles.inter}`}>
        <div className={styles.fashion}>
            <h1>Fashion.</h1>
            <p className={ibmPlexSerif.className}>Social media</p>

            <div className={styles.iconsdiv}>
            <FaFacebookSquare size={40} color='blue'/>
            <FaXTwitter size={40} color='black'/>
            <RiInstagramFill size={40} color='#E1306C'/>
            </div>
        </div>

        <div className={styles.shopdiv}>
            <h1>SHOP</h1>
            <ul>
                <li>Product</li>
                <li>Overview</li>
                <li>Pricing</li>
                <li>Release</li>
            </ul>
        </div>

        <div className={styles.companydiv}>
            <h1>SHOP</h1>
            <ul>
                <li>About Us</li>
                <li>Contact</li>
                <li>News</li>
                <li>Support</li>
            </ul>
        </div>

        <div className={styles.submitdiv}>
            <h1>STAY UPTO DATE</h1>

            <div className={styles.inputdiv}>
        <input type="text" placeholder='Enter your email' className={styles.input} />
        <button>SUBMIT</button>

        </div>
        </div>

      </section>
    </div>
  )
}

export default footer
