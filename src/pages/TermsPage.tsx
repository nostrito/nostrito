import { Link } from 'react-router-dom'
import SEO from '@/components/seo/SEO'
import styles from '@/styles/terms.module.css'

export default function TermsPage() {
  return (
    <div className={styles.page}>
      <SEO
        title="nostrito — terms"
        description="terms and conditions for using nostrito, an open source personal social network released under the MIT license."
        url="https://nostrito.com/terms"
      />

      {/* nav */}
      <nav className={styles.nav}>
        <Link to="/" className={styles.navLogo}>
          <img
            src="/assets/nostrito-white.svg"
            alt="nostrito"
            className={styles.navLogoImg}
          />
          nostrito
        </Link>
        <Link to="/" className={styles.navBack}>
          &larr; back to site
        </Link>
      </nav>

      <div className={styles.container}>
        {/* header */}
        <div className={styles.header}>
          <h1>terms &amp; conditions</h1>
          <p>
            please read these terms carefully before using nostrito.
          </p>
          <p className={styles.effectiveDate}>
            effective date: march 14, 2026
          </p>
        </div>

        {/* 1. acceptance of terms */}
        <div className={styles.section}>
          <h2>1. acceptance of terms</h2>
          <p>
            by downloading, installing, or using nostrito ("the software"),
            you agree to be bound by these terms and conditions. if you do not
            agree to these terms, do not use the software.
          </p>
          <p>
            nostrito is an open source personal social network and personal
            nostr relay. the software is provided by los acosta and made
            available at{' '}
            <a
              href="https://nostrito.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              nostrito.com
            </a>{' '}
            and{' '}
            <a
              href="https://github.com/nostrito/nostrito"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/nostrito/nostrito
            </a>
            .
          </p>
        </div>

        {/* 2. open source software */}
        <div className={styles.section}>
          <h2>2. open source software</h2>
          <p>
            nostrito is free and open source software. the complete source code
            is publicly available on github and anyone is free to inspect,
            modify, and distribute it in accordance with the license terms.
          </p>
          <p>
            we believe in transparency. you can verify exactly what the
            software does by reading the source code.
          </p>
        </div>

        {/* 3. MIT license */}
        <div className={styles.section}>
          <h2>3. MIT license</h2>
          <p>
            nostrito is released under the MIT license. in summary, this means:
          </p>
          <ul>
            <li>you may use the software for any purpose</li>
            <li>you may modify the software</li>
            <li>you may distribute the software</li>
            <li>you may use the software commercially</li>
            <li>
              the software is provided "as is" without warranty of any kind
            </li>
          </ul>
          <p>
            the full text of the MIT license is available at{' '}
            <a
              href="https://github.com/nostrito/nostrito/blob/main/LICENSE"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/nostrito/nostrito/blob/main/LICENSE
            </a>
            . in the event of any conflict between these terms and the MIT
            license, the MIT license shall prevail with respect to the
            licensing of the source code.
          </p>
          <div className={styles.codeBlock}>
{`mit license

copyright (c) los acosta

permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
"software"), to deal in the software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the software, and to
permit persons to whom the software is furnished to do so, subject to
the following conditions:

the above copyright notice and this permission notice shall be
included in all copies or substantial portions of the software.

the software is provided "as is", without warranty of any kind,
express or implied.`}
          </div>
        </div>

        {/* 4. no warranty */}
        <div className={styles.section}>
          <h2>4. no warranty</h2>
          <p>
            the software is provided "as is" and "as available", without
            warranty of any kind, express or implied, including but not
            limited to the warranties of merchantability, fitness for a
            particular purpose, and noninfringement.
          </p>
          <p>
            in no event shall the authors, copyright holders, or contributors
            be liable for any claim, damages, or other liability, whether in
            an action of contract, tort, or otherwise, arising from, out of,
            or in connection with the software or the use or other dealings
            in the software.
          </p>
          <p>
            you use nostrito entirely at your own risk.
          </p>
        </div>

        {/* 5. limitation of liability */}
        <div className={styles.section}>
          <h2>5. limitation of liability</h2>
          <p>
            to the maximum extent permitted by applicable law, in no event
            shall los acosta or any contributors to the nostrito project be
            liable for any indirect, incidental, special, consequential, or
            punitive damages, or any loss of profits or revenues, whether
            incurred directly or indirectly, or any loss of data, use,
            goodwill, or other intangible losses resulting from:
          </p>
          <ul>
            <li>your use of or inability to use the software</li>
            <li>any unauthorized access to or alteration of your data</li>
            <li>any bugs, viruses, or other harmful components</li>
            <li>any interruption or cessation of functionality</li>
            <li>
              any other matter relating to the software
            </li>
          </ul>
        </div>

        {/* 6. user data and privacy */}
        <div className={styles.section}>
          <h2>6. user data &amp; privacy</h2>
          <p>
            nostrito is designed with privacy as a core principle. the software
            operates as a personal relay that runs locally on your machine.
          </p>
          <ul>
            <li>
              all your data is stored locally on your device
            </li>
            <li>
              nostrito does not collect, transmit, or store any personal data
              on external servers
            </li>
            <li>
              no analytics, telemetry, or tracking of any kind is included
              in the software
            </li>
            <li>
              you are solely responsible for the security and backup of your
              local data
            </li>
          </ul>
          <p>
            because nostrito is a nostr relay, you may choose to connect it to
            other relays or clients on the nostr network. any data you publish
            to external relays is governed by those relays' terms and policies,
            not ours. we have no control over data once it leaves your local
            relay.
          </p>
        </div>

        {/* 7. use at your own risk */}
        <div className={styles.section}>
          <h2>7. use at your own risk</h2>
          <p>
            nostrito is experimental software under active development. while we
            strive to build reliable software, you acknowledge that:
          </p>
          <ul>
            <li>
              the software may contain bugs or errors
            </li>
            <li>
              features may change or be removed without notice
            </li>
            <li>
              data loss is possible — always keep backups
            </li>
            <li>
              the software is not guaranteed to be suitable for any particular
              purpose
            </li>
          </ul>
        </div>

        {/* 8. third-party software */}
        <div className={styles.section}>
          <h2>8. third-party software</h2>
          <p>
            nostrito may include or depend on third-party open source libraries
            and components. each of these components is subject to its own
            license terms. a complete list of dependencies and their licenses
            can be found in the project's source repository.
          </p>
        </div>

        {/* 9. modifications to terms */}
        <div className={styles.section}>
          <h2>9. modifications to terms</h2>
          <p>
            we reserve the right to modify these terms at any time. changes
            will be reflected on this page with an updated effective date. your
            continued use of the software after any changes constitutes
            acceptance of the updated terms.
          </p>
          <p>
            since nostrito is open source, you can always review the history of
            changes to these terms in the project's git repository.
          </p>
        </div>

        {/* 10. governing law */}
        <div className={styles.section}>
          <h2>10. governing law</h2>
          <p>
            these terms shall be governed by and construed in accordance with
            applicable law, without regard to conflict of law principles. any
            disputes arising from these terms or the use of the software shall
            be resolved in accordance with applicable law.
          </p>
        </div>

        {/* 11. contact */}
        <div className={styles.section}>
          <h2>11. contact</h2>
          <p>
            if you have any questions about these terms, please reach out
            through our github repository:
          </p>
          <p>
            <a
              href="https://github.com/nostrito/nostrito/issues"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/nostrito/nostrito/issues
            </a>
          </p>
        </div>
      </div>

      {/* footer */}
      <footer className={styles.footer}>
        <Link to="/">&larr; back to nostrito.com</Link>
      </footer>
    </div>
  )
}
