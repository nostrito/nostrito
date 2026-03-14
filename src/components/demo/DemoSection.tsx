import DemoWindow from './DemoWindow'
import styles from './DemoSection.module.css'

export default function DemoSection() {
  return (
    <section className={styles.demoSection} id="demo">
      <h2 className={styles.heading}>See it in action</h2>
      <p className={styles.subtitle}>
        A full relay setup in under 60 seconds. Click through the demo below.
      </p>
      <DemoWindow />
    </section>
  )
}
