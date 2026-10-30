# Candlelight Paper Theme

> Warm, nature-inspired VS Code themes for developers who code past midnight.

12 themes across 6 natural environments — each with a dark and light variant. Built for eye comfort, semantic clarity, and long coding sessions on real-world stacks.

---

## Themes

| Theme | Dark | Light | Inspiration |
|-------|------|-------|-------------|
| **Candlelight Paper** | Warm charcoal `#1C1A19` | Aged parchment `#FAF3E0` | Candlelight on old paper |
| **Candlelight Galaxy** | Deep void `#1C1A19` | Light nebula `#FAF3E0` | Cosmic warmth |
| **Ocean** | Midnight depth `#0B1724` | Sea spray `#EBF4FB` | Coral reefs, bioluminescence |
| **Mountain** | Volcanic coal `#17130F` | Pale limestone `#F2EDE8` | Lava, granite, glacial ice |
| **Forest** | Forest floor `#0D1510` | Morning mist `#EDF5E8` | Emerald moss, wild berries |
| **Desert** | Desert night `#1A1308` | Bleached sand `#FDF5E0` | Sunset embers, oasis teal |

---

## Language Coverage

120+ token rules covering every major language and framework:

**Web & Frontend**
- JavaScript / TypeScript — variables, constants, parameters, generics, enums, decorators, template literals
- Angular — `[binding]`, `(event)`, `[(ngModel)]`, structural directives, `@Component`, `@Injectable`
- React / JSX / TSX — component tags, JSX attributes, expression blocks
- HTML — tags, attributes, attribute values, DOCTYPE
- CSS / SCSS — selectors, properties, units, pseudo-classes, pseudo-elements, `@media`
- Tailwind CSS

**Backend**
- PHP — `$variables`, `$this`, built-in functions, heredoc, namespaces, `#[Attributes]`
- Laravel Blade — `@if`, `@foreach`, `@extends`, `{{ }}`, `{{-- --}}` comments
- C# / .NET — access modifiers, `[Attributes]`, LINQ keywords, generics, interpolated strings, `///` XML docs
- Python — decorators, f-strings, docstrings, dunder methods, `self`/`cls`, built-in types
- C++ — preprocessor directives, templates, namespaces, pointer operators

**Data & Docs**
- MySQL / PostgreSQL — DML/DDL keywords in bold, functions, `--` comments
- Markdown — heading hierarchy H1–H6, bold, italic, inline code, blockquote, link text, fenced code
- JSON, YAML

**Comment types differentiated:**
`/** doc */` · `/* block */` · `// line` · `-- SQL` · `{{-- Blade --}}` · `# shebang`

---

## Color Philosophy

Each theme is built around a **12-role semantic palette** derived from its natural environment:

| Role | Ocean Dark | Mountain Dark | Forest Dark | Desert Dark |
|------|-----------|--------------|------------|------------|
| Keywords | Coral `#E06C7A` | Lava red `#D44030` | Wild berry `#D05870` | Sunset ember `#E85030` |
| Functions | Turquoise `#29B6A8` | Glacial teal `#50A8B0` | Emerald `#3AAA60` | Oasis `#38A880` |
| Strings | Sea glass `#56B88A` | Lichen `#88A850` | Fresh leaf `#80CC58` | Cactus sage `#88B040` |
| Numbers | Golden fish `#F0C040` | Mineral amber `#D4A830` | Honeycomb `#E8B838` | Gold sand `#D8A030` |
| Classes | Seahorse `#E8834A` | Basalt `#B06840` | Tree bark `#C07838` | Sandstone `#D07838` |
| Interfaces | Sky water `#6EB8E8` | Glacial blue `#78B8D8` | Canopy sky `#70B8CC` | Desert sky `#70A8D0` |
| Decorators | Anemone violet `#B880F0` | Amethyst `#9868C8` | Wild orchid `#E058A0` | Desert flower `#A058C8` |
| Comments | Deep sea `#3A7A8A` | Granite `#6A5E54` | Lichen shadow `#3A7848` | Dry dust `#7A6838` |

**Eye comfort rules applied:**
- All foreground colors ≥ 4.5:1 contrast ratio against background (WCAG AA)
- Comments intentionally dim (~3:1) — readable but visually recessed
- Active state > hover > inactive — proper visual hierarchy throughout
- No same color used for background and border anywhere
- Warm tones reserved for dark bases; cool tones (sky blue) reserved for types/interfaces only

---

## Full UI Coverage

Beyond token colors, all themes include proper colors for:

- Command palette (`quickInput.*`)
- Autocomplete widget (`editorSuggestWidget.*`)
- Hover cards (`editorHoverWidget.*`)
- Context menus (`menu.*`)
- Peek view / Go to Definition (`peekView.*`)
- Bracket pair colorization (6 levels)
- Git decorations — added / modified / deleted / untracked
- Diff editor
- Focus borders, widget shadows, scrollbars
- Notifications with correct error / warning / info icon colors

---

## Installation

**Via VS Code:**
1. Open Extensions (`Ctrl+Shift+X` / `Cmd+Shift+X`)
2. Search `Candlelight Paper Theme`
3. Click Install

**Via Command Line:**
```bash
code --install-extension SharkB.candlelight-paper-theme
```

---

## Switching Themes

`Ctrl+Shift+P` / `Cmd+Shift+P` → **Preferences: Color Theme** → select any variant

Or use the built-in commands:
- `Switch to Candlelight Paper Light`
- `Switch to Candlelight Paper Dark`

---

## Configuration

```json
"candlelightTheme.opacity": 0.08,
"candlelightTheme.enableGlow": false
```

| Setting | Type | Default | Description |
|---------|------|---------|-------------|
| `opacity` | number | `0.08` | Background image opacity (used with custom CSS) |
| `enableGlow` | boolean | `false` | Subtle glow effect on active elements |

---

## Contributing

Issues and PRs welcome at [github.com/q-sakib/candlelight-paper-theme](https://github.com/q-sakib/candlelight-paper-theme)

Requesting a language or missing token scope? Open an issue with the language and a sample file.

---

## License

MIT © Sakib
