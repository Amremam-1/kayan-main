import { Container, Row, Col } from "react-bootstrap"
import styles from "./styles.module.scss"
import service04 from "../../assets/images/ser4.jpg"
import { FaArrowRight } from "react-icons/fa"
import { FaArrowDown } from "react-icons/fa"
import { useState } from "react"
import { FaCheck } from "react-icons/fa"

const About = () => {
  const [viewIcon, setViewIcon] = useState(false)
  const [viewText, setviewText] = useState(8)

  const handleIcon = () => {
    setViewIcon(!viewIcon)
  }

  const toggle = () => {
    setviewText((prevState) => {
      return prevState === Infinity ? 8 : Infinity
    })
  }

  const [activeButton, setActiveButton] = useState("About")

  const handleButton = (buttonName) => {
    setActiveButton(buttonName)
  }

  const getDynamicContent = () => {
    switch (activeButton) {
      case "About":
        return (
          <>
            <p className={styles.disc}>
              Building & Construction is one of the trustworthy construction
              firms located in Jeddah . We are a company that provides
              high-quality construction services & products . With our
              commitment to do our best , we have established strong
              relationships with our clients .
            </p>

            <div className={styles.jurney}>
              <div>
                <div className={styles.left}>
                  <h3 className={styles.titleAnimated}>
                    <span>3526</span>
                  </h3>

                  <span className={styles.sub}>STARTED JOURNEY</span>
                </div>

                <div className={styles.right}>
                  <div className={styles.single}>
                    <span>Emerjency solution anytime</span>
                    <FaCheck className={styles.icon} />
                  </div>
                  <div className={styles.single}>
                    <span>Affordable price upto 2 years</span>
                    <FaCheck className={styles.icon} />
                  </div>
                  <div className={styles.single}>
                    <span>Reliable & Experienced Team</span>
                    <FaCheck className={styles.icon} />
                  </div>
                </div>
              </div>
            </div>
          </>
        )
      case "Vision":
        return (
          <>
            <p className={styles.disc}>
              To grow by continually providing useful and significant products,
              services, and solutions to markets we already serve – and to
              expand into new areas that build on our competencies and customer
              interests
            </p>
            <div className={styles.jurney}>
              <div>
                <div className={styles.left}>
                  <h3 className={styles.titleAnimated}>
                    <span>2026</span>
                  </h3>

                  <span className={styles.sub}>STARTED JOURNEY</span>
                </div>
                <div className={styles.right}>
                  <div className={styles.single}>
                    <span>Emerjency solution anytime</span>
                    <FaCheck className={styles.icon} />
                  </div>
                  <div className={styles.single}>
                    <span>Affordable price upto 2 years</span>
                    <FaCheck className={styles.icon} />
                  </div>
                  <div className={styles.single}>
                    <span>Reliable & Experienced Team</span>
                    <FaCheck className={styles.icon} />
                  </div>
                </div>
              </div>
            </div>
          </>
        )
      case "Values":
        return (
          <>
            <p className={styles.disc}>
              We are focusing on setting our values with great responsibility &
              dedication in every deal & offer we get into. Through maintaining
              the highest level of professionalism, honesty, and fairness in our
              relationships with our customers, employees, and vendors.
            </p>
            <div className={styles.jurney_left}>
              <div>
                <div className={styles.left}>
                  <h3 className={styles.titleAnimated}>
                    <span>4030423834</span>
                  </h3>

                  <span className={styles.sub}>Commercial Registration</span>
                </div>
              </div>
              <div>
                <div className={styles.left}>
                  <h3 className={styles.titleAnimated}>
                    <span>411898</span>
                  </h3>

                  <span className={styles.sub}>
                    Chamber Of Commerce Registration
                  </span>
                </div>
              </div>
            </div>
          </>
        )
      default:
        return null
    }
  }

  return (
    <section>
      <Container id="about">
        <Row>
          <Col lg="12">
            <div className={styles.wrapper}>
              <div className={styles.wrapperImg}>
                <div>
                  <img src={service04} alt="" />

                  <div className={styles.detail}>
                    <h5>
                      Commitment builds lasting trust
                      <br />
                      fostering strong client relationships ...
                      {viewText === Infinity ? (
                        <>
                          Through our commitment to excellence, we have forged
                          robust client relationships, ensuring mutual trust and
                          satisfaction.
                        </>
                      ) : null}
                    </h5>

                    <a
                      href=""
                      onClick={(event) => {
                        event.preventDefault()
                        toggle()
                        handleIcon()
                      }}
                    >
                      Read More
                      <p>
                        {viewIcon ? (
                          <FaArrowDown className={styles.icon} />
                        ) : (
                          <FaArrowRight className={styles.icon} />
                        )}
                      </p>
                    </a>
                  </div>
                </div>
              </div>

              <div className={styles.wrapperInfo}>
                <div className={styles.start}>
                  <ul className={styles.nav}>
                    <li className={styles.navItem}>
                      <button
                        className={`${styles.navLink} ${
                          activeButton === "About" ? styles.active : ""
                        }`}
                        onClick={() => handleButton("About")}
                      >
                        About
                      </button>
                    </li>
                    <li className={styles.navItem}>
                      <button
                        className={`${styles.navLink} ${
                          activeButton === "Vision" ? styles.active : ""
                        }`}
                        onClick={() => handleButton("Vision")}
                      >
                        Vision
                      </button>
                    </li>
                    <li className={styles.navItem}>
                      <button
                        className={`${styles.navLink} ${
                          activeButton === "Values" ? styles.active : ""
                        }`}
                        onClick={() => handleButton("Values")}
                      >
                        Values
                      </button>
                    </li>
                  </ul>

                  <div className={styles.tapContent}>{getDynamicContent()}</div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default About
