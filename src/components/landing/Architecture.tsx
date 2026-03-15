import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import styles from './Architecture.module.css'

export default function Architecture() {
  return (
    <section id="architecture" className={styles.section}>
      <Container>
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2>built to be invisible.</h2>
          <p>
            a single rust binary. five async components. one SQLite database.
            runs quietly in the background.
          </p>
        </motion.div>
        <motion.div
          className={styles.diagramContainer}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
        >
          <img
            src="/assets/architecture-diagram.svg"
            alt="nostrito architecture diagram — sync engine, WoT engine, SQLite, Blossom storage, relay server, and client connections"
            className={styles.diagram}
          />
        </motion.div>
      </Container>
    </section>
  )
}
