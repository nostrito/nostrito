import { motion } from 'framer-motion'
import Container from '@/components/ui/Container'
import styles from './FAQ.module.css'

const FAQ_ITEMS = [
  {
    question: 'does this replace my main relay?',
    answer:
      'no — it complements them. think of nostrito as your personal cache and backup layer. your existing relays still work exactly as before. nostrito just makes sure a copy of your network\'s data lives on your machine, not only on someone else\'s server.',
    defaultOpen: true,
  },
  {
    question: 'what happens when my laptop is off?',
    answer:
      'your clients fall back to your regular relays, exactly as they do today. when your machine wakes up, nostrito catches up automatically — pulling everything it missed while you were away. no manual sync, no data loss.',
    defaultOpen: false,
  },
  {
    question: 'how much storage does it use?',
    answer:
      'you decide. your own events are always kept in full — typically a few MB at most. for others\' events and media, you set the quota during setup and can change it anytime in settings. start small, expand if you want more.',
    defaultOpen: false,
  },
  {
    question: 'can other people connect to my relay?',
    answer:
      'no. your npub is the only authorized key. nostrito is private by design — it runs locally, serves only you, and is not exposed to the internet by default. trusted peer pacts (for sharing with specific friends) are a planned future feature.',
    defaultOpen: false,
  },
  {
    question: 'do i need to leave it running 24/7?',
    answer:
      "no — and that's the whole point. nostrito lives when you live. it runs while your machine is on, sleeps when it's off, and catches up when it wakes. no cloud required, no always-on VPS, no monthly bill. you can even toggle offline mode to cut all outbound connections instantly — your local relay keeps serving your data.",
    defaultOpen: false,
  },
  {
    question: 'does it work with my existing nostr client?',
    answer:
      'yes. nostrito speaks standard nostr relay protocol (NIP-01). add it as a relay in any client — damus, primal, amethyst, snort, whatever you use — and it works immediately. your WoT-filtered feed, served locally.',
    defaultOpen: false,
  },
] as const

export default function FAQ() {
  return (
    <section id="faq" className={styles.section}>
      <Container>
        <motion.div
          className={styles.sectionHeader}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h2>common questions.</h2>
          <p>things people ask before running their own relay.</p>
        </motion.div>
        <div className={styles.list}>
          {FAQ_ITEMS.map((item, i) => (
            <motion.details
              key={item.question}
              className={styles.item}
              open={item.defaultOpen || undefined}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4, delay: i * 0.08, ease: 'easeOut' }}
            >
              <summary>
                {item.question}
                <span className={styles.icon}>+</span>
              </summary>
              <p className={styles.answer}>{item.answer}</p>
            </motion.details>
          ))}
        </div>
      </Container>
    </section>
  )
}
