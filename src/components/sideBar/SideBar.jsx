import styles from "./sideBar.module.css"
import { IoClose } from "react-icons/io5"
import { FaFacebookF } from "react-icons/fa"
import { IoLogoTwitter } from "react-icons/io"
import { useEffect, useState } from "react"
import { FaInstagram } from "react-icons/fa6"
import { FaSnapchat } from "react-icons/fa6"
import { NavLink } from "react-bootstrap"
import { useTranslation } from "react-i18next"
// import { MdOutlineLanguage } from "react-icons/md"
import { IoIosArrowUp } from "react-icons/io"
import { IoIosArrowDown } from "react-icons/io"

const linksmenu = [
  { id: "#home", nameEN: "Home", nameAR: "الرئيسية" },
  { id: "#service", nameEN: "Service", nameAR: "خدمتنا" },
  { id: "#about", nameEN: "About", nameAR: "حولنا" },
  { id: "#portfolio", nameEN: "Portfolio", nameAR: "اعمالنا" },
  { id: "#blog", nameEN: "Blog", nameAR: "الرؤية" },
  { id: "##footer", nameEN: "Contact", nameAR: "اتصل بنا" },
  {
    id: "#language",
    nameEN: "Language",
    nameAR: "اللغة",
    iconUP: IoIosArrowUp,
    iconDown: IoIosArrowDown,
  },
]

// eslint-disable-next-line react/prop-types
const SideBar = ({ isOpen }) => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const [languageDrop, setLanguageDrop] = useState(false)

  const handleLanguageDrop = () => {
    setLanguageDrop(!languageDrop)
  }

  // eslint-disable-next-line no-unused-vars
  const [t, il8n] = useTranslation()
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    setMenuOpen(isOpen)
  }, [isOpen])

  return (
    <div className={`${styles.side_bar} ${isMenuOpen ? styles.open : ""}`}>
      <button className={styles.close} onClick={toggleMenu}>
        <IoClose className={styles.close_Icon} />
      </button>

      <div className={styles.mobile_menu}>
        <nav>
          <ul>
            {linksmenu.map((item, index) => (
              <li className={styles.menu_item} key={index}>
                <NavLink
                  href={item.id}
                  className={styles.nav_item}
                  onClick={handleLanguageDrop}
                >
                  {il8n.language === "ar" ? item.nameAR : item.nameEN}

                  {item?.iconUP && item?.iconDown ? (
                    languageDrop ? (
                      <item.iconUP className={styles.arrow} />
                    ) : (
                      <item.iconDown className={styles.arrow} />
                    )
                  ) : (
                    ""
                  )}

                  {languageDrop && item.id === "#language" && (
                    <div className={styles.language_dropdown}>
                      <button
                        className={
                          il8n.language === "ar" ? styles.activeLanguage : ""
                        }
                        onClick={() => {
                          il8n.changeLanguage("ar")
                        }}
                      >
                        العربية
                      </button>
                      <button
                        className={
                          il8n.language === "en" ? styles.activeLanguage : ""
                        }
                        onClick={() => {
                          il8n.changeLanguage("en")
                        }}
                      >
                        English
                      </button>
                    </div>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.social_wrapper_one}>
          <ul>
            <li>
              <a href="https://www.facebook.com/profile.php?id=61556560361690">
                <FaFacebookF className={styles.social_icon} />
              </a>
            </li>
            <li>
              <a href="https://x.com/kayanegypt_?s=21">
                <IoLogoTwitter className={styles.social_icon} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/egyptkayan05?igsh=MjhzN3YyZDI2anpj">
                <FaInstagram className={styles.social_icon} />
              </a>
            </li>
            <li>
              <a href="https://t.snapchat.com/DpQEvHuT">
                <FaSnapchat className={styles.social_icon} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SideBar
