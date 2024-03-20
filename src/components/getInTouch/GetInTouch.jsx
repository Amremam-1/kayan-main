// import MapComponent from "./MapComponent/MapComponent"
// import MapComponent2 from "./MapComponent2/MapComponent2"
import styles from "./style/styles.module.scss"
import { HiOutlineMail } from "react-icons/hi"
import { FaPhoneAlt } from "react-icons/fa"
import { IoLocationOutline } from "react-icons/io5"

import { useTranslation } from "react-i18next"
import { useState, useEffect } from "react"

const GetInTouch = () => {
  const [t, il8n] = useTranslation()
  const [pageDiraction, setPageDirection] = useState("ltr")

  useEffect(() => {
    setPageDirection(il8n.language === "ar" ? "rtl" : "ltr")
  }, [il8n.language])

  return (
    <section className={styles.getInTouch} id="contact">
      <div className={styles.container}>
        <div className={styles.map}>
          {/* <MapComponent2 /> */}
          {/* <MapComponent /> */}
          <div style={{ width: "100%" }}>
            <iframe
              width="100%"
              height="600"
              src="https://maps.google.com/maps?width=100%25&amp;height=500&amp;hl=en&amp;q=Ghosn%20Al%20Salam,%20Al-Ruwais,%20Jeddah.+(Kayan)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            >
              <a href="https://www.gps.ie/">gps vehicle tracker</a>
            </iframe>
          </div>
        </div>
        <div className={styles.message} style={{ direction: pageDiraction }}>
          <div className={styles.top}>
            <h3 className={styles.title}>{t("address-title")}</h3>
            <p className={styles.text}>{t("address-title-content")}</p>
          </div>

          <div className={styles.info}>
            <div className={styles.info_box}>
              <div className={styles.address_icon}>
                <IoLocationOutline className={styles.icon} />
              </div>
              <div className={styles.address_text}>
                <span>{t("address")}</span>
                <p className={styles.desc}>{t("footer-location")}</p>
              </div>
            </div>

            <div className={styles.info_box}>
              <div className={styles.address_icon}>
                <FaPhoneAlt className={styles.icon} />
              </div>
              <div className={styles.address_text}>
                <span>{t("phone")}</span>
                <a href="tel:+966 12 422 2014">+966 12 422 2014</a>
              </div>
            </div>

            <div className={styles.info_box}>
              <div className={styles.address_icon}>
                <HiOutlineMail className={styles.icon} />
              </div>
              <div className={styles.address_text}>
                <span>{t("email")}</span>
                <a href="">Hosny@kayanegypt.net</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GetInTouch
