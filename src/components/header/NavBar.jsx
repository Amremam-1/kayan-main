import { NavLink } from "react-bootstrap"

import { MdOutlineEmail } from "react-icons/md"
import styles from "./styles.module.scss"
import { useEffect, useRef, useState } from "react"
import { FiMenu } from "react-icons/fi"
import SideBar from "../sideBar/SideBar"
import logo from "../../../public/assets/images/logo2.jpg"
import { MdOutlineLanguage } from "react-icons/md"

import { useTranslation } from "react-i18next"

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

  const [t, il8next] = useTranslation()

  const headerRef = useRef(null)

  useEffect(() => {
    const headerSticky = () => {
      if (headerRef.current !== null)
        if (
          document.body.scrollTop > 179 ||
          document.documentElement.scrollTop > 179
        ) {
          headerRef.current.classList.add(styles.sticky)
        } else {
          headerRef.current.classList.remove(styles.sticky)
        }
    }

    window.addEventListener("scroll", headerSticky)

    return () => {
      window.removeEventListener("scroll", headerSticky)
    }
  })
  const toggleSideBar = () => {
    setSideBarOpen(!isSideBarOpen)
  }

  const toggle = (index) => {
    setActiveLink(activeLink === index ? activeLink : index)
  }
  return (
    <>
      <header className={styles.header_one}>
        <div className={styles.header_mid_one_wrapper}>
          <div className={styles.logo_area}>
            <img src={logo} alt="" />

            <div>
              <h3>{t("header-nameLogo")}</h3>
              <span>{t("header-descCompany")}</span>

              <p>
                C.R: <span className={styles.num}>4030423834</span>
              </p>

              <p>{t("haader-company-location")}</p>
            </div>
          </div>
          <div className={styles.header_right}>
            <div className={styles.single_component}>
              <MdOutlineEmail className={styles.icon_svg} />

              <div className={styles.info}>
                <span>{t("header-sendEmail")}</span>
                <a href="#">Hosny@kayanegypt.net</a>
              </div>
            </div>

            <div className={styles.language}>
              <MdOutlineLanguage className={styles.icon_lang} />

              <div className={styles.select}>
                <button
                  onClick={() => {
                    il8next.changeLanguage("ar")
                  }}
                >
                  العربيه
                </button>
                <div className={styles.line}></div>
                <button
                  onClick={() => {
                    il8next.changeLanguage("en")
                  }}
                >
                  English
                </button>
              </div>
            </div>

            <div className={styles.menuArea} onClick={toggleSideBar}>
              <FiMenu className={styles.menuAreaIcon} />
            </div>
          </div>
        </div>

        <div className={styles.header_sticky} ref={headerRef}>
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
                        <NavLink href={item.id} className={styles.nav_item}>
                          {item.display}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

      <SideBar isOpen={isSideBarOpen} />
    </>
  )
}

export default NavBar
