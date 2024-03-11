import styles from "./style/styles.module.scss"
import { Container, Row, Col } from "react-bootstrap"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination, Autoplay } from "swiper/modules"

const servicesItems = [
  {
    title: "CONSTRUCTION",
    discription:
      "Modern building developments, advanced techniques, qualified engineers ensure safety and quality in projects.",
    content: "01",
    id: "one",
    // images: [
    //   "/assets/images/Picture143.jpg",
    //   "/assets/images/Picture144.jpg",
    //   "/assets/images/Picture152.jpg",
    // ],
  },
  {
    title: "INTERIOR",
    discription:
      "Architecture blends creativity, technology, aesthetics, and functionality to enrich life and culture effectively.",
    content: "02",
    id: "two",
    // images: [
    //   "/assets/images/11.jpg",
    //   "/assets/images/22.jpg",
    //   "/assets/images/33.jpg",
    // ],
  },
  {
    title: "DECORE",
    discription:
      "Future world with antique, classic, and exclusive designs; unique collections of furniture and accessories.",
    content: "03",
    id: "three",
    // images: [
    //   "/assets/images/muslam-01.jpg",
    //   "/assets/images/muslam02.jpg",
    //   "/assets/images/muslam04.jpg",
    // ],
  },
  {
    title: "LANDSCAPING",
    discription:
      "Landscaping transforms outdoor areas with design and cultivation for aesthetic appeal and functionality.",
    content: "04",
    id: "four",
    // images: [
    //   "/assets/images/شعله (1).jpg",
    //   "/assets/images/شعله (2).jpg",
    //   "/assets/images/شعله (3).jpg",
    // ],
  },
  {
    title: "ART WOOD",
    discription:
      "Crafting beauty with precision, durability, and timeless elegance in woodworking",
    content: "05",
    id: "five",
    // images: [
    //   "/assets/images/مدارس واحة جدة 01  .jpg",
    //   "/assets/images/مدارس واحة جدة 02  .jpg",
    //   "/assets/images/مدارس واحة جدة 03  .jpg",
    //   "/assets/images/مدارس واحة جدة 04  .jpg",
    // ],
  },
  {
    title: "BUILDING MAINTENANCE",
    discription: "Ensuring longevity and functionality through regular upkeep.",
    content: "06",
    id: "six",
    // images: ["/assets/images/Picture166.png"],
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
                slidesPerView: 3,
              },
              1440: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 2,
              },
              480: {
                slidesPerView: 1,
              },
              320: {
                slidesPerView: 1,
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
                      delay: 10000,
                      disableOnInteraction: false,
                    }}
                    pagination={true}
                    initialSlide={0}
                    touch={true}
                    // style={{ width: "100%", height: "300px" }}
                    modules={[Pagination, Autoplay]}
                  >
                    {/* {item.images.map((image, index) => (
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
                    ))} */}
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
