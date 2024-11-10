import React from 'react'
import styles from './Heading.module.css'

function Heading() {
  return (
    <div className={styles.heading}>
      <h1>Our Product</h1>

      <div className={styles.underline}></div>

      <p>Here you can find all the products we offer</p>
    </div>
  )
}

export default Heading
