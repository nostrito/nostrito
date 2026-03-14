import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import styles from './HowItWorks.module.css'

const STEPS = [
  {
    title: 'paste your npub',
    description:
      'open nostrito and drop in your public key. it sets up everything — database, relay connections, trust graph.',
  },
  {
    title: 'watch it sync',
    description:
      'nostrito discovers your network, builds your web of trust, and starts pulling events from people you actually follow. track specific profiles to cache their full media history.',
  },
  {
    title: 'start exploring',
    description:
      'your feed fills up very quickly with the information most interest you, and creates a local backup of your whole history. you can port it anywhere after that!',
  },
] as const

export default function HowItWorks() {
  return (
    <section id="how" className={styles.section}>
      <Container>
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2>up and running in a minute.</h2>
          <p>no terminal. no config files. just open the app.</p>
        </motion.div>
        <div className={styles.steps}>
          {STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              className={styles.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.15, ease: 'easeOut' }}
            >
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}
