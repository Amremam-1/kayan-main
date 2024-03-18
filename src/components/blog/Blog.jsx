import { FaArrowRight } from "react-icons/fa6"
import styles from "./styles.module.scss"
import Picture4 from "../../../public/assets/images/ceo.jpg"
import video01 from "../../../public/assets/images/tkman.mp4"
import video02 from "../../../public/assets/images/تمكين.mp4"
import Carousel from "react-bootstrap/Carousel"
import { useState } from "react"
import { useTranslation } from "react-i18next"

const Blog = () => {
  const [showFullText, setShowFullText] = useState(false)
  const [userInteracted, setUserInteracted] = useState(false)
  const [t] = useTranslation()
  
  const toggleTextDisplay = () => {
    setShowFullText(!showFullText)
  }

  // eslint-disable-next-line no-unused-vars
  const handleCarouselSelect = (selectedIndex, e) => {
    setUserInteracted(true)
  }

  return (
    <section className={styles.blog} id="blog">
      <div className={styles.container}>
        <div className={styles.top}>
          <p className={styles.smTitle}>{t("blogTitle")}</p>
          <h2 className={styles.title}>{t("blogTitle")}</h2>
        </div>
        <ul className={styles.blogList}>
          <li className={styles.blogItem}>
            <Carousel
              className={styles.carousel}
              onSelect={handleCarouselSelect}
              interval={!userInteracted ? 50000 : null}
            >
              <Carousel.Item>
                <div className={styles.image}>
                  <img src={Picture4} alt="blog" />
                  <span className={styles.note}>{t("BlogNickName")}</span>
                </div>
              </Carousel.Item>
              <Carousel.Item>
                <video
                  controls
                  autoPlay={"autoplay"}
                  loop={true}
                  muted={"muted"}
                  className={styles.video}
                >
                  <source src={video01} type="video/mp4" />
                </video>
              </Carousel.Item>
              <Carousel.Item>
                <video
                  controls
                  autoPlay={"autoplay"}
                  loop={true}
                  muted={"muted"}
                  className={styles.video}
                >
                  <source src={video02} type="video/mp4" />
                </video>
              </Carousel.Item>
            </Carousel>

            <div className={styles.content}>
              <div className={styles.byDate}>
                <p className={styles.by}>{t("BlogName")}</p>
              </div>
              <h5 className={styles.itemTitle}>
                {showFullText ? t("BlogmenagerTextBig") : t("BlogmenagerText")}
              </h5>
              <button
                className={styles.readDetailsBtn}
                onClick={toggleTextDisplay}
              >
                <span>{t("blogReadDetails")}</span>
                <FaArrowRight className={styles.icon} />
              </button>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Blog
