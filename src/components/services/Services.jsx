import styles from "./style/styles.module.scss"
import { Container, Row, Col } from "react-bootstrap"
import service01 from "../../assets/images/service01.jpg"
import service02 from "../../assets/images/service02.png"
import service03 from "../../assets/images/service03.png"
import service04 from "../../assets/images/service04.jpg"
import service05 from "../../assets/images/Picture168.png"
import service06 from "../../assets/images/service06.jpg"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination, Autoplay } from "swiper/modules"

const servicesItems = [
  {
    image: service01,
    title: "CONSTRUCTION & CONSULTANCY",
    discription:
      "Modern building developments, advanced techniques, qualified engineers ensure safety and quality in projects.",
    content: "01",
    id: "one",
    images: [
      "/src/assets/images/Picture48.jpg",
      "/src/assets/images/Picture143.jpg",
      "/src/assets/images/Picture144.jpg",
      "/src/assets/images/Picture152.jpg",
    ],
  },
  {
    image: service02,
    title: "INTERIOR  & EXTERIOR",
    discription:
      "Architecture blends creativity, technology, aesthetics, and functionality to enrich life and culture effectively.",
    content: "02",
    id: "two",
    images: [
      "/src/assets/images/11.jpg",
      "/src/assets/images/22.jpg",
      "/src/assets/images/33.jpg",
    ],
  },
  {
    image: service03,
    title: "DECORE & FURNITURE",
    discription:
      "Future world with antique, classic, and exclusive designs; unique collections of furniture and accessories.",
    content: "03",
    id: "three",
    images: [
      "/src/assets/images/muslam-01.jpg",
      "/src/assets/images/muslam02.jpg",
      "/src/assets/images/muslam04.jpg",
    ],
  },
  {
    image: service05,
    title: "LANDSCAPING",
    discription:
      "Landscaping transforms outdoor areas with design and cultivation for aesthetic appeal and functionality.",
    content: "04",
    id: "four",
    images: [
      "/src/assets/images/شعله (1).jpg",
      "/src/assets/images/شعله (2).jpg",
      "/src/assets/images/شعله (3).jpg",
    ],
  },
  {
    image: service04,
    title: "ART WOOD",
    discription:
      "Crafting beauty with precision, durability, and timeless elegance in woodworking",
    content: "05",
    id: "five",
    images: [
      "/src/assets/images/مدارس واحة جدة 01  .jpg",
      "/src/assets/images/مدارس واحة جدة 02  .jpg",
      "/src/assets/images/مدارس واحة جدة 03  .jpg",
      "/src/assets/images/مدارس واحة جدة 04  .jpg",
    ],
  },
  {
    image: service06,
    title: "BUILDING MAINTENANCE",
    discription: "Ensuring longevity and functionality through regular upkeep.",
    content: "06",
    id: "six",
    images: [
      "/src/assets/images/Picture163.jpg",
      "/src/assets/images/Picture164.png",
      "/src/assets/images/Picture165.png",
      "/src/assets/images/Picture166.png",
      "/src/assets/images/Picture167.png",
      "/src/assets/images/Picture168.png",
      "/src/assets/images/Picture169.png",
    ],
  },
]

const Services = () => {
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
            pagination={true}
            modules={[Pagination]}
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
                  <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                      delay: 4000,
                      disableOnInteraction: false,
                    }}
                    pagination={true}
                    initialSlide={0}
                    touch={true} // تمكين التحكم باللمس
                    style={{ width: "100%", height: "300px" }}
                    modules={[Pagination, Autoplay]}
                  >
                    {item.images.map((image, index) => (
                      <SwiperSlide key={index}>
                        <img
                          src={image}
                          alt=""
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                            borderRadius: "5px",
                          }}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                  <div className={styles.serviceItem}>
                    <h5>{item.title}</h5>
                    <p>{item.discription}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </Row>
      </Container>
    </section>
  )
}

export default Services
