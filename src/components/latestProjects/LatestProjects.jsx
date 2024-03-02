import { PiPlusBold } from "react-icons/pi"
import { Container, Row } from "react-bootstrap"
import svg1 from "../../assets/images/01.svg"
import svg2 from "../../assets/images/03.svg"
import svg3 from "../../assets/images/04.svg"
import svg4 from "../../assets/images/05.svg"
import styles from "./styles.module.scss"

const LatestProjects = () => {
  return (
    <section className={styles.latestProjects}>
      <Container>
        <Row>
          <div className={styles.container}>
            <div className={styles.top}>
              <p className={styles.smTitle}>LATEST PROJECTS</p>
              <h3 className={styles.title}>
                EXCELLENCE DRIVEN FOR GETTING
                <br />
                UNRIVALED RESULTS.
              </h3>
            </div>
            <ul className={styles.projectsList}>
              <ProjectItem img={svg1} num={3526} text="Tons Of Customers" />
              <ProjectItem img={svg2} num={3024} text="Compleated Project" />
              <ProjectItem img={svg3} num={325} text="Team Members" />
              <ProjectItem img={svg4} num={56} text="Upcoming Projects" />
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
