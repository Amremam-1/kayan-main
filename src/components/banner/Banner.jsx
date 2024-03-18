"use client"

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
import { useTranslation } from "react-i18next"

const images = [
  {
    image: banner03,
    titleEn: "Welcome You To Kayan Egypt",
    titleAr: "مرحبا بكم في كيان مصر",
    about1En: "Delivering top-notch",
    about1Ar: "تقديم أرفع و خدمات التشييد",
    about2En: "construction services",
    about3En: "products",
    about3Ar: "و المنتجات",
  },
  {
    image: banner03,
    titleEn: "Welcome You To Kayan Egypt",
    titleAr: "مرحبا بكم في كيان مصر",
    about1En: "providing useful",
    about1Ar: "توفير منتجات هامه ومفيدة",
    about2En: "significant products",
    about3En: "services",
    about3Ar: "و خدمات مميزه",
  },
  {
    image: banner03,
    titleEn: "Welcome You To Kayan Egypt",
    titleAr: "مرحبا بكم في كيان مصر",
    about1En: "Establishing values",
    about1Ar: "إنشاء القيم مع المسؤولية بتقديم",
    about2En: "with responsibility",
    about3En: "focus",
    about3Ar: "أرقي الخدمات",
  },
]

const Banner = () => {
  const [showArrow, setShowArrow] = useState(false)
  const [t, il8n] = useTranslation()
  const [pageDirection, setPageDirection] = useState("ltr")

  useEffect(() => {
    setPageDirection(il8n.language === "ar" ? "rtl" : "ltr")
  }, [il8n.language])

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
                alt={item.titleEn}
              />
              <div
                className={styles.heading}
                style={{ direction: pageDirection }}
              >
                <h5>{il8n.language === "ar" ? item.titleAr : item.titleEn}</h5>
                <h2>
                  {il8n.language === "ar" ? item.about1Ar : item.about1En}
                  <br />
                  {il8n.language === "ar" ? item.about3Ar : item.about2En}
                  <br />
                  {il8n.language === "ar" ? "" : item.about3En}
                </h2>

                <div className={styles.contact}>
                  <a href="#service" className={styles.btn}>
                    {t("banner-btnStart")}
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
