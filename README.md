# Field Journal — a word a day

A small vocabulary app styled like a naturalist's field journal. One new word
is presented each day as a "specimen card"; collecting it stamps the card and
adds the word to a running collection, with a day-streak counter to encourage
coming back daily.

## Files

```
field-journal/
├── index.html   Markup, structured with Tailwind CSS utility classes
├── styles.css   The one rule Tailwind utilities can't express cleanly
├── script.js    All app logic (word data, state, rendering, events)
└── README.md    This file
```

The three files are wired together by relative path (`index.html` links to
`styles.css` and `script.js`), so keep them in the same folder.

## Running it

No build step or server required — just open `index.html` in a browser.

If you prefer serving it (some browsers restrict `localStorage` on `file://`
URLs), run from inside the folder:

```bash
python3 -m http.server 8000
```

then visit `http://localhost:8000`.

## How it works

- **Word list** — `WORDS` in `script.js` is a fixed array of ~50 words, each
  with a word, IPA pronunciation, part of speech, meaning, and example
  sentence. Add, remove, or edit entries here to change the deck.
- **Daily rotation** — the word shown is `WORDS[collected.length % WORDS.length]`,
  so the deck cycles in order and loops once exhausted.
- **Collecting** — clicking "Collect specimen" records `{ date, wordIndex }`
  for today and saves the whole `collected` array to `localStorage` under the
  key `field-journal-collected`. Only one word can be collected per calendar
  day (checked against the browser's local date).
- **Streak** — `computeStreak()` walks backward day-by-day from today (or
  yesterday, if today isn't collected yet) counting consecutive collected
  dates.
- **Collection list & modal** — past specimens are listed under "View
  collection"; clicking one reopens it read-only in a modal.
- **Reset** — clears `localStorage` after a confirmation prompt.

All state lives in `localStorage` in the visitor's own browser — there's no
backend, and no data is shared between devices or users.

## Styling

Visual design is implemented with [Tailwind CSS](https://tailwindcss.com),
loaded via the CDN build in `index.html`:

```html
<script src="https://cdn.tailwindcss.com"></script>
```

An inline `tailwind.config` in the `<head>` extends the default theme with
the project's palette and type families so the rest of the markup can use
plain utility names instead of raw hex values:

| Token | Hex | Used for |
|---|---|---|
| `ink` | `#12201C` | page background |
| `inksoft` | `#1B2C25` | stat tiles, disabled button |
| `paper` | `#F1E9D8` | card background, primary text-on-dark |
| `paperdark` | `#E4D8BE` | reserved accent |
| `moss` | `#4A6B41` | primary button, example rule |
| `mossdark` | `#2E4229` | specimen number, IPA text |
| `brass` | `#B08D57` | journal title, stat numbers |
| `rust` | `#8B3A2E` | "collected" stamp |
| `text` / `textsoft` | `#241F1A` / `#5B5346` | body copy on paper |
| `line` | `#C9BC9C` | hairline borders |

Fonts (Fraunces, IBM Plex Mono, Inter) are loaded from Google Fonts and
mapped to `font-serif`, `font-mono`, and `font-sans` respectively.

`styles.css` holds only the one thing that doesn't translate cleanly to a
utility class: the two-spot radial-gradient vignette behind the page. Almost
everything else — colors, spacing, borders, shadows, the "stamp" reveal
animation, the pinhole dot on each card — is expressed as Tailwind utilities
directly in the markup, including arbitrary-value utilities (e.g.
`bottom-[18px]`, `scale-[0.4]`) where the design calls for an exact value
outside Tailwind's default scale.

### Using Tailwind in production

The CDN build is fine for a single static page like this one, but it
compiles Tailwind in the browser on every load, which isn't recommended for
production traffic. For a real deployment, swap it for the Tailwind CLI or a
bundler-based setup so the CSS is generated once at build time — see the
[Tailwind installation docs](https://tailwindcss.com/docs/installation).

## Browser support

Uses `localStorage`, `Intl`-backed `Date.toLocaleDateString`, and standard
DOM APIs — works in any modern evergreen browser. No polyfills included.

## Customizing

- **Change the words**: edit the `WORDS` array in `script.js`.
- **Change the palette/type**: edit the `tailwind.config` block in
  `index.html`.
- **Reset a visitor's progress from the UI**: the "Reset my collection" link
  at the bottom of the page.
