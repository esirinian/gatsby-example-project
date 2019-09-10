import React from "react"

import styles from "../../css/about.module.css"

import Title from "../Title"
import Image from "../../images/defaultBcg.jpeg"

const About = () => {
  return (
    <section className={styles.about}>
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={Image} alt="about image" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>Explore the Difference</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque sit
            laborum accusamus?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem porro
            excepturi iure.
          </p>
          <button type="button" className="btn-primary">
            Read More
          </button>
        </article>
      </div>
    </section>
  )
}

export default About
