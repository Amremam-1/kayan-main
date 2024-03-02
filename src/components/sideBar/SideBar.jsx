import { links } from "../header/NavBar"
import styles from "./sideBar.module.css"
import { IoClose } from "react-icons/io5"
import { FaFacebookF } from "react-icons/fa"
import { IoLogoTwitter } from "react-icons/io"
import { FaYoutube } from "react-icons/fa"
import { FaLinkedinIn } from "react-icons/fa"
import { useEffect, useState } from "react"

// eslint-disable-next-line react/prop-types
const SideBar = ({ isOpen }) => {
  const [isMenuOpen, setMenuOpen] = useState(false)

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
            {links.map((item, index) => (
              <li className={styles.has_droup_down} key={index}>
                <a href={item.id} className={styles.main}>
                  {item.display}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.social_wrapper_one}>
          <ul>
            <li>
              <a href="#">
                <FaFacebookF className={styles.social_icon} />
              </a>
            </li>
            <li>
              <a href="#">
                <IoLogoTwitter className={styles.social_icon} />
              </a>
            </li>
            <li>
              <a href="#">
                <FaYoutube className={styles.social_icon} />
              </a>
            </li>
            <li>
              <a href="#">
                <FaLinkedinIn className={styles.social_icon} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SideBar
