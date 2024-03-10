import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import { Autoplay, Navigation } from "swiper/modules"
// import banner01 from "../../../public/assets/images/landscape.jpg"
// import banner02 from "../../../public/assets/images/landscape1.jpg"
import banner03 from "../../../public/assets/images/landscape2.jpg"
import styles from "./banner.module.scss"
import { IoMdArrowRoundUp } from "react-icons/io"
import { useState, useEffect } from "react"

const images = [
  {
    image: banner03,
    title: "Welcome You To Kayan Egypt",
    about1: "Delivering top-notch",
    about2: "construction services",
    about3: "products",
  },
  {
    image: banner03,
    title: "Welcome You To Kayan Egypt",
    about1: "providing useful",
    about2: "significant products",
    about3: "services",
  },
  {
    image: banner03,
    title: "Welcome You To Kayan Egypt",
    about1: "Establishing values ",
    about2: "with responsibility",
    about3: "focus",
  },
]

const Banner = () => {
  const [showArrow, setShowArrow] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowArrow(true)
      } else {
        setShowArrow(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleArrowClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        id="home"
        loop={true}
        navigation={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
      >
        {images.map((item, index) => (
          <SwiperSlide key={index} className={styles.bannerSlide}>
            <div className={styles.slideContent}>
              <img
                className={styles.bannerImage}
                src={item.image}
                alt={item.title}
              />
              <div className={styles.heading}>
                <h5>{item.title}</h5>
                <h2>
                  {item.about1}
                  <br />
                  {item.about2}
                  <br />
                  {item.about3}
                </h2>

                <div className={styles.contact}>
                  <a href="#service" className={styles.btn}>
                    GET STARTED
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {showArrow && (
        <div className={styles.arrow} onClick={handleArrowClick}>
          <IoMdArrowRoundUp className={styles.icon_arrow} />
        </div>
      )}
    </>
  )
}

export default Banner
