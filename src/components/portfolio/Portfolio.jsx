import styles from "./styles.module.scss"
import { Container, Row, Col } from "react-bootstrap"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
// import { AiOutlineMail } from "react-icons/ai"
// import { FiPhoneCall } from "react-icons/fi"
import { Navigation, Pagination, Autoplay } from "swiper/modules"
import port1 from "../../../public/assets/images/project-01.jpg"
import port2 from "../../../public/assets/images/tamees-01.jpg"
import port3 from "../../../public/assets/images/muslam-01.jpg"
import port4 from "../../../public/assets/images/alshoula-01.jpg"
import port5 from "../../../public/assets/images/Picture107.png"
import port6 from "../../../public/assets/images/officeDesgin-01.jpg"
import port7 from "../../../public/assets/images/project-02.jpg"
import port8 from "../../../public/assets/images/project-03.jpg"
import port9 from "../../../public/assets/images/project-04.jpg"
import port10 from "../../../public/assets/images/مدارس واحة جدة 01  .jpg"
import port11 from "../../../public/assets/images/مدارس واحة جدة 02  .jpg"
import port12 from "../../../public/assets/images/مدارس واحة جدة 03  .jpg"
import port13 from "../../../public/assets/images/مدارس واحة جدة 04  .jpg"
import port14 from "../../../public/assets/images/شعله (1).jpg"
import port15 from "../../../public/assets/images/شعله (2).jpg"
import port16 from "../../../public/assets/images/شعله (3).jpg"
// import person from "../../../public/assets/images/person-famel (1).jpg"
// import person01 from "../../../public/assets/images/person-male (2).jpg"

import { useState } from "react"
import LatestProjects from "../latestProjects/LatestProjects"
import { useTranslation } from "react-i18next"
// const persons = [
//   {
//     img: person01,
//     name: "Walaa Zain Alabdin",
//     desig: "Architectural Engineer",
//     // email: "walaa@kayanegypt.net",
//     // phone: "0569056148",
//     id: "070",
//   },
//   {
//     img: person,
//     name: "Yahya Moustafa Allam",
//     desig: "Civil Engineer",
//     // email: "yehia@kayanegypt.net",
//     // phone: "0530331300",
//     id: "080",
//   },
//   {
//     img: person,
//     name: "Mazen Hosny",
//     desig: "Project Manager",
//     // email: "Mazen@kayanegypt.net",
//     // phone: "+966560453344",
//     id: "090",
//   },
//   {
//     img: person,
//     name: "Mohamed Gomaa",
//     desig: "Chief Financial Officer",
//     // email: "M.Gomaa@kayanegypt.com",
//     // phone: "056 905 3968",
//     id: "010",
//   },
//   {
//     img: person,
//     name: "Mohamed Asaad Sami",
//     desig: "Architectural Engineer",
//     // email: "M.Asaad@kayanegypt.net",
//     // phone: "056 905 4337",
//     id: "011",
//   },
//   {
//     img: person,
//     name: "Mahfouz Salim",
//     desig: "Architectural Engineer",
//     // email: "Mahfouz@kayanegypt.net",
//     // phone: "0598647764",
//     id: "012",
//   },

//   {
//     img: person,
//     name: "Ali Zafaran",
//     desig: "Construction  Supervisor",
//     email: "",
//     phone: "",
//     id: "013",
//   },
//   {
//     img: person,
//     name: "Ahmad Abd Albaseer",
//     desig: "Construction Supervisor",
//     email: "",
//     phone: "",
//     id: "014",
//   },
//   {
//     img: person,
//     name: "Saber Ibraheem",
//     desig: "Construction  Supervisor",
//     email: "",
//     phone: "",
//     id: "015",
//   },
//   {
//     img: person,
//     name: "Mahmoud Basuioni",
//     desig: "HVAC supervisor",
//     email: "",
//     phone: "",
//     id: "016",
//   },
// ]

const images = [
  {
    img: port1,
    id: "1",
    title: "معارض تمكين للأجهزة المنزلية ",
    span: "فرع الأمير سلطان",
  },
  { img: port2, id: "02", title: "مطعم تغاميس" },
  { img: port3, id: "03", title: "جامع فكرة بن سعيد المجدوعي" },
  { img: port4, id: "04", title: "مركز الشعلة" },
  { img: port5, id: "05", title: "تصميم داخلي سكني" },
  { img: port6, id: "06", title: "تصميم داخلي إداري" },
  {
    img: port7,
    id: "2",
    title: "معارض تمكين للأجهزة المنزلية ",
    span: "فرع الأمير سلطان",
  },
  {
    img: port8,
    id: "3",
    title: "معارض تمكين للأجهزة المنزلية ",
    span: "فرع الأمير سلطان",
  },
  {
    img: port9,
    id: "4",
    title: "معارض تمكين للأجهزة المنزلية ",
    span: "فرع الأمير سلطان",
  },
  {
    img: port10,
    id: "5",
    title: "مدارس واحة جدة",
  },
  {
    img: port11,
    id: "6",
    title: "مدارس واحة جدة ",
  },
  {
    img: port12,
    id: "8",
    title: "مدارس واحة جدة ",
  },
  {
    img: port13,
    id: "9",
    title: "مدارس واحة جدة ",
  },
  {
    img: port14,
    id: "10",
    title: "مركز الشعلة",
  },
  {
    img: port15,
    id: "11",
    title: "مركز الشعلة",
  },
  {
    img: port16,
    id: "12",
    title: "مركز الشعلة",
  },
]
const Portfolio = () => {
  const [activeSlide, setActiveSlide] = useState(0)

  const [activeOverlay, setActiveOverlay] = useState(null)

  const [t] = useTranslation()
  const toggleOverlay = (index) => {
    setActiveOverlay(activeOverlay === index ? null : index)
  }
  return (
    <>
      <section className={styles.services}>
        <Container>
          <Row>
            <Col lg="12" className={styles.title}>
              <span className="span-title">{t("portfolio-title")}</span>
              <h3 className="section-title">{t("portfolio-subtitle")}</h3>
            </Col>
          </Row>
        </Container>

        <Swiper
          onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
          centeredSlides={true}
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          id="portfolio"
          breakpoints={{
            2560: {
              slidesPerView: 3, // Set the number of slides to 1 for screens larger than 768 pixels
            },
            1440: {
              slidesPerView: 3, // Set the number of slides to 1 for screens larger than 768 pixels
            },
            1024: {
              slidesPerView: 3, // Set the number of slides to 1 for screens larger than 768 pixels
            },
            768: {
              slidesPerView: 1, // Set the number of slides to 1 for screens larger than 768 pixels
            },
            480: {
              slidesPerView: 1, // Set the number of slides to 1 for screens larger than 768 pixels
            },
            320: {
              slidesPerView: 1, // Set the number of slides to 1 for screens larger than 768 pixels
            },
          }}
        >
          {images.map((slide, index) => (
            <SwiperSlide key={slide.id} className={styles.slide}>
              <div
                className={styles.slideContainer}
                onClick={() => toggleOverlay(index)}
              >
                <img src={slide.img} alt="" />
                <div
                  className={`${styles.slideText} ${
                    index === activeSlide ? styles.active : ""
                  }`}
                >
                  <h5>{slide.title}</h5>
                  <span>{slide.span}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      <section>
        {/* <Container>
          <Row>
            <Col lg="12" className={styles.title}>
              <span className="span-title">TECHNICAL EXPART</span>
              <h3 className="section-title">OUR TECHNICAL EXPERTS</h3>
            </Col>
          </Row>

          <Row>
            <Col>
              <Swiper
                modules={[Navigation, Autoplay]}
                spaceBetween={30}
                slidesPerView={3}
                navigation
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  2560: {
                    slidesPerView: 3, // Set the number of slides to 1 for screens larger than 768 pixels
                  },
                  1440: {
                    slidesPerView: 3, // Set the number of slides to 1 for screens larger than 768 pixels
                  },
                  1024: {
                    slidesPerView: 3, // Set the number of slides to 1 for screens larger than 768 pixels
                  },
                  768: {
                    slidesPerView: 1, // Set the number of slides to 1 for screens larger than 768 pixels
                  },
                  480: {
                    slidesPerView: 1, // Set the number of slides to 1 for screens larger than 768 pixels
                  },
                  320: {
                    slidesPerView: 1, // Set the number of slides to 1 for screens larger than 768 pixels
                  },
                }}
                className={styles.swiper}
              >
                {persons.map((person) => (
                  <SwiperSlide key={person.id}>
                    <div className={styles.team}>
                      <div className={styles.wrapper}>
                        <div className={styles.wrapperImg}>
                          <img src={person.img} alt="" />
                        </div>

                        <div className={styles.inner}>
                          <a href="#" className={styles.name}>
                            <h5>{person.name}</h5>
                          </a>

                          <span className={styles.desig}>{person.desig}</span>

                          <div className={styles.infoWrapper}>
                            <div className={styles.single}>
                              <AiOutlineMail className={styles.icon} />

                              <a href="#">{person?.email}</a>
                            </div>

                            <div className={styles.single}>
                              <FiPhoneCall className={styles.icon} />

                              <a href="#">{person?.phone}</a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Col>
          </Row>
        </Container> */}

        <LatestProjects />
      </section>
    </>
  )
}

export default Portfolio
