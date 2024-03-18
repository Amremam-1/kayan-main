import { NavLink } from "react-bootstrap"

import { MdOutlineEmail } from "react-icons/md"
import styles from "./styles.module.scss"
import { useEffect, useRef, useState } from "react"
import { FiMenu } from "react-icons/fi"
import SideBar from "../sideBar/SideBar"
import logo from "../../../public/assets/images/logo2.jpg"
import { MdOutlineLanguage } from "react-icons/md"

import { useTranslation } from "react-i18next"

const links = [
  { id: "#home", nameEN: "Home", nameAR: "الرئيسية" },
  { id: "#service", nameEN: "Service", nameAR: "خدمتنا" },
  { id: "#about", nameEN: "About", nameAR: "حولنا" },
  { id: "#portfolio", nameEN: "Portfolio", nameAR: "اعمالنا" },
  { id: "#blog", nameEN: "Blog", nameAR: "الرؤية" },
  { id: "#contact", nameEN: "Contact", nameAR: "اتصل بنا" },
]

const NavBar = () => {
  const [activeLink, setActiveLink] = useState(-1)
  const [isSideBarOpen, setSideBarOpen] = useState(false)
  const [t, il8n] = useTranslation()
  const headerRef = useRef(null)
  const [pageDirection, setPageDirection] = useState("ltr")

  useEffect(() => {
    // تحديث اتجاه الصفحة عند تغيير اللغة
    setPageDirection(il8n.language === "ar" ? "rtl" : "ltr")
  }, [il8n.language])

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
      <header
        className={styles.header_one}
        style={{ direction: pageDirection }}
      >
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
                    il8n.changeLanguage("ar")
                  }}
                >
                  العربيه
                </button>
                <div className={styles.line}></div>
                <button
                  onClick={() => {
                    il8n.changeLanguage("en")
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

        <div
          className={styles.header_sticky}
          ref={headerRef}
          // style={{ direction: pageDirection }}
        >
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
                          {il8n.language === "ar" ? item.nameAR : item.nameEN}
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
