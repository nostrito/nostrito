import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import styles from './CTA.module.css'

export default function CTA() {
  return (
    <section className={styles.section}>
      <Container>
        <h2>Own your feed.</h2>
        <p>
          nostrito is open source, MIT licensed, and built for people who believe
          their data should live on their machine.
        </p>
        <div className={styles.actions}>
          <Button
            variant="primary"
            href="https://github.com/nostrito/nostrito"
          >
            View on GitHub →
          </Button>
          <Button variant="secondary" href="/docs">
            Documentation
          </Button>
        </div>
      </Container>
    </section>
  )
}
