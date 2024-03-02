import { useState } from "react"
import "./style/styles.css"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"

import { Autoplay, Pagination, Navigation } from "swiper/modules"

const services = [
  {
    title: "CONSTRUCTION & CONSULTANCY",
    discription:
      "Modern building developments, advanced techniques, qualified engineers ensure safety and quality in projects.",
    id: "one",
    images: [
      "/src/assets/images/Picture48.jpg",
      "/src/assets/images/Picture49.jpg",
      "/src/assets/images/Picture50.jpg",
      "/src/assets/images/Picture51.png",
      "/src/assets/images/Picture52.jpg",
      "/src/assets/images/Picture53.jpg",
      "/src/assets/images/Picture54.jpg",
      "/src/assets/images/Picture55.jpg",
      "/src/assets/images/Picture56.jpg",
      "/src/assets/images/Picture57.jpg",
      "/src/assets/images/Picture58.jpg",
    ],
  },
  {
    title: "INTERIOR  & EXTERIOR",
    discription:
      "Architecture blends creativity, technology, aesthetics, and functionality to enrich life and culture effectively.",
    id: "two",
    images: [
      "/src/assets/images/desginintro.jpg",
      "/src/assets/images/desginintro02.jpg",
      "/src/assets/images/desginintro03.jpg",
      "/src/assets/images/desginintro04.jpg",
      "/src/assets/images/desginintro05.jpg",
      "/src/assets/images/desginintro06.jpg",
    ],
  },
  {
    title: "DECORE & FURNITURE",
    discription:
      "Future world with antique, classic, and exclusive designs; unique collections of furniture and accessories.",
    id: "three",
    images: [
      "/src/assets/images/muslam-01.jpg",
      "/src/assets/images/muslam02.jpg",
      "/src/assets/images/muslam03.jpg",
      "/src/assets/images/muslam04.jpg",
    ],
  },
  {
    title: "LANDSCAPING",
    discription:
      "Landscaping transforms outdoor areas with design and cultivation for aesthetic appeal and functionality.",
    id: "four",
    images: [
      "/src/assets/images/شعله (1).jpg",
      "/src/assets/images/شعله (2).jpg",
      "/src/assets/images/شعله (3).jpg",
    ],
  },
  {
    title: "ART WOOD",
    discription:
      "Crafting beauty with precision, durability, and timeless elegance in woodworking",
    id: "five",
    images: [
      "/src/assets/images/مدارس واحة جدة 01  .jpg",
      "/src/assets/images/مدارس واحة جدة 02  .jpg",
      "/src/assets/images/مدارس واحة جدة 03  .jpg",
      "/src/assets/images/مدارس واحة جدة 04  .jpg",
      "/src/assets/images/مدارس واحة جدة 05  .jpg",
      "/src/assets/images/مدارس واحة جدة 06  .jpg",
    ],
  },
  {
    title: "BUILDING MAINTENANCE",
    discription: "Ensuring longevity and functionality through regular upkeep.",
    id: "six",
    images: [
      "/src/assets/images/مدارس الامجاد 01.jpg",
      "/src/assets/images/مدارس الامجاد 02.jpg",
      "/src/assets/images/مدارس الامجاد 03.jpg",
      "/src/assets/images/مدارس الامجاد 04.jpg",
      "/src/assets/images/مدارس الامجاد 05.jpg",
      "/src/assets/images/مدارس الامجاد 06.jpg",
    ],
  },
]

// eslint-disable-next-line react/prop-types
const Modal = ({ handleCloseOverlay }) => {
  const [modalActive, setModalActive] = useState(false)
  const [selectedService, setSelectedService] = useState(null)

  const handleButtonClick = (service) => {
    setModalActive(true)
    setSelectedService(service)
    document.getElementById("modal-container").className = service.id
    document.body.classList.add("modal-active")
  }

  const handleModalClick = () => {
    setModalActive(false)
    document.getElementById("modal-container").classList.add("out")
    document.body.classList.remove("modal-active")
  }

  return (
    <div>
      <div
        id="modal-container"
        className={modalActive ? "modal-active" : ""}
        onClick={handleModalClick}
      >
        <div className="modal-background">
          <div className="modal">
            <div className="container">
              {selectedService && (
                <>
                  <div>
                    <h1>{selectedService.title}</h1>
                    <p>{selectedService.discription}</p>
                  </div>

                  <div className="images">
                    <Swiper
                      spaceBetween={30}
                      slidesPerView={1}
                      slidev
                      centeredSlides={true}
                      autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                      }}
                      pagination={{
                        clickable: true,
                      }}
                      navigation={true}
                      modules={[Autoplay, Pagination, Navigation]}
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
                      className="mySwiper"
                    >
                      {selectedService.images.map((image, index) => (
                        <SwiperSlide key={index} className="slide">
                          <div className="slideContainer">
                            <img src={image} alt={`Slide ${index + 1}`} />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <h1>Services Of Kayan</h1>
        <span className="close" onClick={handleCloseOverlay}>
          <p>X</p>
        </span>
        <div className="buttons">
          {services.map((item, index) => (
            <div
              key={index}
              id={item.id}
              className="button"
              onClick={() => handleButtonClick(item)}
            >
              {item.title}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Modal
