import { useState } from 'react'
import { Link } from 'react-router-dom'
import SEO from '@/components/seo/SEO'
import styles from '@/styles/docs.module.css'

type DocPage =
  | 'getting-started'
  | 'installation'
  | 'quickstart'
  | 'configuration'
  | 'relay-aliases'
  | 'sync'
  | 'storage'
  | 'wot'
  | 'blossom'
  | 'advanced'
  | 'api'
  | 'faq'

interface SidebarSection {
  title: string
  links: { id: DocPage; label: string }[]
}

const SIDEBAR_SECTIONS: SidebarSection[] = [
  {
    title: 'Getting Started',
    links: [
      { id: 'getting-started', label: 'Introduction' },
      { id: 'installation', label: 'Installation' },
      { id: 'quickstart', label: 'Quick Start' },
    ],
  },
  {
    title: 'Configuration',
    links: [
      { id: 'configuration', label: 'Config File' },
      { id: 'relay-aliases', label: 'Relay Aliases' },
    ],
  },
  {
    title: 'Features',
    links: [
      { id: 'sync', label: 'Sync Engine' },
      { id: 'storage', label: 'Storage' },
      { id: 'wot', label: 'Web of Trust' },
      { id: 'blossom', label: 'Blossom Media' },
    ],
  },
  {
    title: 'Advanced',
    links: [
      { id: 'advanced', label: 'Advanced Config' },
      { id: 'api', label: 'Relay API' },
    ],
  },
  {
    title: 'Help',
    links: [{ id: 'faq', label: 'FAQ' }],
  },
]

function IntroductionPage() {
  return (
    <>
      <h1>Introduction</h1>
      <p className={styles.lead}>
        nostrito is a personal Nostr mini-relay that runs on your machine. It
        builds your Web of Trust, syncs your feed, and caches your media — all
        locally.
      </p>

      <h2>What is nostrito?</h2>
      <p>
        nostrito is a lightweight, single-binary relay daemon written in Rust. It
        connects to the Nostr network, computes your Web of Trust from your
        follow list, and stores only the events and media from people you trust.
      </p>
      <p>
        Your favorite Nostr client (Damus, Amethyst, Coracle, etc.) connects to
        nostrito over a local WebSocket, so your feed loads instantly — no
        network latency, no downtime, no dependency on third-party
        infrastructure.
      </p>

      <h2>Key Features</h2>
      <ul>
        <li>
          <strong>WoT-aware sync</strong> — only stores events from trusted
          pubkeys
        </li>
        <li>
          <strong>Local NIP-01 relay</strong> — works with any Nostr client
        </li>
        <li>
          <strong>Blossom media cache</strong> — images, videos, audio stored
          locally
        </li>
        <li>
          <strong>Human-friendly config</strong> — relay aliases, TOML format
        </li>
        <li>
          <strong>Offline-first</strong> — your data is always available
        </li>
        <li>
          <strong>Single binary</strong> — no runtime deps, no Docker, no
          Node.js
        </li>
      </ul>

      <h2>How It Works</h2>
      <p>
        When you start nostrito for the first time, you provide your{' '}
        <code>npub</code>. nostrito then:
      </p>
      <ol>
        <li>Fetches your follow list (kind:3) from configured relays</li>
        <li>Computes your Web of Trust graph (configurable depth)</li>
        <li>Syncs events from trusted pubkeys</li>
        <li>Caches Blossom media locally</li>
        <li>Serves everything via a local WebSocket relay</li>
      </ol>

      <div className={styles.callout}>
        <strong>Tip:</strong> Point your Nostr client at{' '}
        <code>ws://localhost:4869</code> and your feed will load from your local
        machine — even when you're offline.
      </div>
    </>
  )
}

function InstallationPage() {
  return (
    <>
      <h1>Installation</h1>
      <p className={styles.lead}>
        nostrito ships as a single binary for macOS, Linux, and Windows. No
        dependencies required.
      </p>

      <h2>macOS</h2>
      <p>
        Download the latest <code>.dmg</code> from the GitHub Releases page, or
        install via Homebrew:
      </p>
      <pre className={styles.codeBlock}>
        <span className={styles.comment}># Install via Homebrew</span>
        {'\n'}brew install nostrito/tap/nostrito
      </pre>

      <h2>Linux</h2>
      <p>Download the binary for your architecture (x86_64 or aarch64):</p>
      <pre className={styles.codeBlock}>
        <span className={styles.comment}># Download and install</span>
        {'\n'}curl -L
        https://github.com/nostrito/nostrito/releases/latest/download/nostrito-linux-x86_64
        -o nostrito{'\n'}chmod +x nostrito{'\n'}sudo mv nostrito /usr/local/bin/
      </pre>

      <h2>Windows</h2>
      <p>
        Download the <code>.exe</code> from the GitHub Releases page and add it
        to your PATH.
      </p>

      <h2>Build from Source</h2>
      <pre className={styles.codeBlock}>
        <span className={styles.comment}># Requires Rust 1.75+</span>
        {'\n'}git clone https://github.com/nostrito/nostrito.git{'\n'}cd nostrito
        {'\n'}cargo build --release
      </pre>
    </>
  )
}

function QuickStartPage() {
  return (
    <>
      <h1>Quick Start</h1>
      <p className={styles.lead}>Get nostrito running in under a minute.</p>

      <h2>1. Start nostrito</h2>
      <p>
        Open the app (or run the binary). You'll be greeted with the setup
        wizard.
      </p>

      <h2>2. Enter your npub</h2>
      <p>
        Paste your Nostr public key. nostrito will set up the database and begin
        computing your Web of Trust.
      </p>

      <h2>3. Pick your relays</h2>
      <p>
        Select which relays to sync from. You can use friendly names —{' '}
        <code>primal</code>, <code>damus</code>, <code>nos</code> — instead of
        full WebSocket URLs.
      </p>

      <h2>4. Configure storage</h2>
      <p>
        Set how much space to allocate for others' events and media. Your own
        events are always stored at 100%.
      </p>

      <h2>5. Connect your client</h2>
      <p>
        Add <code>ws://localhost:4869</code> to your Nostr client's relay list.
        Your feed will load from your local relay.
      </p>

      <div className={styles.callout}>
        <strong>That's it!</strong> nostrito runs in the background, syncing your
        network and serving your feed locally.
      </div>
    </>
  )
}

function ConfigFilePage() {
  return (
    <>
      <h1>Config File</h1>
      <p className={styles.lead}>
        nostrito uses a TOML configuration file at{' '}
        <code>~/.nostrito/config.toml</code>.
      </p>

      <h2>Default Configuration</h2>
      <pre className={styles.codeBlock}>
        <span className={styles.comment}># ~/.nostrito/config.toml</span>
        {'\n\n'}
        <span className={styles.key}>[identity]</span>
        {'\n'}
        <span className={styles.val}>npub</span> ={' '}
        <span className={styles.str}>"npub1..."</span>
        {'\n\n'}
        <span className={styles.key}>[relay]</span>
        {'\n'}
        <span className={styles.val}>port</span> ={' '}
        <span className={styles.str}>4869</span>
        {'\n'}
        <span className={styles.val}>bind</span> ={' '}
        <span className={styles.str}>"127.0.0.1"</span>
        {'\n\n'}
        <span className={styles.key}>[sync]</span>
        {'\n'}
        <span className={styles.val}>relays</span> = [
        <span className={styles.str}>"primal"</span>,{' '}
        <span className={styles.str}>"damus"</span>,{' '}
        <span className={styles.str}>"nos"</span>]{'\n'}
        <span className={styles.val}>interval_secs</span> ={' '}
        <span className={styles.str}>300</span>
        {'\n\n'}
        <span className={styles.key}>[wot]</span>
        {'\n'}
        <span className={styles.val}>max_depth</span> ={' '}
        <span className={styles.str}>3</span>
        {'\n'}
        <span className={styles.val}>refresh_hours</span> ={' '}
        <span className={styles.str}>6</span>
        {'\n\n'}
        <span className={styles.key}>[storage.own]</span>
        {'\n'}
        <span className={styles.val}>enabled</span> ={' '}
        <span className={styles.str}>true</span>
        {'    '}
        <span className={styles.comment}># always true, can't disable</span>
        {'\n\n'}
        <span className={styles.key}>[storage.others]</span>
        {'\n'}
        <span className={styles.val}>events_quota_gb</span> ={' '}
        <span className={styles.str}>5</span>
        {'\n'}
        <span className={styles.val}>media_quota_gb</span> ={' '}
        <span className={styles.str}>2</span>
        {'\n'}
        <span className={styles.val}>wot_depth</span> ={' '}
        <span className={styles.str}>2</span>
        {'\n'}
        <span className={styles.val}>cleanup</span> ={' '}
        <span className={styles.str}>"oldest"</span>
        {'  '}
        <span className={styles.comment}># or "least_interacted"</span>
      </pre>

      <h2>Environment Variables</h2>
      <p>
        Any config value can be overridden with environment variables using the{' '}
        <code>NOSTRITO_</code> prefix:
      </p>
      <pre className={styles.codeBlock}>
        NOSTRITO_RELAY_PORT=4870 nostrito
      </pre>
    </>
  )
}

function RelayAliasesPage() {
  return (
    <>
      <h1>Relay Aliases</h1>
      <p className={styles.lead}>
        You never have to type a <code>wss://</code> URL. nostrito uses friendly
        names for every relay, and handles the mapping internally.
      </p>

      <h2>Why aliases?</h2>
      <p>
        WebSocket URLs are ugly and easy to mistype. nostrito lets you refer to
        relays by short, memorable names — in the setup wizard, in the config
        file, and everywhere else. When you pick "damus" during onboarding,
        nostrito knows that means <code>wss://relay.damus.io</code>. You never
        see the raw URL unless you go looking for it.
      </p>

      <h2>Built-in aliases</h2>
      <p>
        nostrito ships with 8 built-in aliases covering the most popular Nostr
        relays:
      </p>
      <table className={styles.docsTable}>
        <thead>
          <tr>
            <th>Alias</th>
            <th>Resolves to</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>primal</code>
            </td>
            <td>
              <code>wss://relay.primal.net</code>
            </td>
            <td>Popular social relay with fast global coverage</td>
          </tr>
          <tr>
            <td>
              <code>damus</code>
            </td>
            <td>
              <code>wss://relay.damus.io</code>
            </td>
            <td>iOS-first community, one of the largest relays</td>
          </tr>
          <tr>
            <td>
              <code>nos</code>
            </td>
            <td>
              <code>wss://relay.nos.social</code>
            </td>
            <td>Open social network relay</td>
          </tr>
          <tr>
            <td>
              <code>snort</code>
            </td>
            <td>
              <code>wss://relay.snort.social</code>
            </td>
            <td>Web client relay, popular with browser users</td>
          </tr>
          <tr>
            <td>
              <code>coracle</code>
            </td>
            <td>
              <code>wss://relay.coracle.social</code>
            </td>
            <td>Privacy-focused, good for discovery</td>
          </tr>
          <tr>
            <td>
              <code>nostr.wine</code>
            </td>
            <td>
              <code>wss://nostr.wine</code>
            </td>
            <td>Curated content, paid relay with quality filtering</td>
          </tr>
          <tr>
            <td>
              <code>amethyst</code>
            </td>
            <td>
              <code>wss://nostr.band</code>
            </td>
            <td>Android community relay and search index</td>
          </tr>
          <tr>
            <td>
              <code>yakihonne</code>
            </td>
            <td>
              <code>wss://relay.yakihonne.com</code>
            </td>
            <td>Long-form content and articles</td>
          </tr>
        </tbody>
      </table>

      <h2>How resolution works</h2>
      <p>
        When nostrito sees a relay name, it checks the alias table first. If the
        name matches a built-in alias, it uses the corresponding{' '}
        <code>wss://</code> URL. If no alias matches, nostrito treats the name as
        a raw URL — so you can always use a full <code>wss://</code> address if
        you need to connect to a relay that isn't in the alias list.
      </p>

      <div className={styles.callout}>
        <strong>Tip:</strong> In the setup wizard, you just toggle relay names on
        and off. nostrito resolves them to real URLs behind the scenes. You can
        mix aliases and raw URLs freely in the config file.
      </div>

      <h2>Custom aliases</h2>
      <p>
        Add your own aliases in the config file. Useful for private relays or
        relays that aren't in the built-in list:
      </p>
      <pre className={styles.codeBlock}>
        <span className={styles.key}>[aliases]</span>
        {'\n'}
        <span className={styles.val}>myrelay</span> ={' '}
        <span className={styles.str}>"wss://relay.example.com"</span>
        {'\n'}
        <span className={styles.val}>work</span> ={' '}
        <span className={styles.str}>"wss://internal-relay.company.io"</span>
      </pre>
      <p>
        Custom aliases work exactly like built-in ones — use them anywhere you'd
        use a relay name.
      </p>
    </>
  )
}

function SyncEnginePage() {
  return (
    <>
      <h1>Sync Engine</h1>
      <p className={styles.lead}>
        nostrito syncs your data from the Nostr network using a 4-tier priority
        system. It fetches the most important things first, works its way through
        less urgent data in the background, and is always polite to the relays it
        connects to.
      </p>

      <h2>The 4-tier system</h2>
      <p>
        Not all data is equally urgent. When you first launch nostrito (or after
        a long time offline), it needs to fetch your profile, your follows,
        recent notes, and eventually the broader social graph. Instead of trying
        to do everything at once, nostrito works through four tiers in order:
      </p>

      <h3>Tier 1 — Critical (completes in seconds)</h3>
      <p>
        The first thing nostrito does is fetch <strong>your own profile</strong>{' '}
        (kind:0 metadata) and <strong>your follow list</strong> (kind:3 contact
        list). This is a single request to one relay — fast and lightweight. Your
        follow list seeds the entire Web of Trust graph, so everything else
        depends on it.
      </p>
      <p>
        Once tier 1 completes, nostrito knows who you follow. The app becomes
        usable immediately.
      </p>

      <h3>Tier 2 — Important (completes in minutes)</h3>
      <p>
        Now that nostrito knows your follow list, it fetches{' '}
        <strong>recent notes</strong> (kind:1 events) from your direct follows.
        It only looks at the last 7 days and caps at 500 events, so this stays
        fast.
      </p>
      <p>
        Pubkeys are processed in batches of 20, with a short 300ms pause between
        batches to avoid hammering the relay. After tier 2, your feed is
        populated with recent content from the people you care about most.
      </p>

      <h3>Tier 3 — Background (completes in hours)</h3>
      <p>
        This is the WoT crawl. For each person you follow, nostrito fetches{' '}
        <em>their</em> follow list (kind:3) to discover follows-of-follows. This
        builds out the 2-hop and 3-hop layers of your trust graph.
      </p>
      <p>
        Tier 3 runs slowly on purpose — 10 pubkeys per batch with 2-second
        pauses between them. If you're actively using the app (scrolling your
        feed, interacting with the UI), tier 3 pauses entirely and resumes when
        you're idle. It also checkpoints its progress to the database, so if you
        quit and reopen nostrito, it picks up where it left off instead of
        starting over.
      </p>

      <h3>Tier 4 — Archive (completes in days)</h3>
      <p>The lowest priority tier handles everything else:</p>
      <ul>
        <li>
          <strong>Blossom media downloads</strong> — images, videos, and audio
          from events nostrito has already stored
        </li>
        <li>
          <strong>Historical events</strong> — notes older than 7 days from your
          follows
        </li>
        <li>
          <strong>Deep WoT</strong> — 3-hop+ pubkeys, if configured
        </li>
      </ul>
      <p>
        Tier 4 only starts after tiers 1–3 are complete. It runs very slowly — 5
        seconds between batches — and can take days to finish for a large social
        graph. That's fine. This is background work that fills in the gaps over
        time.
      </p>

      <div className={styles.callout}>
        <strong>Why tiers?</strong> Most relay apps try to fetch everything at
        once, which overwhelms relays and makes the app feel slow on first
        launch. nostrito's tiered approach means your feed is usable in seconds,
        even while the full graph takes hours to build.
      </div>

      <h2>Politeness policies</h2>
      <p>
        nostrito is designed to be a good citizen on the Nostr network. It never
        floods relays with requests.
      </p>

      <h3>Rate limiting</h3>
      <p>
        By default, nostrito sends no more than{' '}
        <strong>10 requests per minute</strong> to any single relay. If a relay
        sends a NOTICE message containing the words "rate" or "limit," nostrito
        immediately pauses all requests to that relay for 60 seconds.
      </p>

      <h3>Exponential backoff</h3>
      <p>
        When a relay connection fails, nostrito doesn't retry immediately. It
        backs off exponentially:
      </p>
      <ul>
        <li>1st failure: wait 5 seconds</li>
        <li>2nd failure: wait 10 seconds</li>
        <li>3rd failure: wait 30 seconds</li>
        <li>4th failure: wait 60 seconds</li>
        <li>5th failure: wait 120 seconds</li>
        <li>Maximum: 300 seconds (5 minutes)</li>
      </ul>
      <p>
        The backoff resets after a successful connection. This prevents nostrito
        from hammering a relay that's temporarily down.
      </p>

      <h3>
        The <code>since</code> filter — never re-fetch old events
      </h3>
      <p>
        After the initial sync, every subsequent request includes a{' '}
        <code>since</code> timestamp set to the most recent event nostrito has
        seen from that relay. This means nostrito only asks for <em>new</em>{' '}
        events — it never re-downloads data it already has. This dramatically
        reduces bandwidth and relay load over time.
      </p>

      <h3>Primary relay</h3>
      <p>
        The first relay in your configuration is treated as the{' '}
        <strong>primary relay</strong>. nostrito sends most of its requests
        there. Other relays are used as fallbacks — if the primary doesn't have
        what nostrito needs, it tries the others in order. This concentrates load
        on a single relay (which you presumably trust) rather than spreading
        requests across many.
      </p>

      <h2>Sync progress</h2>
      <p>
        nostrito emits real-time progress events as it syncs. The dashboard shows
        which tier is currently active, how many events have been fetched, and
        which relay is being queried. When a tier completes, the app updates
        automatically.
      </p>

      <h2>Surviving restarts</h2>
      <p>
        All sync progress is persisted to the database. If you quit nostrito
        mid-sync and reopen it later, it resumes from where it left off. Tier 3
        in particular tracks exactly which pubkeys have been processed, so it
        doesn't re-crawl follow lists it's already seen.
      </p>
    </>
  )
}

function StoragePage() {
  return (
    <>
      <h1>Storage</h1>
      <p className={styles.lead}>
        nostrito gives you full control over what gets stored and how much disk
        space to use. Your data is always safe; everyone else's is quota-based.
      </p>

      <h2>Your events — always 100%</h2>
      <p>
        Every event you've authored (notes, reactions, zaps, profile updates —
        everything) is stored permanently. So is any media you've posted via
        Blossom. This is non-negotiable: your data is yours, and nostrito never
        deletes it, no matter how tight storage gets.
      </p>
      <p>
        This guarantee extends to all event kinds, all media types, and all time
        periods. If you wrote it, nostrito keeps it.
      </p>

      <h2>Others' events — quota-based</h2>
      <p>
        Events from people in your Web of Trust are stored up to the quota you
        set during setup. You configure two separate limits:
      </p>
      <ul>
        <li>
          <strong>Events quota</strong> — how many GB to allocate for text events
          (notes, replies, reactions, etc.) from others
        </li>
        <li>
          <strong>Media quota</strong> — how many GB to allocate for Blossom
          media (images, videos, audio) from others
        </li>
      </ul>
      <p>
        Within the media quota, you can toggle which types to cache: images,
        videos, and audio are each independently selectable. If you only care
        about images, turn off videos and audio to save space.
      </p>

      <h2>Blossom media verification</h2>
      <p>
        When nostrito downloads media from a Blossom URL, it doesn't just save
        the file blindly. Every download is verified against the SHA-256 hash
        embedded in the Blossom URL. If the hash doesn't match, the file is
        discarded. This prevents tampered or corrupted media from polluting your
        local cache.
      </p>
      <p>
        Verified media is stored in <code>~/.nostrito/blossom/</code>, organized
        by hash. When your Nostr client requests the file, nostrito serves it
        directly from disk — no network round-trip needed.
      </p>

      <h2>Auto-cleanup</h2>
      <p>
        When either quota fills up, nostrito automatically makes room using your
        chosen strategy:
      </p>
      <ul>
        <li>
          <strong>Oldest first</strong> — deletes the oldest events and media
          first. Simple and predictable.
        </li>
        <li>
          <strong>Least interacted</strong> — keeps events you've engaged with
          (replied to, reacted to, zapped) and removes the ones you haven't.
          Smarter, but slightly more complex.
        </li>
      </ul>
      <p>
        Cleanup never touches your own events. Only others' data is subject to
        quota limits.
      </p>

      <h2>WoT-aware storage priority</h2>
      <p>
        Not all contacts are equal. Events from 1-hop contacts (people you
        directly follow) get storage priority over 2-hop or 3-hop contacts. When
        cleanup runs, it removes distant contacts' data first.
      </p>

      <h2>Database</h2>
      <p>
        All event data lives in a single SQLite database at{' '}
        <code>~/.nostrito/data.db</code>, using WAL mode for fast concurrent
        reads. Media files are stored separately in{' '}
        <code>~/.nostrito/blossom/</code>. To back up everything, just copy the{' '}
        <code>~/.nostrito/</code> directory.
      </p>
    </>
  )
}

function WebOfTrustPage() {
  return (
    <>
      <h1>Web of Trust</h1>
      <p className={styles.lead}>
        nostrito builds a trust graph from the Nostr network and uses it to
        decide which events to store, serve, and prioritize. No centralized
        authority — just math on follow lists.
      </p>

      <h2>The core idea</h2>
      <p>
        On Nostr, every user publishes a <strong>follow list</strong> (a kind:3
        event) that says "these are the people I follow." nostrito reads these
        lists and builds a graph of who trusts whom. The closer someone is to you
        in this graph, the more nostrito trusts them.
      </p>

      <h2>How the graph is built</h2>
      <p>
        It starts with you. nostrito fetches your kind:3 event from a relay and
        extracts every pubkey you follow. Those are your{' '}
        <strong>1-hop contacts</strong> — people you directly trust.
      </p>
      <p>
        Then nostrito fetches the kind:3 events for each of your follows. The
        people <em>they</em> follow (but you don't) become your{' '}
        <strong>2-hop contacts</strong>. One more round gives you{' '}
        <strong>3-hop contacts</strong>.
      </p>
      <p>
        The result is a directed graph with you at the center. nostrito stores
        this graph in memory for fast lookups and persists it to SQLite so it
        survives restarts.
      </p>

      <h2>BFS algorithm</h2>
      <p>
        nostrito uses <strong>breadth-first search (BFS)</strong> to compute
        trust distances. Starting from your pubkey, it explores the graph layer
        by layer:
      </p>
      <ol>
        <li>
          <strong>Layer 0:</strong> You. Trust distance = 0.
        </li>
        <li>
          <strong>Layer 1:</strong> Everyone in your follow list. Trust distance
          = 1.
        </li>
        <li>
          <strong>Layer 2:</strong> Everyone followed by layer-1 contacts (who
          isn't already in layer 0 or 1). Trust distance = 2.
        </li>
        <li>
          <strong>Layer 3:</strong> Same pattern, one more hop out. Trust
          distance = 3.
        </li>
      </ol>
      <p>
        BFS guarantees that the first time nostrito reaches a pubkey is via the{' '}
        <em>shortest</em> path, so the assigned trust distance is always the
        minimum number of hops from you.
      </p>

      <h2>Trust scoring</h2>
      <p>Distance alone isn't the whole picture. nostrito also factors in:</p>
      <ul>
        <li>
          <strong>Follower count from your WoT</strong> — if many of your
          follows also follow someone, that person is more trusted than someone
          reached by a single chain
        </li>
        <li>
          <strong>Mutual follows</strong> — bidirectional follow relationships
          carry more weight than one-way follows
        </li>
        <li>
          <strong>Bridge nodes</strong> — nostrito can identify which contacts
          act as "bridges" connecting you to a distant pubkey
        </li>
      </ul>

      <h2>Hop depths in practice</h2>
      <table className={styles.docsTable}>
        <thead>
          <tr>
            <th>Depth</th>
            <th>Who's included</th>
            <th>Typical size</th>
            <th>Trust level</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>1-hop</strong>
            </td>
            <td>People you directly follow</td>
            <td>50–500 pubkeys</td>
            <td>High — you chose to follow them</td>
          </tr>
          <tr>
            <td>
              <strong>2-hop</strong>
            </td>
            <td>People your follows follow</td>
            <td>5,000–50,000 pubkeys</td>
            <td>Medium — vouched for by someone you trust</td>
          </tr>
          <tr>
            <td>
              <strong>3-hop</strong>
            </td>
            <td>One more degree out</td>
            <td>100,000+ pubkeys</td>
            <td>Low — useful for spam filtering, not for curation</td>
          </tr>
        </tbody>
      </table>

      <div className={styles.callout}>
        <strong>Why 3 hops max?</strong> Beyond 3 hops, the graph expands so
        rapidly that nearly everyone on Nostr is included. At that point, trust
        distance stops being meaningful. nostrito defaults to 3 but you can lower
        it to 2 or 1 if you want a tighter circle.
      </div>

      <h2>Configuration</h2>
      <pre className={styles.codeBlock}>
        <span className={styles.key}>[wot]</span>
        {'\n'}
        <span className={styles.val}>max_depth</span> ={' '}
        <span className={styles.str}>3</span>
        {'        '}
        <span className={styles.comment}>
          # how many hops to compute (1, 2, or 3)
        </span>
        {'\n'}
        <span className={styles.val}>refresh_hours</span> ={' '}
        <span className={styles.str}>6</span>
        {'    '}
        <span className={styles.comment}>
          # how often to re-crawl follow lists
        </span>
      </pre>

      <h2>Storage integration</h2>
      <p>
        WoT depth directly controls what nostrito stores. You can set different
        policies per depth — for example, store all event types from 1-hop
        contacts but only short notes from 2-hop:
      </p>
      <pre className={styles.codeBlock}>
        <span className={styles.key}>[storage.others]</span>
        {'\n'}
        <span className={styles.val}>wot_depth</span> ={' '}
        <span className={styles.str}>2</span>
        {'          '}
        <span className={styles.comment}>
          # store events up to 2 hops away
        </span>
        {'\n'}
        <span className={styles.val}>depth_1_kinds</span> ={' '}
        <span className={styles.str}>"all"</span>
        {'  '}
        <span className={styles.comment}>
          # everything from direct follows
        </span>
        {'\n'}
        <span className={styles.val}>depth_2_kinds</span> = [
        <span className={styles.str}>1</span>]{'    '}
        <span className={styles.comment}>
          # only notes (kind:1) from 2-hop contacts
        </span>
      </pre>
      <p>
        Events from pubkeys outside your configured WoT depth are silently
        dropped — they never touch your database.
      </p>
    </>
  )
}

function BlossomMediaPage() {
  return (
    <>
      <h1>Blossom Media</h1>
      <p className={styles.lead}>
        nostrito automatically caches media from Blossom URLs, verified by hash.
      </p>

      <h2>What is Blossom?</h2>
      <p>
        Blossom is a content-addressed media hosting protocol for Nostr. Files
        are referenced by their SHA-256 hash, making them verifiable and
        portable.
      </p>

      <h2>How nostrito handles media</h2>
      <p>When nostrito encounters a Blossom URL in an event, it:</p>
      <ol>
        <li>
          Downloads the file to <code>~/.nostrito/blossom/</code>
        </li>
        <li>Verifies the SHA-256 hash matches</li>
        <li>Serves it locally when clients request it</li>
      </ol>

      <h2>Configuration</h2>
      <pre className={styles.codeBlock}>
        <span className={styles.key}>[blossom]</span>
        {'\n'}
        <span className={styles.val}>enabled</span> ={' '}
        <span className={styles.str}>true</span>
        {'\n'}
        <span className={styles.val}>images</span> ={' '}
        <span className={styles.str}>true</span>
        {'\n'}
        <span className={styles.val}>videos</span> ={' '}
        <span className={styles.str}>true</span>
        {'\n'}
        <span className={styles.val}>audio</span> ={' '}
        <span className={styles.str}>true</span>
        {'\n'}
        <span className={styles.val}>max_file_size_mb</span> ={' '}
        <span className={styles.str}>100</span>
      </pre>
    </>
  )
}

function AdvancedConfigPage() {
  return (
    <>
      <h1>Advanced Configuration</h1>
      <p className={styles.lead}>
        Fine-tune nostrito's behavior for power users.
      </p>

      <h2>Daemon Mode</h2>
      <p>
        nostrito can run as a background daemon, starting automatically on login:
      </p>
      <pre className={styles.codeBlock}>
        <span className={styles.comment}>
          # macOS: install as LaunchAgent
        </span>
        {'\n'}nostrito daemon install{'\n\n'}
        <span className={styles.comment}>
          # Linux: install as systemd service
        </span>
        {'\n'}nostrito daemon install --systemd{'\n\n'}
        <span className={styles.comment}># Manual start</span>
        {'\n'}nostrito daemon start
      </pre>

      <h2>Database Maintenance</h2>
      <p>Compact the database to reclaim space:</p>
      <pre className={styles.codeBlock}>
        nostrito db compact{'\n'}nostrito db stats
      </pre>

      <h2>Debug Logging</h2>
      <pre className={styles.codeBlock}>
        <span className={styles.comment}># Enable verbose logging</span>
        {'\n'}NOSTRITO_LOG=debug nostrito{'\n\n'}
        <span className={styles.comment}># Or in config</span>
        {'\n'}
        <span className={styles.key}>[logging]</span>
        {'\n'}
        <span className={styles.val}>level</span> ={' '}
        <span className={styles.str}>"debug"</span>
      </pre>

      <h2>Network Configuration</h2>
      <pre className={styles.codeBlock}>
        <span className={styles.key}>[network]</span>
        {'\n'}
        <span className={styles.val}>timeout_secs</span> ={' '}
        <span className={styles.str}>10</span>
        {'\n'}
        <span className={styles.val}>max_connections</span> ={' '}
        <span className={styles.str}>8</span>
        {'\n'}
        <span className={styles.val}>proxy</span> ={' '}
        <span className={styles.str}>"socks5://127.0.0.1:9050"</span>
        {'  '}
        <span className={styles.comment}># Tor support</span>
      </pre>
    </>
  )
}

function RelayApiPage() {
  return (
    <>
      <h1>Relay API</h1>
      <p className={styles.lead}>
        nostrito implements NIP-01 and additional NIPs for local relay
        functionality.
      </p>

      <h2>Supported NIPs</h2>
      <table className={styles.docsTable}>
        <thead>
          <tr>
            <th>NIP</th>
            <th>Description</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>NIP-01</code>
            </td>
            <td>Basic protocol flow</td>
            <td>Full</td>
          </tr>
          <tr>
            <td>
              <code>NIP-02</code>
            </td>
            <td>Follow List</td>
            <td>Full</td>
          </tr>
          <tr>
            <td>
              <code>NIP-09</code>
            </td>
            <td>Event Deletion</td>
            <td>Full</td>
          </tr>
          <tr>
            <td>
              <code>NIP-11</code>
            </td>
            <td>Relay Information</td>
            <td>Full</td>
          </tr>
          <tr>
            <td>
              <code>NIP-45</code>
            </td>
            <td>Counting results</td>
            <td>Planned</td>
          </tr>
        </tbody>
      </table>

      <h2>Connecting</h2>
      <p>Connect any NIP-01 compatible client to:</p>
      <pre className={styles.codeBlock}>ws://localhost:4869</pre>
    </>
  )
}

function FaqPage() {
  return (
    <>
      <h1>FAQ</h1>
      <p className={styles.lead}>
        Frequently asked questions about nostrito.
      </p>

      <h2>Is nostrito a full relay?</h2>
      <p>
        nostrito is a <strong>personal</strong> relay. It only accepts connections
        from localhost by default and only stores events from your Web of Trust.
        It's not designed to be a public relay.
      </p>

      <h2>Does nostrito work offline?</h2>
      <p>
        Yes! Once your events are synced, they're stored locally. Your Nostr
        client can read from nostrito even without an internet connection.
      </p>

      <h2>How much storage does it use?</h2>
      <p>
        That depends on your configuration. A typical setup with 2-hop WoT, 5 GB
        events quota, and 2 GB media quota uses about 2-5 GB total. Your own
        events are stored separately and don't count toward the quota.
      </p>

      <h2>Can I use it alongside other relays?</h2>
      <p>
        Absolutely. Add nostrito as one of your client's relays. It complements
        public relays by providing fast local access and offline capability.
      </p>

      <h2>Is my data encrypted?</h2>
      <p>
        nostrito stores data in a SQLite database on your machine. The data
        itself is not encrypted at rest (since it's already public Nostr events),
        but your machine's full-disk encryption protects it.
      </p>

      <h2>How do I back up my data?</h2>
      <p>
        Copy the <code>~/.nostrito/</code> directory. It contains the database
        and all cached media.
      </p>

      <h2>Can I run it on a server?</h2>
      <p>
        Yes, but nostrito is designed as a personal relay. If you want to expose
        it externally, consider using a reverse proxy with authentication.
      </p>
    </>
  )
}

const PAGE_COMPONENTS: Record<DocPage, () => React.JSX.Element> = {
  'getting-started': IntroductionPage,
  installation: InstallationPage,
  quickstart: QuickStartPage,
  configuration: ConfigFilePage,
  'relay-aliases': RelayAliasesPage,
  sync: SyncEnginePage,
  storage: StoragePage,
  wot: WebOfTrustPage,
  blossom: BlossomMediaPage,
  advanced: AdvancedConfigPage,
  api: RelayApiPage,
  faq: FaqPage,
}

export default function DocsPage() {
  const [activePage, setActivePage] = useState<DocPage>('getting-started')

  const handleNavClick = (page: DocPage) => {
    setActivePage(page)
    window.scrollTo(0, 0)
  }

  const ActiveComponent = PAGE_COMPONENTS[activePage]

  return (
    <>
      <SEO
        title="nostrito — Documentation"
        description="Documentation for nostrito, your personal Nostr relay."
        url="https://nostrito.com/docs"
      />

      {/* Docs Nav */}
      <nav className={styles.docsNav}>
        <Link to="/" className={styles.docsNavLogo}>
          <img
            src="/assets/nostrito-white.svg"
            alt="nostrito"
            className={styles.docsNavLogoImg}
          />
          nostrito
        </Link>
        <ul className={styles.docsNavLinks}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/docs" className={styles.docsNavLinkActive}>
              Docs
            </Link>
          </li>
          <li>
            <a
              href="https://github.com/nostrito/nostrito"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </li>
        </ul>
      </nav>

      {/* Layout */}
      <div className={styles.docsLayout}>
        {/* Sidebar */}
        <aside className={styles.docsSidebar}>
          {SIDEBAR_SECTIONS.map((section) => (
            <div key={section.title} className={styles.docsSidebarSection}>
              <div className={styles.docsSidebarTitle}>{section.title}</div>
              {section.links.map((link) => (
                <button
                  key={link.id}
                  className={`${styles.docsSidebarLink}${
                    activePage === link.id
                      ? ` ${styles.docsSidebarLinkActive}`
                      : ''
                  }`}
                  onClick={() => handleNavClick(link.id)}
                >
                  {link.label}
                </button>
              ))}
            </div>
          ))}
        </aside>

        {/* Content */}
        <div className={styles.docsContent}>
          <div className={`${styles.docsPage} ${styles.docsPageActive}`}>
            <ActiveComponent />
          </div>
        </div>
      </div>
    </>
  )
}
