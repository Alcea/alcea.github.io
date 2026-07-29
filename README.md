# Soul's Remnant Bestiary

A static, searchable monster database. No build step, no server, no database software required.

## How to add or update a monster

Open **`monsters-data.js`** in any text editor. Copy one of the existing entries (they're all marked `PLACEHOLDER —`), paste it in as a new item in the `MONSTERS` array, and edit the values. Save the file — that's it. Refresh the page and the new entry shows up in the list automatically, filters and all.

The comment block at the top of `monsters-data.js` explains every field. A couple of notes:

- `image` is the whole top section of an entry — point it at a single screenshot of the monster's in-game window (portrait + LV/HP/MP/ATK/DEF/SPD, plus its drop table) and it's shown full-width, as-is. Leave it `null` to show a dashed placeholder box instead.
- Delete the word `PLACEHOLDER — ` from the `name` field once you replace the sample data with real info.
- `level` still shows in the left-hand list. `hp` is kept in the data for reference but isn't displayed on its own anymore, since the image covers it.

## Files

| File | Purpose |
|---|---|
| `index.html` | Page structure — you shouldn't need to touch this |
| `style.css` | Visual design |
| `script.js` | Search, filtering, rendering logic |
| `monsters-data.js` | **Your monster data — edit this one** |

## Viewing it locally

Just open `index.html` in a browser. Everything runs client-side.

## Putting it online

This is a plain static site, so any static host works and most are free:

- **GitHub Pages** — push this folder to a repo, enable Pages in settings, done.
- **Netlify / Vercel** — drag-and-drop the folder onto their dashboard.
- **Cloudflare Pages** — same idea, connect a repo or drag-and-drop.

Whichever you pick, updating the live site later is the same one step: edit `monsters-data.js`, re-upload (or push to your repo), refresh.

## Adding images

Create an `images/` folder next to `index.html`. For a monster's `image`, use one screenshot/graphic covering its whole in-game window — info card (LV/HP/MP/ATK/DEF/SPD) and drop table together — and reference it like `"images/mossy-slime.png"`.
