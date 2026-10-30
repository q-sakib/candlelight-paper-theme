# Social Media Posts — Candlelight Paper Theme

> Story arc: First publish (May 2025) → buggy but shipped → iterated → v1.1.0 with 12 nature themes
> Tone: dev-friendly, slightly self-aware humor, real use cases

---

## POST 1 — First Publish (May 21, 2025)
*Use this as the origin story post. Post retroactively or as a throwback.*

---

### LinkedIn — Origin Story

**I shipped a VS Code theme. It had bugs. I published it anyway.**

Six months ago I pushed `candlelight-paper-theme` to the VS Code Marketplace.

The commit message? *"published with bugs need improvements."*

That's it. That was the whole message. No emoji. No celebration. Just pure developer honesty.

Here's why I built it:

I code late. Angular, TypeScript, PHP, C#, Python — whatever the sprint demands. Most dark themes are designed for daylight — aggressive blues, neon greens, that kind of thing. By midnight, my eyes were done.

So I built something warmer. Candlelight on aged paper. The kind of light you'd actually use if you were writing code by hand in 1890 (which, honestly, some legacy codebases feel like).

**What it covers:**
→ JS / TypeScript / Angular / React / Next.js
→ PHP / Laravel Blade
→ C# / .NET
→ Python / C++
→ MySQL / PostgreSQL
→ HTML / CSS / Tailwind
→ Markdown

**The honest v1.0.0 reality:** the galaxy variants existed but weren't even registered in package.json. Comments inside the JSON files were written as `// comments` — which is illegal in JSON. The command palette had invisible text because `list.activeSelectionForeground` was never set.

I shipped it anyway. Because done and imperfect beats perfect and never shipped.

And then I kept going.

If you're a developer who codes past midnight, give it a try:
🔗 marketplace.visualstudio.com/items?itemName=SharkB.candlelight-paper-theme

I'm documenting this journey publicly now. The builds, the iterations, the honest commit messages.

Because I've been building quietly for too long.

#VSCode #OpenSource #DeveloperTools #TypeScript #WebDev #IndieHacker #BuildInPublic

---

### Facebook — Origin Story

Just shipped my first VS Code theme to the marketplace 🕯️

It's called **Candlelight Paper** — warm tones, aged paper vibe, built for people who code late and don't want blue light destroying their eyes by midnight.

My honest commit message when I published it: *"published with bugs need improvements"*

No lies. No hype. Just a developer being real 😅

Stack it covers: Angular, React, TypeScript, PHP, Laravel, C#, Python, MySQL — basically my entire daily work life reflected back at me as a color palette.

Available free on VS Code Marketplace if anyone wants to try it. Link in comments.

Also — I've been building stuff quietly for too long. Starting to document what I actually ship. Watch this space.

---

### X/Twitter Thread — Origin Story

**🧵 I published a VS Code theme to the marketplace.**

**My commit message:** "published with bugs need improvements"

No shame. Ship it.

---

**1/** Built it because I code past midnight on Angular/TS/PHP/C# and every dark theme felt like staring into a neon sign.

Wanted candlelight. Warm. Old paper. The aesthetic of code written by firelight.

---

**2/** v1.0.0 reality check:
- Galaxy variants existed but not registered in package.json ✓ (oops)
- `// comments` inside JSON files ✓ (illegal in JSON, btw)
- Command palette had invisible text ✓
- Shipped it anyway ✓

---

**3/** Covers: TS · Angular · React · PHP · Laravel · C# · Python · C++ · MySQL · PG · Markdown · HTML · CSS · Tailwind

That's my actual daily stack. Theme built from real pain.

---

**4/** Free on VS Code Marketplace:
**SharkB.candlelight-paper-theme**

Been building quietly. Starting to be loud about it.
More coming.

#VSCode #BuildInPublic #OpenSource

---

### Reddit — r/vscode — Origin Story

**I published a VS Code theme to the marketplace with bugs and an honest commit message**

**Title:** Shipped my first VS Code theme — commit message was literally "published with bugs need improvements"

---

Hey r/vscode,

I built and published **Candlelight Paper Theme** ([marketplace link](https://marketplace.visualstudio.com/items?itemName=SharkB.candlelight-paper-theme)) a while back. The motivation was simple — I work late on a mixed stack (Angular, TS, PHP, Laravel Blade, C#, Python, MySQL, PostgreSQL) and every dark theme felt designed for someone who codes in a brightly lit office at 2pm.

I wanted warmth. Candlelight on aged paper. Something that doesn't burn your retinas at midnight.

**Honest v1.0.0 confession:**
- I had galaxy variants in the `/themes` folder that weren't even registered in `package.json`
- The JSON files had `// inline comments` (which is literally invalid JSON — VS Code was silently ignoring them)
- `list.activeSelectionForeground` was never set, so the command palette had invisible text on selection
- Shipped it anyway because I was tired of waiting for it to be perfect

I've been iterating since. More on that in future posts.

If you code late nights on a mixed stack, give it a go. Feedback welcome — especially on any languages I might have missed for token coverage.

**Tech:** VS Code theme extension, TextMate grammar scopes, semantic token colors

---

---

## POST 2 — v1.1.0 Update (Current)
*Use this now — the big update post.*

---

### LinkedIn — v1.1.0 Update

**From 2 themes to 12. From broken JSON to color psychology.**

A few months ago I published a VS Code theme with an honest commit message: *"published with bugs need improvements."*

Today I'm shipping v1.1.0. Here's what changed.

**What was broken:**
- Galaxy Dark and Galaxy Light existed as files but weren't registered in `package.json` — completely invisible to users
- Both files had `// comments` inside JSON (illegal syntax, silently failing)
- The command palette showed invisible text — `list.activeSelectionForeground` was never set
- Zero coverage for: decorators, type parameters, template literals, enum members, SQL, Markdown, PHP docblocks, Python f-strings

**What's fixed and added:**

12 themes total — all nature-inspired, all with dark and light variants:

🕯️ **Candlelight Paper** — warm charcoal / aged parchment
🌌 **Candlelight Galaxy** — same warmth, deeper space
🌊 **Ocean** — midnight navy / sea spray · bioluminescent turquoise
🏔️ **Mountain** — volcanic coal / limestone · lava red · glacial teal
🌲 **Forest** — forest floor / morning mist · emerald · wild berry
🏜️ **Desert** — desert night / bleached sand · ember orange · oasis green

**120+ token rules** covering:
→ All comment types: block `/* */`, doc `/** */`, line `//`, shebang, SQL `--`, Blade `{{-- --}}`
→ Decorators / annotations (`@Component`, `@Injectable`, `#[Attribute]`, `@decorator`)
→ TypeScript: generics, enums, type aliases, satisfies, readonly
→ Angular: `[binding]`, `(event)`, `[(ngModel)]`, structural directives
→ PHP / Laravel Blade directives
→ Python: f-strings, dunder methods, docstrings
→ C#: LINQ keywords, attributes `[...]`, interpolated strings
→ SQL: DML/DDL bold, functions, schema refs
→ Markdown: heading hierarchy, bold, italic, inline code, blockquote, link text

**UI/UX overhaul:**
Every theme now has properly set: `quickInput.*`, `menu.*`, `editorWidget.*`, `editorSuggestWidget.*`, `editorHoverWidget.*`, `focusBorder`, `widget.shadow`, `peekView.*`, bracket pair colors, git decorations, diff colors.

The command palette, autocomplete, hover cards, peek view — all themed correctly now.

I've been a developer who builds and stays quiet.
I'm changing that.

🔗 marketplace.visualstudio.com/items?itemName=SharkB.candlelight-paper-theme

#VSCode #OpenSource #BuildInPublic #WebDevelopment #TypeScript #Angular #PHP #DeveloperTools

---

### Facebook — v1.1.0 Update

Big update to my VS Code theme just dropped 🎨

Started with 2 themes. Now there are 12.

**Ocean Dark** — codes like you're at the bottom of the sea. Coral keywords, bioluminescent template expressions, turquoise functions.

**Mountain Dark** — volcanic coal background, lava red keywords, glacial teal for functions. Completely different energy from Ocean (they used to look the same. Fixed that.)

**Forest Dark** — deep forest floor, honeycomb numbers, emerald functions, wild berry keywords.

**Desert Dark** — warm sand night sky, sunset ember keywords, oasis teal functions. Late nights hit different on this one.

Plus proper fixes for things that were silently broken: invisible command palette text, unregistered theme files, invalid JSON syntax.

120+ token rules now. Every language I actually use daily — Angular, TypeScript, PHP, Blade, C#, Python, C++, SQL, Markdown — all handled.

Free on VS Code Marketplace. Link in comments.

---

### X/Twitter Thread — v1.1.0 Update

**🧵 Updated my VS Code theme. 2 → 12 themes. Here's the honest diff.**

---

**1/** Things that were broken in v1.0.0 that I'm only telling you about now:

- Galaxy themes existed but were invisible (not in package.json)
- JSON files had `// comments` (illegal)
- Command palette had invisible text on selection
- Zero SQL/Markdown/PHP/Python-specific token rules

All fixed.

---

**2/** New themes added:

🌊 Ocean (dark/light) — navy · coral · turquoise · bioluminescence
🏔️ Mountain (dark/light) — volcanic coal · lava red · glacial teal · amethyst
🌲 Forest (dark/light) — forest floor · emerald · wild berry · honeycomb
🏜️ Desert (dark/light) — warm sand · ember · oasis · desert sky

---

**3/** Ocean vs Mountain — they used to look identical (dark navy). Fixed.

Mountain is now coal/charcoal (`#17130F`). Lava red for keywords. Glacial teal for functions. Amethyst for decorators.

Inspired by: volcanic rock · granite · glacial lakes · mineral crystals.

---

**4/** 120+ token rules now covering:

→ All 3 comment types (block/doc/line — different colors)
→ Decorators (`@Component`, `@decorator`, `#[Attribute]`)
→ Template literal interpolations (`${}` — teal spark)
→ Enum members, generics, type aliases
→ Blade directives, PHP docblocks, Python f-strings
→ SQL DML/DDL in bold, Markdown heading hierarchy

---

**5/** Color psychology applied:

- Dark themes: text ≥ 4.5:1 contrast ratio against bg (WCAG AA)
- Active state > hover > inactive — proper visual hierarchy
- No same color for bg + border anywhere
- Comments intentionally dim (≈3:1) — readable but recessed
- Warm tones on dark backgrounds, cool tones reserved for types/interfaces only

---

**6/** Free. Open source. 12 themes.

**SharkB.candlelight-paper-theme** on VS Code Marketplace.

Been building quietly. That stops now.

#VSCode #OpenSource #BuildInPublic

---

### Reddit — r/vscode — v1.1.0 Update

**Title:** Updated my VS Code theme from 2 to 12 variants — nature-inspired palettes, 120+ token rules, full UI chrome

---

Hey r/vscode, I shipped v1.1.0 of **Candlelight Paper Theme**.

**Background:** Published v1.0.0 a while back with broken galaxy variants (not registered in `package.json`), invalid JSON (`//` comments in `.json` files), and zero coverage for most language-specific tokens. Wrote about that honestly [here — link to first post].

**v1.1.0 changes:**

**Bugs fixed:**
- Galaxy Dark/Light registered and invalid JSON stripped
- `list.activeSelectionForeground` added — command palette no longer has invisible text on selection
- Full `quickInput.*`, `menu.*`, `editorWidget.*`, `editorSuggestWidget.*`, `focusBorder`, `widget.shadow`, `peekView.*` keys set on all themes

**New themes (all dark + light):**

| Theme | Dark bg | Identity |
|-------|---------|----------|
| Ocean | `#0B1724` | Bioluminescent coral/turquoise |
| Mountain | `#17130F` | Volcanic coal, lava red, glacial teal |
| Forest | `#0D1510` | Deep forest floor, emerald, honeycomb |
| Desert | `#1A1308` | Warm sand night, ember orange, oasis |

Note on Mountain vs Ocean: they used to look nearly identical (both dark navy). Mountain is now warm charcoal — volcanic coal base, not blue. Completely different feel.

**Token coverage added:**

- Comment types differentiated: `comment.block.documentation` (lighter sage) vs `comment.block` vs `comment.line`
- Decorators/annotations: `meta.decorator`, `entity.name.function.decorator`
- TS: generics italic, enum members, `variable.other.constant`, `storage.modifier` italic
- Angular: `[binding]` `(event)` `[(ngModel)]` attribute name scopes
- PHP: `variable.other.php`, `comment.block.documentation.phpdoc`
- Blade: `keyword.control.blade` for `@if`/`@foreach`/`@extends`
- Python: `meta.decorator.python`, `string.quoted.docstring`, f-string expressions
- C#: `meta.attribute.cs`, `keyword.other.linq.cs` italic
- SQL: `keyword.other.sql` bold for DML/DDL
- Markdown: heading hierarchy H1→H6, bold/italic/inline-code/blockquote/link

**Semantic token colors** set on all new themes.

GitHub: [link] | Marketplace: [SharkB.candlelight-paper-theme](https://marketplace.visualstudio.com/items?itemName=SharkB.candlelight-paper-theme)

Open to feedback on any token scopes I may have missed — especially Rust, Go, Kotlin if people want those.

---

---

## CONTENT CALENDAR — Ongoing Story

Post these in sequence to build a dev-in-public narrative:

| # | When | Platform | Hook |
|---|------|----------|------|
| 1 | Now (retroactive) | LinkedIn | Origin story — shipped buggy, shipped anyway |
| 2 | Now | X thread | 2 → 12 themes — the honest diff |
| 3 | Now | Reddit r/vscode | Technical deep-dive on v1.1.0 |
| 4 | Now | Facebook | Nature themes visual story |
| 5 | Next update | All | Phase 1 complete — 120 token rules, before/after screenshots |
| 6 | On marketplace milestone | LinkedIn | First 100/1000 installs + what I learned |
| 7 | Each new language added | X | "Added [Rust/Go/Kotlin] support — here's how TM scopes work" |

---

*Generated: 2026-10-30 · v1.1.0 of Candlelight Paper Theme*
