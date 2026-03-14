import Container from '@/components/ui/Container'
import styles from './FAQ.module.css'

const FAQ_ITEMS = [
  {
    question: 'Does this replace my main relay?',
    answer:
      'No — it complements them. Think of nostrito as your personal cache and backup layer. Your existing relays still work exactly as before. nostrito just makes sure a copy of your network\'s data lives on your machine, not only on someone else\'s server.',
    defaultOpen: true,
  },
  {
    question: 'What happens when my laptop is off?',
    answer:
      'Your clients fall back to your regular relays, exactly as they do today. When your machine wakes up, nostrito catches up automatically — pulling everything it missed while you were away. No manual sync, no data loss.',
    defaultOpen: false,
  },
  {
    question: 'How much storage does it use?',
    answer:
      'You decide. Your own events are always kept in full — typically a few MB at most. For others\' events and media, you set the quota during setup and can change it anytime in settings. Start small, expand if you want more.',
    defaultOpen: false,
  },
  {
    question: 'Can other people connect to my relay?',
    answer:
      'No. Your npub is the only authorized key. nostrito is private by design — it runs locally, serves only you, and is not exposed to the internet by default. Trusted peer pacts (for sharing with specific friends) are a planned future feature.',
    defaultOpen: false,
  },
  {
    question: 'Do I need to leave it running 24/7?',
    answer:
      "No — and that's the whole point. nostrito lives when you live. It runs while your machine is on, sleeps when it's off, and catches up when it wakes. No cloud required, no always-on VPS, no monthly bill. You can even toggle Offline Mode to cut all outbound connections instantly — your local relay keeps serving your data.",
    defaultOpen: false,
  },
  {
    question: 'Does it work with my existing Nostr client?',
    answer:
      'Yes. nostrito speaks standard Nostr relay protocol (NIP-01). Add it as a relay in any client — Damus, Primal, Amethyst, Snort, whatever you use — and it works immediately. Your WoT-filtered feed, served locally.',
    defaultOpen: false,
  },
] as const

export default function FAQ() {
  return (
    <section id="faq" className={styles.section}>
      <Container>
        <div className={styles.sectionHeader}>
          <h2>Common questions.</h2>
          <p>Things people ask before running their own relay.</p>
        </div>
        <div className={styles.list}>
          {FAQ_ITEMS.map((item) => (
            <details
              key={item.question}
              className={styles.item}
              open={item.defaultOpen || undefined}
            >
              <summary>
                {item.question}
                <span className={styles.icon}>+</span>
              </summary>
              <p className={styles.answer}>{item.answer}</p>
            </details>
          ))}
        </div>
      </Container>
    </section>
  )
}
