// import React, { useRef, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import { Autoplay, Navigation } from "swiper/modules"
import banner01 from "../../assets/images/landscape.jpg"
import banner02 from "../../assets/images/landscape.jpg"
import banner03 from "../../assets/images/landscape.jpg"
import styles from "./banner.module.scss"
import { BiSolidPhoneCall } from "react-icons/bi"

const images = [
  {
    image: banner01,
    title: "Welcome You To Kayan Egypt",
    about1: "Delivering top-notch",
    about2: "construction services",
    about3: "products",
  },
  {
    image: banner02,
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
  return (
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

                <div className={styles.singleComponent}>
                  <BiSolidPhoneCall className={styles.icon} />
                  <div className={styles.info}>
                    <span>Call Us Now</span>
                    <a href="#">+ 966 545831834</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

export default Banner
