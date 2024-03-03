import { links } from "../header/NavBar"
import styles from "./sideBar.module.css"
import { IoClose } from "react-icons/io5"
import { FaFacebookF } from "react-icons/fa"
import { IoLogoTwitter } from "react-icons/io"
import { useEffect, useState } from "react"
import { FaInstagram } from "react-icons/fa6"
import { FaSnapchat } from "react-icons/fa6"
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
