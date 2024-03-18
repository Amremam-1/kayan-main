import { PiPlusBold } from "react-icons/pi"
import { Container, Row } from "react-bootstrap"
import svg1 from "../../../public/assets/images/01.svg"
import svg2 from "../../../public/assets/images/03.svg"
import svg3 from "../../../public/assets/images/04.svg"
import svg4 from "../../../public/assets/images/05.svg"
import styles from "./styles.module.scss"
import { useTranslation } from "react-i18next"
import { useState, useEffect } from "react"

const LatestProjects = () => {
  const [t, il8n] = useTranslation()
  const [pageDiraction, setPageDirection] = useState("ltr")

  useEffect(() => {
    setPageDirection(il8n.language === "ar" ? "rtl" : "ltr")
  }, [il8n.language])

  return (
    <section
      className={styles.latestProjects}
      style={{ direction: pageDiraction }}
    >
      <Container>
        <Row>
          <div className={styles.container}>
            <div className={styles.top}>
              <p className={styles.smTitle}>{t("portfolio-title")}</p>
              <h3 className={styles.title}>
                {t("latestTitle")}
                <br />
                {t("latestTitle2")}
              </h3>
            </div>
            <ul className={styles.projectsList}>
              <ProjectItem img={svg1} num={82} text={t("latestPrjectItem1")} />
              <ProjectItem
                img={svg2}
                num={107}
                text={t("latestProjectItem2")}
              />
              <ProjectItem
                img={svg3}
                num={325}
                text={t("latestProjectItem3")}
              />
              <ProjectItem img={svg4} num={9} text={t("latestProjectItem4")} />
            </ul>
          </div>
        </Row>
      </Container>
    </section>
  )
}

export default LatestProjects

// eslint-disable-next-line react/prop-types
const ProjectItem = ({ img, num, text }) => {
  return (
    <li className={styles.projItem}>
      <div className={styles.itemWrapper}>
        <div className={styles.image}>
          <img src={img} alt="icon" />
        </div>
        <h2 className={styles.projNum}>
          <span>{num}</span>
          <PiPlusBold />
        </h2>
        <p className={styles.projText}>{text}</p>
      </div>
    </li>
  )
}
