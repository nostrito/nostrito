import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Container>
        <h1 className={styles.tagline}>
          Social media<br />you actually own.
        </h1>
        <p className={styles.subtitle}>
          Nostr is a new way to share online — where you keep your identity,
          your followers, and your content. No company can ban you, algorithm-feed
          you, or sell your data. nostrito makes it effortless: install, open,
          and you're in. No technical setup required.
        </p>
        <div className={styles.ctas}>
          <Button variant="primary" href="#demo">
            <span className={styles.btnIcon}><Icon name="gamepad" size={16} /></span> Try the Demo
          </Button>
          <Button variant="secondary" href="#">
            <span className={styles.btnIcon}><Icon name="apple" size={16} /></span> Download for Mac
          </Button>
          <Button variant="secondary" href="#">
            <span className={styles.btnIcon}><Icon name="linux" size={16} /></span> Linux
          </Button>
          <Button variant="secondary" href="#">
            <span className={styles.btnIcon}><Icon name="windows" size={16} /></span> Windows
          </Button>
        </div>
      </Container>
    </section>
  )
}
