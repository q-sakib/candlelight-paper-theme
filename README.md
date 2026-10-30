# Candlelight Paper Theme

**12 nature-inspired VS Code themes built for developers who code past midnight.**

Warm, eye-friendly palettes drawn from real environments — each one carefully tuned for semantic clarity across the languages you actually use every day.

---

## Themes

### Candlelight Collection
| | Theme | Feel |
|-|-------|------|
| 🕯️ | **Candlelight Paper Dark** | Warm charcoal, aged parchment tones |
| 🕯️ | **Candlelight Paper Light** | Soft daylight on cream paper |
| 🌌 | **Candlelight Galaxy Dark** | Deep void with warm starlight |
| 🌌 | **Candlelight Galaxy Light** | Light nebula, cosmic warmth |

### Nature Collection
| | Theme | Feel |
|-|-------|------|
| 🌊 | **Ocean Dark** | Midnight depth — coral, bioluminescence, deep sea |
| 🌊 | **Ocean Light** | Coastal morning — sea spray, kelp, tide pools |
| 🏔️ | **Mountain Dark** | Volcanic coal — lava, granite, glacial ice |
| 🏔️ | **Mountain Light** | Pale limestone — alpine meadow, clear sky |
| 🌲 | **Forest Dark** | Deep forest floor — emerald, wild berries, honeycomb |
| 🌲 | **Forest Light** | Morning mist — dew on ferns, sunlit clearing |
| 🏜️ | **Desert Dark** | Desert night — sunset embers, oasis teal, sand dunes |
| 🏜️ | **Desert Light** | Bleached noon — adobe, cactus sage, desert sky |

---

## Language Support

Built from a real daily stack. Token rules cover every major language and framework:

**Frontend**
- JavaScript · TypeScript · JSX · TSX
- Angular — `[bindings]` `(events)` `[(ngModel)]` `@Component` `@Injectable` structural directives
- React · Next.js · Vite

**Backend**
- PHP · Laravel Blade (`@if` `@foreach` `@extends` `{{ }}` comments)
- C# · .NET — attributes `[...]`, LINQ, async/await, XML docs `///`
- Python — decorators, f-strings, docstrings, dunder methods
- C++ — preprocessor, templates, namespaces

**Data & Markup**
- MySQL · PostgreSQL — DML/DDL keywords bold, functions, `--` comments
- HTML · CSS · SCSS · Tailwind CSS
- Markdown — heading hierarchy, bold, italic, inline code, blockquote, links

**Comment types handled separately:**
`/** doc */`  ·  `/* block */`  ·  `// line`  ·  `-- SQL`  ·  `{{-- Blade --}}`

---

## Color Design

Each theme follows a 12-role semantic palette — every color has a specific meaning that stays consistent across all languages.

| Role | What it colors |
|------|---------------|
| Keywords | Control flow, storage modifiers — `if` `const` `async` |
| Functions | Definitions and calls |
| Strings | All string types including template literals |
| Numbers | Numeric constants and booleans |
| Classes | Class names and enums |
| Interfaces | Types, interfaces, generics |
| Properties | Object keys, member access |
| Decorators | `@annotations` — stand out from everything else |
| Parameters | Function arguments — distinct from local variables |
| Comments | Dimmer than code — readable but recessed |

**Eye comfort:**
- All text meets WCAG AA contrast (4.5:1 minimum against background)
- Comments intentionally subtle — present but not distracting
- No blue-heavy palettes on dark themes — warm tones throughout
- Proper visual hierarchy: active › hover › inactive everywhere

---

## Full UI Coverage

Every UI surface is themed — not just code:

- Command palette · Autocomplete widget · Hover cards
- Context menus · Peek view · Breadcrumbs
- Bracket pair colorization (6 levels)
- Git decorations — added / modified / deleted / untracked
- Diff editor · Focus borders · Widget shadows · Scrollbars
- Notification icons with correct error / warning / info colors

---

## Installation

**VS Code Extensions panel:**
Search `Candlelight Paper Theme` → Install

**Command line:**
```bash
code --install-extension SharkB.candlelight-paper-theme
```

**Switch theme:**
`Cmd+Shift+P` → `Preferences: Color Theme` → pick any of the 12 variants

---

## Settings

```json
"candlelightTheme.opacity": 0.08,
"candlelightTheme.enableGlow": false
```

---

## Made by

**q-sakib** — full-stack developer

[GitHub](https://github.com/q-sakib) · [LinkedIn](https://linkedin.com/in/q-sakib)
