import styles from "./style/styles.module.scss"
import { Container, Row, Col } from "react-bootstrap"
import service01 from "../../assets/images/service01.jpg"
import service02 from "../../assets/images/service02.png"
import service03 from "../../assets/images/service03.png"
import service04 from "../../assets/images/service04.jpg"
import service05 from "../../assets/images/مدارس الامجاد 02.jpg"
import service06 from "../../assets/images/service06.jpg"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Autoplay } from "swiper/modules"
import { Pagination } from "swiper/modules"
import { useState } from "react"
import Modal from "./Model"

const servicesItems = [
  {
    image: service01,
    title: "CONSTRUCTION & CONSULTANCY",
    discription:
      "Modern building developments, advanced techniques, qualified engineers ensure safety and quality in projects.",
    content: "01",
    id: "one",
  },
  {
    image: service02,
    title: "INTERIOR  & EXTERIOR",
    discription:
      "Architecture blends creativity, technology, aesthetics, and functionality to enrich life and culture effectively.",
    content: "02",
    id: "two",
  },
  {
    image: service03,
    title: "DECORE & FURNITURE",
    discription:
      "Future world with antique, classic, and exclusive designs; unique collections of furniture and accessories.",
    content: "03",
    id: "three",
  },
  {
    image: service05,
    title: "LANDSCAPING",
    discription:
      "Landscaping transforms outdoor areas with design and cultivation for aesthetic appeal and functionality.",
    content: "04",
    id: "four",
  },
  {
    image: service04,
    title: "ART WOOD",
    discription:
      "Crafting beauty with precision, durability, and timeless elegance in woodworking",
    content: "05",
    id: "five",
  },
  {
    image: service06,
    title: "BUILDING MAINTENANCE",
    discription: "Ensuring longevity and functionality through regular upkeep.",
    content: "06",
    id: "six",
  },
]

const Services = () => {
  // eslint-disable-next-line no-unused-vars
  const [viewService, setViewService] = useState(null)
  const [showOverlay, setShowOverlay] = useState(false)

  const handleService = (index) => {
    setViewService(index)
    setShowOverlay(true)
  }

  const handleCloseOverlay = () => {
    setShowOverlay(false)
  }

  return (
    <section className={styles.services} id="service">
      <Container className={styles.services_container}>
        <Row>
          <Col lg="12" className="text-center p-5">
            <span className="span-title">OUR SERVICES</span>
            <h3 className="section-title">QUALITY SERVICING OPPORTUNITY</h3>
          </Col>
        </Row>
        <Row>
          <Swiper
            spaceBetween={20}
            slidesPerView={3}
            id="home"
            loop={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={true}
            modules={[Autoplay, Pagination]}
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
                slidesPerView: 2, // Set the number of slides to 1 for screens larger than 768 pixels
              },
              480: {
                slidesPerView: 1, // Set the number of slides to 1 for screens larger than 768 pixels
              },
              320: {
                slidesPerView: 1, // Set the number of slides to 1 for screens larger than 768 pixels
              },
            }}
          >
            {servicesItems.map((item, index) => (
              <SwiperSlide key={index} className={styles.bannerSlide}>
                <div className={styles.serviceCart}>
                  <div className={styles.serviceImg}>
                    <img src={item.image} alt="" />
                    <span className={styles.badge}>{item.content}</span>
                  </div>

                  <div className={styles.serviceItem}>
                    <h5>{item.title}</h5>
                    <p>{item.discription}</p>

                    <button
                      className={styles.btn}
                      onClick={() => handleService(index)}
                    >
                      View Service
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}

            {showOverlay && (
              <div className={styles.overlay}>
                <Modal handleCloseOverlay={handleCloseOverlay} />
              </div>
            )}
          </Swiper>
        </Row>
      </Container>
    </section>
  )
}

export default Services
