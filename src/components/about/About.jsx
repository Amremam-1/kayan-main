import { Container, Row, Col } from "react-bootstrap"
import styles from "./styles.module.scss"
import service04 from "../../../public/assets/images/ser45.jpg"
import { FaArrowRight } from "react-icons/fa"
import { FaArrowDown } from "react-icons/fa"
import { useState } from "react"
import { FaCheck } from "react-icons/fa"
import { useTranslation } from "react-i18next"

const About = () => {
  const [t] = useTranslation()
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
            <p className={styles.disc}>{t("About-aboutcontant")}</p>

            <div className={styles.jurney}>
              <div>
                <div className={styles.left}>
                  <h3 className={styles.titleAnimated}>
                    <span>73</span>
                  </h3>

                  <span className={styles.sub}>{t("AboutStarted")}</span>
                </div>

                <div className={styles.right}>
                  <div className={styles.single}>
                    <span>{t("About-feature1")}</span>
                    <FaCheck className={styles.icon} />
                  </div>
                  <div className={styles.single}>
                    <span>{t("About-feature2")}</span>
                    <FaCheck className={styles.icon} />
                  </div>
                  <div className={styles.single}>
                    <span>{t("About-feature3")}</span>
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
            <p className={styles.disc}>{t("About-visioncontant")}</p>
            <div className={styles.jurney}>
              <div>
                <div className={styles.left}>
                  <h3 className={styles.titleAnimated}>
                    <span>73</span>
                  </h3>

                  <span className={styles.sub}>{t("AboutStarted")}</span>
                </div>
                <div className={styles.right}>
                  <div className={styles.single}>
                    <span>{t("About-feature1")}</span>
                    <FaCheck className={styles.icon} />
                  </div>
                  <div className={styles.single}>
                    <span>{t("About-feature2")}</span>
                    <FaCheck className={styles.icon} />
                  </div>
                  <div className={styles.single}>
                    <span>{t("About-feature3")}</span>
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
            <p className={styles.disc}>{t("About-values")}</p>
            <div className={styles.jurney_left}>
              <div>
                <div className={styles.left}>
                  <h3 className={styles.titleAnimated}>
                    <span>4030423834</span>
                  </h3>

                  <span className={styles.sub}>
                    {t("About-CommercialRegistration")}
                  </span>
                </div>
              </div>
              <div>
                <div className={styles.left}>
                  <h3 className={styles.titleAnimated}>
                    <span>411898</span>
                  </h3>

                  <span className={styles.sub}>
                    {t("ChamberOfCommerceRegistration")}
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
                      {t("About-content")}
                      <br />
                      {t("About-content-1")}
                      {viewText === Infinity ? (
                        <>{t("About-content-2")}</>
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
                      {t("About-readmore")}
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
                        {t("about-btn1")}
                      </button>
                    </li>
                    <li className={styles.navItem}>
                      <button
                        className={`${styles.navLink} ${
                          activeButton === "Vision" ? styles.active : ""
                        }`}
                        onClick={() => handleButton("Vision")}
                      >
                        {t("about-btn2")}
                      </button>
                    </li>
                    <li className={styles.navItem}>
                      <button
                        className={`${styles.navLink} ${
                          activeButton === "Values" ? styles.active : ""
                        }`}
                        onClick={() => handleButton("Values")}
                      >
                        {t("about-btn3")}
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
