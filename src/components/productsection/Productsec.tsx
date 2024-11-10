import React from "react";
import Image from "next/image";
import styles from "./productsec.module.css";
import { IoStar } from "react-icons/io5";
import { cardData } from "@/constant/card";
import Link from "next/link";

function Productsec() {
  return (
    <div>
      <section className={styles.product}>
        {cardData.map((item, index) => {
          return (
            <Link href={`/shop/${item.id}`} key={index}>
            <div className={styles.card} key={index}>
              <div className={styles.topimagediv} style={{ backgroundColor:item.backgroundColor}}>
                <Image
                  src={item.src}
                  alt={"pic"}
                  width={300}
                  height={500}
                  className={styles.cardimage}
                ></Image>
              </div>

              <div className={styles.bottomtextdiv}>
                <div className={styles.stardiv}>
                  {[...Array(item.rating)].map((_, index) => {
                    return <IoStar color="orange" size={32} key={index} />;
                  })}
                </div>
                <p style={{ fontSize: "1.25rem" }}>{item.heading}</p>
                <p style={{ fontWeight: 600 }}>{item.price}</p>
              </div>
            </div>
            </Link>
          );
        })}
      </section>
    </div>
  );
}

export default Productsec;
