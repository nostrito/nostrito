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
    title: 'getting started',
    links: [
      { id: 'getting-started', label: 'introduction' },
      { id: 'installation', label: 'installation' },
      { id: 'quickstart', label: 'quick start' },
    ],
  },
  {
    title: 'configuration',
    links: [
      { id: 'configuration', label: 'config file' },
      { id: 'relay-aliases', label: 'relay aliases' },
    ],
  },
  {
    title: 'features',
    links: [
      { id: 'sync', label: 'sync engine' },
      { id: 'storage', label: 'storage' },
      { id: 'wot', label: 'web of trust' },
      { id: 'blossom', label: 'blossom media' },
    ],
  },
  {
    title: 'advanced',
    links: [
      { id: 'advanced', label: 'advanced config' },
      { id: 'api', label: 'relay API' },
    ],
  },
  {
    title: 'help',
    links: [{ id: 'faq', label: 'FAQ' }],
  },
]

function IntroductionPage() {
  return (
    <>
      <h1>introduction</h1>
      <p className={styles.lead}>
        nostrito is a personal social network that runs on your machine. it
        builds your web of trust, syncs your feed, and caches your media — all
        locally.
      </p>

      <h2>what is nostrito?</h2>
      <p>
        nostrito is a lightweight, single-binary relay daemon written in rust. it
        connects to the nostr network, computes your web of trust from your
        follow list, and stores only the events and media from people you trust.
      </p>
      <p>
        your favorite nostr client (damus, amethyst, coracle, etc.) connects to
        nostrito over a local websocket, so your feed loads instantly — no
        network latency, no downtime, no dependency on third-party
        infrastructure.
      </p>

      <h2>key features</h2>
      <ul>
        <li>
          <strong>WoT-aware sync</strong> — only stores events from trusted
          pubkeys
        </li>
        <li>
          <strong>local NIP-01 relay</strong> — works with any nostr client
        </li>
        <li>
          <strong>blossom media cache</strong> — images, videos, audio stored
          locally
        </li>
        <li>
          <strong>human-friendly config</strong> — relay aliases, TOML format
        </li>
        <li>
          <strong>offline-first</strong> — your data is always available
        </li>
        <li>
          <strong>single binary</strong> — no runtime deps, no docker, no
          node.js
        </li>
      </ul>

      <h2>how it works</h2>
      <p>
        when you start nostrito for the first time, you provide your{' '}
        <code>npub</code>. nostrito then:
      </p>
      <ol>
        <li>fetches your follow list (kind:3) from configured relays</li>
        <li>computes your web of trust graph (configurable depth)</li>
        <li>syncs events from trusted pubkeys</li>
        <li>caches blossom media locally</li>
        <li>serves everything via a local websocket relay</li>
      </ol>

      <div className={styles.callout}>
        <strong>tip:</strong> point your nostr client at{' '}
        <code>ws://localhost:4869</code> and your feed will load from your local
        machine — even when you're offline.
      </div>
    </>
  )
}

function InstallationPage() {
  return (
    <>
      <h1>installation</h1>
      <p className={styles.lead}>
        nostrito ships as a single binary for macOS, linux, and windows. no
        dependencies required.
      </p>

      <h2>macOS</h2>
      <p>
        download the latest <code>.dmg</code> from the github releases page, or
        install via homebrew:
      </p>
      <pre className={styles.codeBlock}>
        <span className={styles.comment}># install via homebrew</span>
        {'\n'}brew install nostrito/tap/nostrito
      </pre>

      <h2>linux</h2>
      <p>download the binary for your architecture (x86_64 or aarch64):</p>
      <pre className={styles.codeBlock}>
        <span className={styles.comment}># download and install</span>
        {'\n'}curl -L
        https://github.com/nostrito/nostrito/releases/latest/download/nostrito-linux-x86_64
        -o nostrito{'\n'}chmod +x nostrito{'\n'}sudo mv nostrito /usr/local/bin/
      </pre>

      <h2>windows</h2>
      <p>
        download the <code>.exe</code> from the github releases page and add it
        to your PATH.
      </p>

      <h2>build from source</h2>
      <pre className={styles.codeBlock}>
        <span className={styles.comment}># requires rust 1.75+</span>
        {'\n'}git clone https://github.com/nostrito/nostrito.git{'\n'}cd nostrito
        {'\n'}cargo build --release
      </pre>
    </>
  )
}

function QuickStartPage() {
  return (
    <>
      <h1>quick start</h1>
      <p className={styles.lead}>get nostrito running in under a minute.</p>

      <h2>1. start nostrito</h2>
      <p>
        open the app (or run the binary). you'll be greeted with the setup
        wizard.
      </p>

      <h2>2. enter your npub</h2>
      <p>
        paste your nostr public key. nostrito will set up the database and begin
        computing your web of trust.
      </p>

      <h2>3. pick your relays</h2>
      <p>
        select which relays to sync from. you can use friendly names —{' '}
        <code>primal</code>, <code>damus</code>, <code>nos</code> — instead of
        full websocket URLs.
      </p>

      <h2>4. configure storage</h2>
      <p>
        set how much space to allocate for others' events and media. your own
        events are always stored at 100%.
      </p>

      <h2>5. connect your client</h2>
      <p>
        add <code>ws://localhost:4869</code> to your nostr client's relay list.
        your feed will load from your local relay.
      </p>

      <div className={styles.callout}>
        <strong>that's it!</strong> nostrito runs in the background, syncing your
        network and serving your feed locally.
      </div>
    </>
  )
}

function ConfigFilePage() {
  return (
    <>
      <h1>config file</h1>
      <p className={styles.lead}>
        nostrito uses a TOML configuration file at{' '}
        <code>~/.nostrito/config.toml</code>.
      </p>

      <h2>default configuration</h2>
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

      <h2>environment variables</h2>
      <p>
        any config value can be overridden with environment variables using the{' '}
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
      <h1>relay aliases</h1>
      <p className={styles.lead}>
        you never have to type a <code>wss://</code> URL. nostrito uses friendly
        names for every relay, and handles the mapping internally.
      </p>

      <h2>why aliases?</h2>
      <p>
        websocket URLs are ugly and easy to mistype. nostrito lets you refer to
        relays by short, memorable names — in the setup wizard, in the config
        file, and everywhere else. when you pick "damus" during onboarding,
        nostrito knows that means <code>wss://relay.damus.io</code>. you never
        see the raw URL unless you go looking for it.
      </p>

      <h2>built-in aliases</h2>
      <p>
        nostrito ships with 8 built-in aliases covering the most popular nostr
        relays:
      </p>
      <table className={styles.docsTable}>
        <thead>
          <tr>
            <th>alias</th>
            <th>resolves to</th>
            <th>description</th>
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
            <td>popular social relay with fast global coverage</td>
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
            <td>open social network relay</td>
          </tr>
          <tr>
            <td>
              <code>snort</code>
            </td>
            <td>
              <code>wss://relay.snort.social</code>
            </td>
            <td>web client relay, popular with browser users</td>
          </tr>
          <tr>
            <td>
              <code>coracle</code>
            </td>
            <td>
              <code>wss://relay.coracle.social</code>
            </td>
            <td>privacy-focused, good for discovery</td>
          </tr>
          <tr>
            <td>
              <code>nostr.wine</code>
            </td>
            <td>
              <code>wss://nostr.wine</code>
            </td>
            <td>curated content, paid relay with quality filtering</td>
          </tr>
          <tr>
            <td>
              <code>amethyst</code>
            </td>
            <td>
              <code>wss://nostr.band</code>
            </td>
            <td>android community relay and search index</td>
          </tr>
          <tr>
            <td>
              <code>yakihonne</code>
            </td>
            <td>
              <code>wss://relay.yakihonne.com</code>
            </td>
            <td>long-form content and articles</td>
          </tr>
        </tbody>
      </table>

      <h2>how resolution works</h2>
      <p>
        when nostrito sees a relay name, it checks the alias table first. if the
        name matches a built-in alias, it uses the corresponding{' '}
        <code>wss://</code> URL. if no alias matches, nostrito treats the name as
        a raw URL — so you can always use a full <code>wss://</code> address if
        you need to connect to a relay that isn't in the alias list.
      </p>

      <div className={styles.callout}>
        <strong>tip:</strong> in the setup wizard, you just toggle relay names on
        and off. nostrito resolves them to real URLs behind the scenes. you can
        mix aliases and raw URLs freely in the config file.
      </div>

      <h2>custom aliases</h2>
      <p>
        add your own aliases in the config file. useful for private relays or
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
        custom aliases work exactly like built-in ones — use them anywhere you'd
        use a relay name.
      </p>
    </>
  )
}

function SyncEnginePage() {
  return (
    <>
      <h1>sync engine</h1>
      <p className={styles.lead}>
        nostrito syncs your data from the nostr network using a 4-tier priority
        system. it fetches the most important things first, works its way through
        less urgent data in the background, and is always polite to the relays it
        connects to.
      </p>

      <h2>the 4-tier system</h2>
      <p>
        not all data is equally urgent. when you first launch nostrito (or after
        a long time offline), it needs to fetch your profile, your follows,
        recent notes, and eventually the broader social graph. instead of trying
        to do everything at once, nostrito works through four tiers in order:
      </p>

      <h3>tier 1 — critical (completes in seconds)</h3>
      <p>
        the first thing nostrito does is fetch <strong>your own profile</strong>{' '}
        (kind:0 metadata) and <strong>your follow list</strong> (kind:3 contact
        list). this is a single request to one relay — fast and lightweight. your
        follow list seeds the entire web of trust graph, so everything else
        depends on it.
      </p>
      <p>
        once tier 1 completes, nostrito knows who you follow. the app becomes
        usable immediately.
      </p>

      <h3>tier 2 — important (completes in minutes)</h3>
      <p>
        now that nostrito knows your follow list, it fetches{' '}
        <strong>recent notes</strong> (kind:1 events) from your direct follows.
        it only looks at the last 7 days and caps at 500 events, so this stays
        fast.
      </p>
      <p>
        pubkeys are processed in batches of 20, with a short 300ms pause between
        batches to avoid hammering the relay. after tier 2, your feed is
        populated with recent content from the people you care about most.
      </p>

      <h3>tier 3 — background (completes in hours)</h3>
      <p>
        this is the WoT crawl. for each person you follow, nostrito fetches{' '}
        <em>their</em> follow list (kind:3) to discover follows-of-follows. this
        builds out the 2-hop and 3-hop layers of your trust graph.
      </p>
      <p>
        tier 3 runs slowly on purpose — 10 pubkeys per batch with 2-second
        pauses between them. if you're actively using the app (scrolling your
        feed, interacting with the UI), tier 3 pauses entirely and resumes when
        you're idle. it also checkpoints its progress to the database, so if you
        quit and reopen nostrito, it picks up where it left off instead of
        starting over.
      </p>

      <h3>tier 4 — archive (completes in days)</h3>
      <p>the lowest priority tier handles everything else:</p>
      <ul>
        <li>
          <strong>blossom media downloads</strong> — images, videos, and audio
          from events nostrito has already stored
        </li>
        <li>
          <strong>historical events</strong> — notes older than 7 days from your
          follows
        </li>
        <li>
          <strong>deep WoT</strong> — 3-hop+ pubkeys, if configured
        </li>
      </ul>
      <p>
        tier 4 only starts after tiers 1–3 are complete. it runs very slowly — 5
        seconds between batches — and can take days to finish for a large social
        graph. that's fine. this is background work that fills in the gaps over
        time.
      </p>

      <div className={styles.callout}>
        <strong>why tiers?</strong> most relay apps try to fetch everything at
        once, which overwhelms relays and makes the app feel slow on first
        launch. nostrito's tiered approach means your feed is usable in seconds,
        even while the full graph takes hours to build.
      </div>

      <h2>politeness policies</h2>
      <p>
        nostrito is designed to be a good citizen on the nostr network. it never
        floods relays with requests.
      </p>

      <h3>rate limiting</h3>
      <p>
        by default, nostrito sends no more than{' '}
        <strong>10 requests per minute</strong> to any single relay. if a relay
        sends a NOTICE message containing the words "rate" or "limit," nostrito
        immediately pauses all requests to that relay for 60 seconds.
      </p>

      <h3>exponential backoff</h3>
      <p>
        when a relay connection fails, nostrito doesn't retry immediately. it
        backs off exponentially:
      </p>
      <ul>
        <li>1st failure: wait 5 seconds</li>
        <li>2nd failure: wait 10 seconds</li>
        <li>3rd failure: wait 30 seconds</li>
        <li>4th failure: wait 60 seconds</li>
        <li>5th failure: wait 120 seconds</li>
        <li>maximum: 300 seconds (5 minutes)</li>
      </ul>
      <p>
        the backoff resets after a successful connection. this prevents nostrito
        from hammering a relay that's temporarily down.
      </p>

      <h3>
        the <code>since</code> filter — never re-fetch old events
      </h3>
      <p>
        after the initial sync, every subsequent request includes a{' '}
        <code>since</code> timestamp set to the most recent event nostrito has
        seen from that relay. this means nostrito only asks for <em>new</em>{' '}
        events — it never re-downloads data it already has. this dramatically
        reduces bandwidth and relay load over time.
      </p>

      <h3>primary relay</h3>
      <p>
        the first relay in your configuration is treated as the{' '}
        <strong>primary relay</strong>. nostrito sends most of its requests
        there. other relays are used as fallbacks — if the primary doesn't have
        what nostrito needs, it tries the others in order. this concentrates load
        on a single relay (which you presumably trust) rather than spreading
        requests across many.
      </p>

      <h2>sync progress</h2>
      <p>
        nostrito emits real-time progress events as it syncs. the dashboard shows
        which tier is currently active, how many events have been fetched, and
        which relay is being queried. when a tier completes, the app updates
        automatically.
      </p>

      <h2>surviving restarts</h2>
      <p>
        all sync progress is persisted to the database. if you quit nostrito
        mid-sync and reopen it later, it resumes from where it left off. tier 3
        in particular tracks exactly which pubkeys have been processed, so it
        doesn't re-crawl follow lists it's already seen.
      </p>
    </>
  )
}

function StoragePage() {
  return (
    <>
      <h1>storage</h1>
      <p className={styles.lead}>
        nostrito gives you full control over what gets stored and how much disk
        space to use. your data is always safe; everyone else's is quota-based.
      </p>

      <h2>your events — always 100%</h2>
      <p>
        every event you've authored (notes, reactions, zaps, profile updates —
        everything) is stored permanently. so is any media you've posted via
        blossom. this is non-negotiable: your data is yours, and nostrito never
        deletes it, no matter how tight storage gets.
      </p>
      <p>
        this guarantee extends to all event kinds, all media types, and all time
        periods. if you wrote it, nostrito keeps it.
      </p>

      <h2>others' events — quota-based</h2>
      <p>
        events from people in your web of trust are stored up to the quota you
        set during setup. you configure two separate limits:
      </p>
      <ul>
        <li>
          <strong>events quota</strong> — how many GB to allocate for text events
          (notes, replies, reactions, etc.) from others
        </li>
        <li>
          <strong>media quota</strong> — how many GB to allocate for blossom
          media (images, videos, audio) from others
        </li>
      </ul>
      <p>
        within the media quota, you can toggle which types to cache: images,
        videos, and audio are each independently selectable. if you only care
        about images, turn off videos and audio to save space.
      </p>

      <h2>blossom media verification</h2>
      <p>
        when nostrito downloads media from a blossom URL, it doesn't just save
        the file blindly. every download is verified against the SHA-256 hash
        embedded in the blossom URL. if the hash doesn't match, the file is
        discarded. this prevents tampered or corrupted media from polluting your
        local cache.
      </p>
      <p>
        verified media is stored in <code>~/.nostrito/blossom/</code>, organized
        by hash. when your nostr client requests the file, nostrito serves it
        directly from disk — no network round-trip needed.
      </p>

      <h2>auto-cleanup</h2>
      <p>
        when either quota fills up, nostrito automatically makes room using your
        chosen strategy:
      </p>
      <ul>
        <li>
          <strong>oldest first</strong> — deletes the oldest events and media
          first. simple and predictable.
        </li>
        <li>
          <strong>least interacted</strong> — keeps events you've engaged with
          (replied to, reacted to, zapped) and removes the ones you haven't.
          smarter, but slightly more complex.
        </li>
      </ul>
      <p>
        cleanup never touches your own events. only others' data is subject to
        quota limits.
      </p>

      <h2>WoT-aware storage priority</h2>
      <p>
        not all contacts are equal. events from 1-hop contacts (people you
        directly follow) get storage priority over 2-hop or 3-hop contacts. when
        cleanup runs, it removes distant contacts' data first.
      </p>

      <h2>database</h2>
      <p>
        all event data lives in a single SQLite database at{' '}
        <code>~/.nostrito/data.db</code>, using WAL mode for fast concurrent
        reads. media files are stored separately in{' '}
        <code>~/.nostrito/blossom/</code>. to back up everything, just copy the{' '}
        <code>~/.nostrito/</code> directory.
      </p>
    </>
  )
}

function WebOfTrustPage() {
  return (
    <>
      <h1>web of trust</h1>
      <p className={styles.lead}>
        nostrito builds a trust graph from the nostr network and uses it to
        decide which events to store, serve, and prioritize. no centralized
        authority — just math on follow lists.
      </p>

      <h2>the core idea</h2>
      <p>
        on nostr, every user publishes a <strong>follow list</strong> (a kind:3
        event) that says "these are the people i follow." nostrito reads these
        lists and builds a graph of who trusts whom. the closer someone is to you
        in this graph, the more nostrito trusts them.
      </p>

      <h2>how the graph is built</h2>
      <p>
        it starts with you. nostrito fetches your kind:3 event from a relay and
        extracts every pubkey you follow. those are your{' '}
        <strong>1-hop contacts</strong> — people you directly trust.
      </p>
      <p>
        then nostrito fetches the kind:3 events for each of your follows. the
        people <em>they</em> follow (but you don't) become your{' '}
        <strong>2-hop contacts</strong>. one more round gives you{' '}
        <strong>3-hop contacts</strong>.
      </p>
      <p>
        the result is a directed graph with you at the center. nostrito stores
        this graph in memory for fast lookups and persists it to SQLite so it
        survives restarts.
      </p>

      <h2>BFS algorithm</h2>
      <p>
        nostrito uses <strong>breadth-first search (BFS)</strong> to compute
        trust distances. starting from your pubkey, it explores the graph layer
        by layer:
      </p>
      <ol>
        <li>
          <strong>layer 0:</strong> you. trust distance = 0.
        </li>
        <li>
          <strong>layer 1:</strong> everyone in your follow list. trust distance
          = 1.
        </li>
        <li>
          <strong>layer 2:</strong> everyone followed by layer-1 contacts (who
          isn't already in layer 0 or 1). trust distance = 2.
        </li>
        <li>
          <strong>layer 3:</strong> same pattern, one more hop out. trust
          distance = 3.
        </li>
      </ol>
      <p>
        BFS guarantees that the first time nostrito reaches a pubkey is via the{' '}
        <em>shortest</em> path, so the assigned trust distance is always the
        minimum number of hops from you.
      </p>

      <h2>trust scoring</h2>
      <p>distance alone isn't the whole picture. nostrito also factors in:</p>
      <ul>
        <li>
          <strong>follower count from your WoT</strong> — if many of your
          follows also follow someone, that person is more trusted than someone
          reached by a single chain
        </li>
        <li>
          <strong>mutual follows</strong> — bidirectional follow relationships
          carry more weight than one-way follows
        </li>
        <li>
          <strong>bridge nodes</strong> — nostrito can identify which contacts
          act as "bridges" connecting you to a distant pubkey
        </li>
      </ul>

      <h2>hop depths in practice</h2>
      <table className={styles.docsTable}>
        <thead>
          <tr>
            <th>depth</th>
            <th>who's included</th>
            <th>typical size</th>
            <th>trust level</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <strong>1-hop</strong>
            </td>
            <td>people you directly follow</td>
            <td>50–500 pubkeys</td>
            <td>high — you chose to follow them</td>
          </tr>
          <tr>
            <td>
              <strong>2-hop</strong>
            </td>
            <td>people your follows follow</td>
            <td>5,000–50,000 pubkeys</td>
            <td>medium — vouched for by someone you trust</td>
          </tr>
          <tr>
            <td>
              <strong>3-hop</strong>
            </td>
            <td>one more degree out</td>
            <td>100,000+ pubkeys</td>
            <td>low — useful for spam filtering, not for curation</td>
          </tr>
        </tbody>
      </table>

      <div className={styles.callout}>
        <strong>why 3 hops max?</strong> beyond 3 hops, the graph expands so
        rapidly that nearly everyone on nostr is included. at that point, trust
        distance stops being meaningful. nostrito defaults to 3 but you can lower
        it to 2 or 1 if you want a tighter circle.
      </div>

      <h2>configuration</h2>
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

      <h2>storage integration</h2>
      <p>
        WoT depth directly controls what nostrito stores. you can set different
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
        events from pubkeys outside your configured WoT depth are silently
        dropped — they never touch your database.
      </p>
    </>
  )
}

function BlossomMediaPage() {
  return (
    <>
      <h1>blossom media</h1>
      <p className={styles.lead}>
        nostrito automatically caches media from blossom URLs, verified by hash.
      </p>

      <h2>what is blossom?</h2>
      <p>
        blossom is a content-addressed media hosting protocol for nostr. files
        are referenced by their SHA-256 hash, making them verifiable and
        portable.
      </p>

      <h2>how nostrito handles media</h2>
      <p>when nostrito encounters a blossom URL in an event, it:</p>
      <ol>
        <li>
          downloads the file to <code>~/.nostrito/blossom/</code>
        </li>
        <li>verifies the SHA-256 hash matches</li>
        <li>serves it locally when clients request it</li>
      </ol>

      <h2>configuration</h2>
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
      <h1>advanced configuration</h1>
      <p className={styles.lead}>
        fine-tune nostrito's behavior for power users.
      </p>

      <h2>daemon mode</h2>
      <p>
        nostrito can run as a background daemon, starting automatically on login:
      </p>
      <pre className={styles.codeBlock}>
        <span className={styles.comment}>
          # macOS: install as LaunchAgent
        </span>
        {'\n'}nostrito daemon install{'\n\n'}
        <span className={styles.comment}>
          # linux: install as systemd service
        </span>
        {'\n'}nostrito daemon install --systemd{'\n\n'}
        <span className={styles.comment}># manual start</span>
        {'\n'}nostrito daemon start
      </pre>

      <h2>database maintenance</h2>
      <p>compact the database to reclaim space:</p>
      <pre className={styles.codeBlock}>
        nostrito db compact{'\n'}nostrito db stats
      </pre>

      <h2>debug logging</h2>
      <pre className={styles.codeBlock}>
        <span className={styles.comment}># enable verbose logging</span>
        {'\n'}NOSTRITO_LOG=debug nostrito{'\n\n'}
        <span className={styles.comment}># or in config</span>
        {'\n'}
        <span className={styles.key}>[logging]</span>
        {'\n'}
        <span className={styles.val}>level</span> ={' '}
        <span className={styles.str}>"debug"</span>
      </pre>

      <h2>network configuration</h2>
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
        <span className={styles.comment}># tor support</span>
      </pre>
    </>
  )
}

function RelayApiPage() {
  return (
    <>
      <h1>relay API</h1>
      <p className={styles.lead}>
        nostrito implements NIP-01 and additional NIPs for local relay
        functionality.
      </p>

      <h2>supported NIPs</h2>
      <table className={styles.docsTable}>
        <thead>
          <tr>
            <th>NIP</th>
            <th>description</th>
            <th>status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <code>NIP-01</code>
            </td>
            <td>basic protocol flow</td>
            <td>full</td>
          </tr>
          <tr>
            <td>
              <code>NIP-02</code>
            </td>
            <td>follow list</td>
            <td>full</td>
          </tr>
          <tr>
            <td>
              <code>NIP-09</code>
            </td>
            <td>event deletion</td>
            <td>full</td>
          </tr>
          <tr>
            <td>
              <code>NIP-11</code>
            </td>
            <td>relay information</td>
            <td>full</td>
          </tr>
          <tr>
            <td>
              <code>NIP-45</code>
            </td>
            <td>counting results</td>
            <td>planned</td>
          </tr>
        </tbody>
      </table>

      <h2>connecting</h2>
      <p>connect any NIP-01 compatible client to:</p>
      <pre className={styles.codeBlock}>ws://localhost:4869</pre>
    </>
  )
}

function FaqPage() {
  return (
    <>
      <h1>FAQ</h1>
      <p className={styles.lead}>
        frequently asked questions about nostrito.
      </p>

      <h2>is nostrito a full relay?</h2>
      <p>
        nostrito is a <strong>personal</strong> relay. it only accepts connections
        from localhost by default and only stores events from your web of trust.
        it's not designed to be a public relay.
      </p>

      <h2>does nostrito work offline?</h2>
      <p>
        yes! once your events are synced, they're stored locally. your nostr
        client can read from nostrito even without an internet connection.
      </p>

      <h2>how much storage does it use?</h2>
      <p>
        that depends on your configuration. a typical setup with 2-hop WoT, 5 GB
        events quota, and 2 GB media quota uses about 2-5 GB total. your own
        events are stored separately and don't count toward the quota.
      </p>

      <h2>can i use it alongside other relays?</h2>
      <p>
        absolutely. add nostrito as one of your client's relays. it complements
        public relays by providing fast local access and offline capability.
      </p>

      <h2>is my data encrypted?</h2>
      <p>
        nostrito stores data in a SQLite database on your machine. the data
        itself is not encrypted at rest (since it's already public nostr events),
        but your machine's full-disk encryption protects it.
      </p>

      <h2>how do i back up my data?</h2>
      <p>
        copy the <code>~/.nostrito/</code> directory. it contains the database
        and all cached media.
      </p>

      <h2>can i run it on a server?</h2>
      <p>
        yes, but nostrito is designed as a personal relay. if you want to expose
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
        title="nostrito — documentation"
        description="documentation for nostrito, your personal social network."
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
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/docs" className={styles.docsNavLinkActive}>
              docs
            </Link>
          </li>
          <li>
            <a
              href="https://github.com/nostrito/nostrito"
              target="_blank"
              rel="noopener noreferrer"
            >
              github
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
