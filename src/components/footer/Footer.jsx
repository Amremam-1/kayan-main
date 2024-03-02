import {
  FaFacebookF,
  FaLinkedinIn,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa"
import { TbArrowBigRightFilled } from "react-icons/tb"
import { HiOutlineMail } from "react-icons/hi"
import { FaLocationDot } from "react-icons/fa6"
import { Container, Row } from "react-bootstrap"
import logo from "../../assets/images/logo2.jpg"

import styles from "./styles.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <Container>
          <Row>
            <div className={styles.subscribe}>
              <div className={styles.logo}>
                <img src={logo} alt="logo" />
              </div>
            </div>
            <div className={styles.links}>
              <div className={styles.box}>
                <h3 className={styles.fTitle}>ABOUT COMPANY</h3>
                <p className={styles.fText}>
                  Dedication, professionalism, honesty, fairness in all
                  interactions, ensuring integrity, trust, and transparency in
                  relationships.
                </p>
                <div className={styles.social}>
                  <a href="#">
                    <FaFacebookF />
                  </a>
                  <a href="#">
                    <FaTwitter />
                  </a>
                  <a href="#">
                    <FaYoutube />
                  </a>
                  <a href="#">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
              <div className={styles.box}>
                <div className={styles.linksList}>
                  <h3 className={styles.fTitle}>USEFUL LINKS</h3>
                  <ul className={styles.fList}>
                    <li className={styles.fItem}>
                      <a href="#about">
                        <TbArrowBigRightFilled />
                        <span>About Us</span>
                      </a>
                    </li>
                    <li className={styles.fItem}>
                      <a href="#service">
                        <TbArrowBigRightFilled />
                        <span>Our Services</span>
                      </a>
                    </li>
                    <li className={styles.fItem}>
                      <a href="#portfolio">
                        <TbArrowBigRightFilled />
                        <span>Our Team</span>
                      </a>
                    </li>
                    <li className={styles.fItem}>
                      <a href="#contact">
                        <TbArrowBigRightFilled />
                        <span>Contact Us</span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className={styles.linksList}>
                  <h3 className={styles.fTitle}>CONTACT US</h3>
                  <ul className={styles.fList}>
                    <li className={styles.fItem}>
                      <a href="#">
                        <div className={styles.icon}>
                          <FaPhoneAlt />
                        </div>
                        <span>+ 966 545831834</span>
                      </a>
                    </li>
                    <li className={styles.fItem}>
                      <a href="#">
                        <div className={styles.icon}>
                          <FaPhoneAlt />
                        </div>
                        <span>+ 20 1155668600</span>
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
                        <span>
                          Ghosn Al Salam,
                          <br />
                          Al-Ruwais, Jeddah.
                        </span>
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
          <p>Copyright 2024 Kayan Egypt . All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
