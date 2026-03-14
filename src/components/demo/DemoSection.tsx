import DemoWindow from './DemoWindow'
import styles from './DemoSection.module.css'

export default function DemoSection() {
  return (
    <section className={styles.demoSection} id="demo">
      <h2 className={styles.heading}>see it in action</h2>
      <p className={styles.subtitle}>
        a full relay setup in under 60 seconds. click through the demo below.
      </p>
      <DemoWindow />
    </section>
  )
}
