import Container from '@/components/ui/Container'
import Button from '@/components/ui/Button'
import Icon from '@/components/ui/Icon'
import styles from './Hero.module.css'

export default function Hero() {
  return (
    <section className={styles.hero}>
      <Container>
        <h1 className={styles.tagline}>
          your personal<br />social network.
        </h1>
        <p className={styles.subtitle}>
          a new way to share online. your profile, followers and posts belong to you.
          <br />
          just install it, open it and start. nothing to set up.
        </p>
        <div className={styles.ctas}>
          <Button variant="primary" href="#demo">
            <span className={styles.btnIcon}><Icon name="gamepad" size={16} /></span> try the demo
          </Button>
          <Button variant="secondary" href="/download">
            <span className={styles.btnIcon}><Icon name="apple" size={16} /></span> download
          </Button>
        </div>
      </Container>
    </section>
  )
}
