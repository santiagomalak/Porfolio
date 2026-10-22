#!/usr/bin/env node
// Blocking dependency-vulnerability gate for CI (see CONSTRAINTS.md).
//
// Fails on any high/critical `npm audit` finding, except those covered by a
// known exception listed below. Each exception mirrors a row in CONSTRAINTS.md
// ("Known exceptions") and carries an expiry date: once it passes, the
// exception stops applying and CI goes red until the underlying upgrade lands
// or the exception is re-reviewed in CONSTRAINTS.md.
//
// Exceptions match on the installed path (`nodes` in npm audit's JSON), not
// just the package name, so a *new* vulnerable copy of the same package in a
// different place isn't silently waved through.

import { execSync } from 'node:child_process'

const EXCEPTIONS = [
  {
    id: 'E1',
    reason: 'next@14 advisories — fix needs the Next 16 major migration',
    expires: '2026-12-01',
    nodes: ['node_modules/next', 'node_modules/next/node_modules/postcss'],
  },
  {
    id: 'E3',
    reason: 'Tailwind 3 build-time toolchain (dev-only) — fix needs the Tailwind 4 major migration',
    expires: '2026-12-01',
    nodes: [
      'node_modules/tailwindcss',
      'node_modules/braces',
      'node_modules/chokidar',
      'node_modules/micromatch',
      'node_modules/fast-glob',
      'node_modules/postcss-nested',
      'node_modules/postcss-selector-parser',
    ],
  },
]

const BLOCKING = new Set(['high', 'critical'])
const today = new Date().toISOString().slice(0, 10)

let raw
try {
  raw = execSync('npm audit --json', { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] })
} catch (err) {
  // npm audit exits non-zero when it finds anything; the JSON is still on stdout.
  raw = err.stdout
}
if (!raw) {
  console.error('audit-check: npm audit produced no output')
  process.exit(1)
}

const vulns = Object.values(JSON.parse(raw).vulnerabilities ?? {})
const active = EXCEPTIONS.filter((e) => e.expires >= today)
for (const e of EXCEPTIONS.filter((e) => e.expires < today)) {
  console.log(`::warning::Exception ${e.id} expired on ${e.expires} — its findings now block. Review CONSTRAINTS.md.`)
}

const blocking = []
for (const v of vulns) {
  if (!BLOCKING.has(v.severity)) continue
  const uncovered = v.nodes.filter((node) => !active.some((e) => e.nodes.includes(node)))
  if (uncovered.length > 0) blocking.push({ name: v.name, severity: v.severity, nodes: uncovered })
  else console.log(`allowed (${active.find((e) => e.nodes.includes(v.nodes[0])).id}): ${v.name} [${v.severity}]`)
}

if (blocking.length > 0) {
  console.error('\nBlocking high/critical findings not covered by an exception:')
  for (const b of blocking) console.error(`  - ${b.name} [${b.severity}] at ${b.nodes.join(', ')}`)
  process.exit(1)
}
console.log('\naudit-check: no blocking findings.')
