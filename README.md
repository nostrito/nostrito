# nostrito

> Your relay. Your network. Your machine.

nostrito is a personal Nostr mini-relay that lives on your computer. It loads your web of trust automatically, syncs your feed from your outbound relays, stores everything locally — including Blossom media — and serves it back to your clients while your machine is on.

---

## What it does

- **Loads your WoT** — give it your npub and it figures out who you trust
- **Syncs your feed** — fetches events from your network whenever it's awake
- **Stores locally** — events + Blossom media (images, videos) saved on your machine
- **Serves your clients** — configure it as an inbound relay and get a WoT-filtered feed
- **Friendly config** — pick relays by name (`primal`, `damus`) not by URL

## How it works

nostrito runs as a background daemon. When your machine wakes up, it connects to your outbound relays and pulls the latest events from your web of trust. While running, it can also serve as a local relay — so any Nostr client pointed at it gets a clean, curated feed.

It's not always live. It lives when you live. But whenever it's up, it's working.

---

## Roadmap

- [ ] Core relay server (NIP-01)
- [ ] WoT sync engine (BFS from npub)
- [ ] Blossom media caching
- [ ] Friendly relay name resolution
- [ ] Background daemon (systemd / launchd)
- [ ] CLI interface
- [ ] Gossip protocol + Tor links (future)

---

## Status

🚧 Early development. Specs and architecture being defined.

---

## Links

- Landing: [nostrito.com](https://nostrito.com)
- Spec: coming soon
