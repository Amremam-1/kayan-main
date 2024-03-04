// import MapComponent from "./MapComponent/MapComponent"
// import MapComponent2 from "./MapComponent2/MapComponent2"
import styles from "./style/styles.module.scss"

const GetInTouch = () => {
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
        {/* <div className={styles.message}>
          <div className={styles.top}>
            <p className={styles.text}>Get In Touch</p>
            <h2 className={styles.title}>Let’s Get in Touch</h2>
          </div>
          <form className={styles.messageForm}>
            <input type="text" placeholder="Your Name" />
            <input type="email" placeholder="Email Address" />
            <select className={styles.selectOption}>
              <option>Select an option</option>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 4</option>
            </select>
            <input type="date" placeholder="Select Date" />
            <select className={styles.selectTime}>
              <option>12:00AM</option>
              <option>12:30AM</option>
              <option>1:00AM</option>
            </select>
            <textarea placeholder="Your message Here" />
            <button className={styles.submitButton}>Submit Message</button>
          </form>
        </div> */}
      </div>
    </section>
  )
}

export default GetInTouch
