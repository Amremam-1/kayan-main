import { Col, Container, NavLink, Row } from "react-bootstrap"
import { MdElectricBolt } from "react-icons/md"
import { MdOutlineEmail } from "react-icons/md"
import { IoLocationOutline } from "react-icons/io5"
import styles from "./styles.module.scss"
import { useState } from "react"
import { FiMenu } from "react-icons/fi"
import SideBar from "../sideBar/SideBar"
import logo from "../../assets/images/logo2.jpg"
const nav_Links = [
  {
    path: "#",
    display: "Careers",
  },
  {
    path: "#",
    display: "News & Media",
  },
  {
    path: "#",
    display: "Contact",
  },
]

// eslint-disable-next-line react-refresh/only-export-components
export const links = [
  { id: "#home", display: "Home" },
  { id: "#service", display: "Service" },
  { id: "#about", display: "About" },
  { id: "#portfolio", display: "Portfolio" },
  { id: "#blog", display: "Blog" },
  { id: "#contact", display: "Contact" },
]

const NavBar = () => {
  const [activeLink, setActiveLink] = useState(-1)
  const [isSideBarOpen, setSideBarOpen] = useState(false)

  const toggleSideBar = () => {
    setSideBarOpen(!isSideBarOpen)
  }

  const toggle = (index) => {
    setActiveLink(activeLink === index ? activeLink : index)
  }
  return (
    <>
      <header className={styles.header_one}>
        <div className={styles.header_top}>
          <Container>
            <Row>
              <Col lg="12">
                <div className={styles.header_top_wrapper}>
                  <div className={styles.left}>
                    <div className={styles.icon}>
                      <MdElectricBolt
                        color="#FF6600"
                        size="20px"
                        className="ms-3"
                      />
                      <p>Express delivery and free returns within 24 hours</p>
                    </div>
                  </div>
                  <div className={styles.right}>
                    <ul className={styles.menu}>
                      {nav_Links.map((item, index) => (
                        <li className={styles.nav_item} key={index}>
                          {item.display}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className={styles.header_mid}>
          <Container>
            <Row>
              <Col lg="12">
                <div className={styles.header_mid_one_wrapper}>
                  <div className={styles.logo_area}>
                    <img src={logo} alt="" />
                  </div>

                  <div className={styles.header_right}>
                    <div className={styles.single_component}>
                      <IoLocationOutline className={styles.icon_svg} />

                      <div className={styles.info}>
                        <span>Location</span>
                        <a href="#">Ghosn Al Salam, Al-Ruwais, Jeddah.</a>
                      </div>
                    </div>

                    <div className={styles.single_component}>
                      <MdOutlineEmail className={styles.icon_svg} />

                      <div className={styles.info}>
                        <span>Send Us Mail</span>
                        <a href="#">Hosny@kayanegypt.net</a>
                      </div>
                    </div>

                    <div className={styles.menuArea} onClick={toggleSideBar}>
                      <FiMenu className={styles.menuAreaIcon} />
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <div className={styles.header_sticky}>
          <Container>
            <Row>
              <Col lg="12">
                <div className={styles.nav_header}>
                  <div className={styles.clip_path}></div>
                  <div className={styles.wrapper}>
                    <div className={styles.main_nav}>
                      <nav>
                        <ul>
                          {links.map((item, index) => (
                            <li
                              className={`${styles.menu_item} ${
                                activeLink === index && styles.active
                              }`}
                              key={index}
                              onClick={() => toggle(index)}
                            >
                              <NavLink
                                href={item.id}
                                className={styles.nav_item}
                              >
                                {item.display}
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </header>

      <SideBar isOpen={isSideBarOpen} />
    </>
  )
}

export default NavBar
