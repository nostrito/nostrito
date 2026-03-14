import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import styles from './CTA.module.css'

export default function CTA() {
  return (
    <section className={styles.section}>
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2>own your feed.</h2>
          <p>
            nostrito is open source, MIT licensed, and built for people who believe
            their data should live on their machine.
          </p>
          <div className={styles.actions}>
            <Button
              variant="primary"
              href="https://github.com/nostrito/nostrito"
            >
              view on github →
            </Button>
            <Button variant="secondary" href="/docs">
              documentation
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
