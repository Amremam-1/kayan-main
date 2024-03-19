import { FaFacebookF, FaPhoneAlt, FaTwitter } from "react-icons/fa"
import { TbArrowBigRightFilled, TbArrowBigLeftFilled } from "react-icons/tb"
import { FaInstagram } from "react-icons/fa6"
import { FaSnapchat } from "react-icons/fa6"

import { HiOutlineMail } from "react-icons/hi"
import { FaLocationDot } from "react-icons/fa6"
import { Container, Row } from "react-bootstrap"
import logo from "../../../public/assets/images/logo2.jpg"

import styles from "./styles.module.scss"
import { useTranslation } from "react-i18next"
import { useState, useEffect } from "react"

const Footer = () => {
  const [t, il8n] = useTranslation()
  const [pageDiraction, setPageDirection] = useState("ltr")

  useEffect(() => {
    setPageDirection(il8n.language === "ar" ? "rtl" : "ltr")
  }, [il8n.language])

  const date = new Date().getFullYear()

  return (
    <footer className={styles.footer} id="footer">
      <div className={styles.container} style={{ direction: pageDiraction }}>
        <Container>
          <Row>
            <div className={styles.subscribe}>
              <div className={styles.logo}>
                <img src={logo} alt="logo" />
              </div>
            </div>
            <div className={styles.links}>
              <div className={styles.box}>
                <h3 className={styles.fTitle}>{t("footer-about-title")}</h3>
                <p className={styles.fText}>{t("footer-about-desc")}</p>
                <div className={styles.social}>
                  <a href="https://www.facebook.com/profile.php?id=61556560361690">
                    <FaFacebookF />
                  </a>
                  <a href="https://x.com/kayanegypt_?s=21">
                    <FaTwitter />
                  </a>
                  <a href="https://www.instagram.com/egyptkayan05?igsh=MjhzN3YyZDI2anpj">
                    <FaInstagram />
                  </a>
                  <a href="https://t.snapchat.com/DpQEvHuT">
                    <FaSnapchat />
                  </a>
                </div>
              </div>
              <div className={styles.box}>
                <div className={styles.linksList}>
                  <h3 className={styles.fTitle}>{t("footer-useful")}</h3>
                  <ul className={styles.fList}>
                    <li className={styles.fItem}>
                      <a href="#about">
                        {il8n.language === "ar" ? (
                          <div className={styles.icon}>
                            <TbArrowBigLeftFilled />
                          </div>
                        ) : (
                          <div className={styles.icon}>
                            <TbArrowBigRightFilled className={styles.icon} />
                          </div>
                        )}
                        <span>{t("footer-link-about")}</span>
                      </a>
                    </li>
                    <li className={styles.fItem}>
                      <a href="#service">
                        {il8n.language === "ar" ? (
                          <div className={styles.icon}>
                            <TbArrowBigLeftFilled />
                          </div>
                        ) : (
                          <div className={styles.icon}>
                            <TbArrowBigRightFilled className={styles.icon} />
                          </div>
                        )}
                        <span>{t("footer-link-service")}</span>
                      </a>
                    </li>
                    <li className={styles.fItem}>
                      <a href="#portfolio">
                        {il8n.language === "ar" ? (
                          <div className={styles.icon}>
                            <TbArrowBigLeftFilled />
                          </div>
                        ) : (
                          <div className={styles.icon}>
                            <TbArrowBigRightFilled className={styles.icon} />
                          </div>
                        )}
                        <span>{t("footer-link-team")}</span>
                      </a>
                    </li>
                    <li className={styles.fItem}>
                      <a href="#contact">
                        {il8n.language === "ar" ? (
                          <div className={styles.icon}>
                            <TbArrowBigLeftFilled />
                          </div>
                        ) : (
                          <div className={styles.icon}>
                            <TbArrowBigRightFilled className={styles.icon} />
                          </div>
                        )}
                        <span>{t("footer-link-contact")}</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className={styles.linksList}>
                  <h3 className={styles.fTitle}>{t("footer-link-contact")}</h3>
                  <ul className={styles.fList}>
                    <li className={styles.fItem}>
                      <a href="#">
                        <div className={styles.icon}>
                          <FaPhoneAlt />
                        </div>
                        <span>+966 12 422 2014</span>
                      </a>
                    </li>
                    <li className={styles.fItem}>
                      <a href="#">
                        <div className={styles.icon}>
                          <HiOutlineMail />
                        </div>
                        <span>Hosny@kayanegypt.net</span>
                      </a>
                    </li>
                    <li className={styles.fItem}>
                      <a href="#">
                        <div className={styles.icon}>
                          <FaLocationDot />
                        </div>
                        <span>{t("footer-location")}</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Row>
        </Container>
      </div>
      <div className={styles.copyRights}>
        <div className="mainContainer">
          <p>
            {t("footer-copyRight")} {date}
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
