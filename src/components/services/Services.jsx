import styles from "./style/styles.module.scss"
import { Container, Row, Col } from "react-bootstrap"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination, Autoplay } from "swiper/modules"
import { useTranslation } from "react-i18next"
import { useEffect, useState } from "react"

const servicesItems = [
  {
    titleEn: "CONSTRUCTION",
    titleAr: "البناء",
    discriptionEn:
      "Modern building developments, advanced techniques, qualified engineers ensure safety and quality in projects.",
    discriptionAr:
      "تطويرات البناء الحديثة، وتقنيات متقدمة، ومهندسون مؤهلون يضمنون السلامة والجودة في المشاريع.",
    content: "01",
    id: "one",
    // images: [
    //   "/assets/images/Picture143.jpg",
    //   "/assets/images/Picture144.jpg",
    //   "/assets/images/Picture152.jpg",
    // ],
  },
  {
    titleEn: "INTERIOR",
    titleAr: "تصميم الديكور الداخلي",
    discriptionEn:
      "Architecture blends creativity, technology, aesthetics, and functionality to enrich life and culture effectively.",
    discriptionAr:
      "الهندسة المعمارية تمزج بين الإبداع والتكنولوجيا والجمالية والوظيفية لإثراء الحياة والثقافة بفعالية",
    content: "02",
    id: "two",
    // images: [
    //   "/assets/images/11.jpg",
    //   "/assets/images/22.jpg",
    //   "/assets/images/33.jpg",
    // ],
  },
  {
    titleEn: "DECORE",
    titleAr: "ديكور",
    discriptionEn:
      "Future world with antique, classic, and exclusive designs; unique collections of furniture and accessories.",
    discriptionAr:
      "عالم مستقبلي مع تصاميم أثرية وكلاسيكية وحصرية؛ مجموعات فريدة من الأثاث والإكسسوارات",
    content: "03",
    id: "three",
    // images: [
    //   "/assets/images/muslam-01.jpg",
    //   "/assets/images/muslam02.jpg",
    //   "/assets/images/muslam04.jpg",
    // ],
  },
  {
    titleEn: "LANDSCAPING",
    titleAr: "تنسيق الحدائق",
    discriptionEn:
      "Landscaping transforms outdoor areas with design and cultivation for aesthetic appeal and functionality.",
    discriptionAr:
      "يُحول تنسيق الحدائق المساحات الخارجية بتصميمها وزراعتها للجاذبية الجمالية والوظيفية.",
    content: "04",
    id: "four",
    // images: [
    //   "/assets/images/شعله (1).jpg",
    //   "/assets/images/شعله (2).jpg",
    //   "/assets/images/شعله (3).jpg",
    // ],
  },
  {
    titleEn: "ART WOOD",
    titleAr: "فن الخشب",
    discriptionEn:
      "Crafting beauty with precision, durability, and timeless elegance in woodworking",
    discriptionAr:
      "صياغة الجمال بالدقة والمتانة والأناقة الخالدة في فن النجارة",
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
    titleEn: "BUILDING MAINTENANCE",
    titleAr: "صيانة المباني",
    discriptionEn:
      "Ensuring longevity and functionality through regular upkeep.",
    discriptionAr:
      "تضمن الاستمرارية والوظيفية من خلال الصيانة المنتظمة والمنتجة",
    content: "06",
    id: "six",
    // images: ["/assets/images/Picture166.png"],
  },
]

const Services = () => {
  const [pageDirection, setPageDirection] = useState("ltr")
  const [t, il8n] = useTranslation()

  useEffect(() => {
    setPageDirection(il8n.language === "ar" ? "rtl" : "ltr")
  }, [il8n.language])

  return (
    <section className={styles.services} id="service">
      <Container className={styles.services_container}>
        <Row>
          <Col lg="12" className="text-center p-5">
            <span className="span-title">{t("Service-title")}</span>
            <h3 className="section-title">{t("Service-subTitle")}</h3>
          </Col>
        </Row>
        <Row>
          <Swiper
            spaceBetween={20}
            slidesPerView={3}
            id="home"
            loop={true}
            pagination={true}
            modules={[Pagination, Autoplay]}
            autoplay={{ delay: 2000 }}
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
                <div
                  className={styles.serviceCart}
                  style={{ direction: pageDirection }}
                >
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
                    <h5>
                      {il8n.language === "ar" ? item.titleAr : item.titleEn}
                    </h5>
                    <p>
                      {il8n.language === "ar"
                        ? item.discriptionAr
                        : item.discriptionEn}
                    </p>
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
