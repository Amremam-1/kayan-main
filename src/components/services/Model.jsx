import { useState } from "react"
import "./style/styles.css"
import Carousel from "react-bootstrap/Carousel"
import { FaRegTimesCircle } from "react-icons/fa"

const services = [
  {
    title: "CONSTRUCTION & CONSULTANCY",
    discription:
      "Modern building developments, advanced techniques, qualified engineers ensure safety and quality in projects.",
    id: "one",
    images: [
      "/src/assets/images/Picture48.jpg",
      "/src/assets/images/Picture143.jpg",
      "/src/assets/images/Picture144.jpg",
      "/src/assets/images/Picture152.jpg",
    ],
  },
  {
    title: "INTERIOR  & EXTERIOR",
    discription:
      "Architecture blends creativity, technology, aesthetics, and functionality to enrich life and culture effectively.",
    id: "two",
    images: [
      "/src/assets/images/11.jpg",
      "/src/assets/images/22.jpg",
      "/src/assets/images/33.jpg",
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
    ],
  },
  {
    title: "BUILDING MAINTENANCE",
    discription: "Ensuring longevity and functionality through regular upkeep.",
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

// eslint-disable-next-line react/prop-types
const Modal = ({ handleCloseOverlay }) => {
  const [modalActive, setModalActive] = useState(false)
  const [selectedService, setSelectedService] = useState(null)

  const handleButtonClick = (service) => {
    setModalActive(true)
    setSelectedService(service)
    document.getElementById("modal-container").className = service.id
    document.body.classList.add("modal-active")
    document.body.style.overflow = "hidden" // تعطيل التمرير
  }

  const handleModalClick = () => {
    setModalActive(false)
    document.getElementById("modal-container").classList.add("out")
    document.body.classList.remove("modal-active")
    document.body.style.overflow = "auto" // إعادة تمكين التمرير
  }

  return (
    <div>
      <div id="modal-container" className={modalActive ? "modal-active" : ""}>
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
                    <Carousel>
                      {selectedService.images.map((image, index) => (
                        // eslint-disable-next-line react/jsx-key
                        <Carousel.Item>
                          <div className="slideContainer">
                            <img src={image} alt={`Slide ${index + 1}`} />
                          </div>
                        </Carousel.Item>
                      ))}
                    </Carousel>

                    <button className="closeicon" onClick={handleModalClick}>
                      <FaRegTimesCircle className="icon" />
                    </button>
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
