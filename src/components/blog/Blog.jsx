import { FaArrowRight } from "react-icons/fa6"
import styles from "./styles.module.scss"
import Picture4 from "../../../public/assets/images/ceo.jpg"
import video01 from "../../../public/assets/images/tkman.mp4"
import video02 from "../../../public/assets/images/social media video.mp4"
import Carousel from "react-bootstrap/Carousel"
import { useState } from "react"
const Blog = () => {
  const [showFullText, setShowFullText] = useState(false)

  const [userInteracted, setUserInteracted] = useState(false)

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
          <p className={styles.smTitle}>LATEST BLOG</p>
          <h2 className={styles.title}>LATEST BLOG INSIGHTS</h2>
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
                  <span className={styles.note}>CEO</span>
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
                <p className={styles.by}>By Hosni Chalabi</p>
                <p className={styles.date}>03 January, 2023</p>
              </div>
              <h3 className={styles.itemTitle}>
                {showFullText
                  ? "The power of faith in God is our fuel to achieve and rebuild the earth with charity and achieve goals that once seemed unattainable . Whenever I remember our beginning at Kayan Misr company, how we started, how we Rose and where we stand now, I find myself feeling proud of all the successes and challenges we have overcome, I pray to God to perpetuate his grace on us with success and continuous success . Our success is based on trust in God and constant striving, and success is only from God ."
                  : "The power of faith in God is our fuel to achieve and rebuild the earth with charity and achieve goals..."}
              </h3>
              <button
                className={styles.readDetailsBtn}
                onClick={toggleTextDisplay}
              >
                <span>Read Details</span>
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
