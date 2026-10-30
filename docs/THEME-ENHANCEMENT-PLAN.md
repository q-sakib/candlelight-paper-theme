# Candlelight Paper Theme — Enhancement Plan v2

**Goal:** Expand token coverage to ~120+ rules covering every major language in the stack,
while preserving the warm candlelight / aged-paper aesthetic. Eye-comfortable, semantically
clear, nature-grounded palette. No identity change — just more precision.

---

## 1. Color Palette — 12-Role Semantic System

All colors derived from the existing brand palette; no new hue families introduced.

| Role | Name | Dark token | Light token | Metaphor |
|------|------|-----------|------------|---------|
| 0 | Background | `#1C1A19` | `#FAF3E0` | Charcoal / Aged paper |
| 1 | Foreground / Variable | `#E8D5A3` | `#2D2A26` | Warm straw / Ink |
| 2 | Keyword / Control | `#D9534F` | `#B03A3A` | Ember |
| 3 | Storage / Modifier | `#EB5E28` | `#C44A1A` | Hot coal |
| 4 | Function / Method | `#5B8E7D` | `#3D6E5E` | Moss / Fern |
| 5 | String | `#8CB369` | `#5A7A35` | Leaf |
| 6 | Number / Boolean / Constant | `#F5CB5C` | `#C08A10` | Candleflame amber |
| 7 | Class / Enum | `#D4845A` | `#A05830` | Terracotta / Clay |
| 8 | Interface / Type / Generic | `#A3CEF1` | `#2A6496` | Clear sky |
| 9 | Property / Member / Field | `#6096BA` | `#1E5F8A` | River stone |
| 10 | Decorator / Annotation | `#E8A838` | `#A06010` | Marigold |
| 11 | Comment | `#6B9080` | `#5A7A6E` | Sage — italic |
| 11b | Doc comment | `#7EA890` | `#4E7060` | Lighter sage — italic |
| 12 | Tag (HTML/JSX) | `#C25B56` | `#9A3A35` | Brick red |
| 13 | Attribute / HTML attr | `#5B8E7D` | `#3D6E5E` | Same as function |
| 14 | Operator / Punctuation | `#C0A882` | `#7A6848` | Parchment |
| 15 | Parameter | `#C8B8A2` | `#5A4E3A` | Dry reed |
| 16 | Regex | `#F4A259` | `#B05A10` | Amber glow |
| 17 | Template interpolation | `#1DD3B0` | `#0A8A74` | Teal spark |
| 18 | Namespace / Module | `#B2967D` | `#7A5A3A` | Driftwood |

---

## 2. Comment Type Differentiation

| Type | Example | Scope | Style |
|------|---------|-------|-------|
| Doc block | `/** ... */` | `comment.block.documentation` | Role 11b, italic |
| Block | `/* ... */` | `comment.block` | Role 11, italic |
| Line (inline/side) | `// ...` | `comment.line` | Role 11, italic, no bold |
| Shebang | `#!/usr/bin/env` | `comment.line.shebang` | Role 11, not italic |
| PHP block | `/* */` | `comment.block.php` | Role 11, italic |
| Python docstring | `"""..."""` | `string.quoted.docstring` / `comment.block.python` | Role 11b, italic |
| Blade | `{{-- --}}` | `comment.block.template.blade` | Role 11, italic |
| HTML comment | `<!-- -->` | `comment.block.html` | Role 11, italic |
| SQL line | `-- ...` | `comment.line.double-dash` | Role 11, italic |
| SQL block | `/* */` | `comment.block.sql` | Role 11, italic |
| C++ line | `// ...` | `comment.line.double-slash.cpp` | Role 11, italic |
| C++ block | `/* */` | `comment.block.cpp` | Role 11, italic |

---

## 3. Token Coverage by Language

### 3.1 JavaScript / TypeScript (base — shared)

| Token | Scope(s) | Role |
|-------|----------|------|
| Keywords | `keyword` | 2 |
| Control flow | `keyword.control` | 2 bold |
| import/export | `keyword.control.import`, `keyword.control.export` | 3 |
| Storage | `storage.type` (let/const/var/function/class) | 3 |
| Modifiers | `storage.modifier` (public/private/static/readonly/abstract) | 3 italic |
| Variables | `variable`, `variable.other.readwrite` | 1 |
| Constants (const) | `variable.other.constant` | 6 |
| Parameters | `variable.parameter` | 15 |
| `this`/`self` | `variable.language` | 10 italic |
| Function defs | `entity.name.function` | 4 |
| Function calls | `meta.function-call` | 4 |
| Arrow `=>` | `storage.type.function.arrow` | 3 |
| Method defs | `entity.name.function.member` | 4 |
| Classes | `entity.name.type.class`, `support.class` | 7 |
| Interfaces | `entity.name.type.interface` | 8 |
| Type aliases | `entity.name.type.alias` | 8 |
| Generics | `entity.name.type.parameter` | 8 italic |
| Enums | `entity.name.type.enum` | 7 |
| Enum members | `variable.other.enummember` | 6 |
| Properties | `variable.other.property`, `meta.object-literal.key` | 9 |
| Object keys | `meta.object-literal.key` | 9 |
| Decorators `@` | `meta.decorator`, `entity.name.function.decorator` | 10 |
| Strings | `string` | 5 |
| Template literals | `string.template` | 5 |
| Template `${...}` | `punctuation.definition.template-expression`, `meta.template.expression` | 17 |
| Numbers | `constant.numeric` | 6 |
| Booleans / null | `constant.language` | 6 |
| Regex | `string.regexp` | 16 |
| Operators | `keyword.operator` | 14 |
| Punctuation | `punctuation.definition` | 14 |
| Namespaces | `entity.name.type.namespace` | 18 |
| Built-in functions | `support.function` | 4 |
| Built-in objects | `support.variable`, `support.class` (console/window/document) | 9 |

### 3.2 TypeScript — Additional

| Token | Scope(s) | Role |
|-------|----------|------|
| Type keyword | `keyword.operator.type.annotation.ts` | 3 |
| `as` cast | `keyword.operator.cast.ts` | 2 |
| `readonly` | `storage.modifier.ts` | 3 italic |
| `abstract` | `storage.modifier.abstract.ts` | 3 italic |
| `declare` | `keyword.other.ts` | 3 |
| `satisfies` | `keyword.operator.satisfies.ts` | 2 |
| Access modifiers | `storage.modifier.accessibility` | 3 |

### 3.3 Angular

| Token | Scope(s) | Role |
|-------|----------|------|
| `@Component` etc. | `meta.decorator.ts` | 10 bold |
| `@Input()`/`@Output()` | `meta.decorator.ts entity.name.function.decorator` | 10 |
| Template `[binding]` | `entity.other.attribute-name.html` containing `[` | 10 |
| Template `(event)` | `entity.other.attribute-name.html` containing `(` | 4 |
| Template `[(two-way)]` | `entity.other.attribute-name.html` containing `[(` | 17 |
| `*ngIf` `*ngFor` | `entity.other.attribute-name.html` `keyword.other.unit` | 2 |
| Pipe `\|` in template | `keyword.operator.pipe` | 14 |
| Angular structural dirs | `meta.ng-binding` | 2 |

### 3.4 React / JSX / TSX

| Token | Scope(s) | Role |
|-------|----------|------|
| JSX tags | `entity.name.tag.jsx`, `entity.name.tag.tsx` | 12 |
| JSX component tags | `support.class.component.jsx` | 7 |
| JSX attributes | `entity.other.attribute-name.jsx` | 13 |
| JSX expression `{...}` | `punctuation.section.embedded` | 17 |
| `key` prop | `entity.other.attribute-name` value `key` | 10 |

### 3.5 HTML

| Token | Scope(s) | Role |
|-------|----------|------|
| Tags | `entity.name.tag.html` | 12 |
| Attributes | `entity.other.attribute-name.html` | 13 |
| Attribute values | `string.quoted.double.html`, `string.quoted.single.html` | 5 |
| DOCTYPE | `keyword.other.doctype` | 3 |
| `id=` / `class=` | handled via attribute-name | 13 |
| Script/style embed | `meta.embedded` | neutral |

### 3.6 CSS / SCSS / Less

| Token | Scope(s) | Role |
|-------|----------|------|
| Selectors (tag) | `entity.name.tag.css` | 12 |
| Class selectors `.foo` | `entity.other.attribute-name.class.css` | 9 |
| ID selectors `#foo` | `entity.other.attribute-name.id.css` | 7 |
| Properties | `support.type.property-name.css` | 9 |
| Values | `support.constant.property-value.css` | 6 |
| Units `px/rem/em/%` | `constant.other.unit.css` | 6 |
| Colors (hex) | `constant.other.color.css`, `support.constant.color.css` | 16 |
| Pseudo-class `:hover` | `entity.other.pseudo-class.css` | 10 |
| Pseudo-element `::before` | `entity.other.pseudo-element.css` | 10 |
| `@media` / `@import` | `keyword.control.at-rule.css` | 2 |
| SCSS variables `$var` | `variable.scss` | 1 |
| SCSS mixins | `entity.name.function.scss` | 4 |
| SCSS `@mixin`/`@include` | `keyword.control.at-rule.scss` | 3 |

### 3.7 Tailwind

Tailwind utilities are plain strings in `class=""` — no distinct TM grammar scope.
The plan is to target the class attribute context to give it a warmer, slightly dim read:
- `meta.attribute.class.html string` → Role 5 (leaf green, lighter) to visually separate from content strings.
- If Tailwind Intellisense extension provides semantic tokens, hook into `tailwindcss.classNames`.

### 3.8 PHP

| Token | Scope(s) | Role |
|-------|----------|------|
| PHP vars `$x` | `variable.other.php` | 1 |
| `$this` | `variable.language.php` | 10 italic |
| Keywords | `keyword.other.php`, `keyword.control.php` | 2 |
| Functions | `entity.name.function.php` | 4 |
| Built-in functions | `support.function.php` | 4 |
| Classes | `entity.name.type.class.php` | 7 |
| Types (int/string) | `storage.type.php`, `keyword.type.php` | 3 |
| Strings | `string.quoted.single.php`, `string.quoted.double.php` | 5 |
| Heredoc | `string.unquoted.heredoc.php` | 5 |
| Doc comment | `comment.block.documentation.phpdoc.php` | 11b italic |
| Namespaces | `entity.name.type.namespace.php` | 18 |
| Attributes `#[Attr]` | `meta.attribute.php` | 10 |

### 3.9 Laravel Blade

| Token | Scope(s) | Role |
|-------|----------|------|
| `@if` `@foreach` etc. | `keyword.control.blade` | 2 bold |
| `{{ }}` echo | `punctuation.section.embedded.blade` | 17 |
| `{!! !!}` raw echo | `punctuation.section.embedded.blade` | 16 |
| `@extends` `@section` | `keyword.other.blade` | 3 |
| Blade comment `{{-- --}}` | `comment.block.template.blade` | 11 italic |
| PHP inside blade | inherits PHP rules | — |

### 3.10 Python

| Token | Scope(s) | Role |
|-------|----------|------|
| Keywords | `keyword.control.python`, `keyword.other.python` | 2 |
| `def` / `class` | `storage.type.function.python`, `storage.type.class.python` | 3 |
| Decorators | `meta.decorator.python`, `entity.name.function.decorator.python` | 10 |
| Self/cls | `variable.parameter.function.language.special.self.python` | 10 italic |
| Parameters | `variable.parameter.python` | 15 |
| f-strings | `string.interpolated.python`, `meta.fstring.python` | 5 |
| f-string expr | `meta.fstring.expression.python` | 17 |
| Dunder methods | `support.function.magic.python` | 4 italic |
| Built-in types | `support.type.python` | 8 |
| Built-in functions | `support.function.builtin.python` | 4 |
| Docstrings | `string.quoted.docstring.multi.python` | 11b italic |
| `None`/`True`/`False` | `constant.language.python` | 6 |
| Lambda | `keyword.other.lambda.python` | 2 |

### 3.11 C\#

| Token | Scope(s) | Role |
|-------|----------|------|
| Keywords | `keyword.control.cs` | 2 |
| Storage | `storage.type.cs`, `storage.modifier.cs` | 3 |
| Access modifiers | `storage.modifier.access.cs` | 3 italic |
| `var` | `keyword.var.cs` | 3 |
| Classes | `entity.name.type.class.cs` | 7 |
| Interfaces `I*` | `entity.name.type.interface.cs` | 8 |
| Structs | `entity.name.type.struct.cs` | 7 |
| Enums | `entity.name.type.enum.cs` | 7 |
| `[Attributes]` | `meta.attribute.cs` | 10 |
| Namespaces | `entity.name.type.namespace.cs` | 18 |
| LINQ keywords | `keyword.other.linq.cs` (from/where/select/orderby) | 2 italic |
| `async`/`await` | `keyword.other.cs` | 2 |
| Generics | `entity.name.type.parameter.cs` | 8 italic |
| `@string` verbatim | `string.quoted.double.cs` | 5 |
| Interpolated `$"{}"` | `punctuation.definition.interpolation.cs` | 17 |
| XML doc `///` | `comment.block.documentation.cs` | 11b italic |
| Parameters | `variable.parameter.cs` | 15 |

### 3.12 C++

| Token | Scope(s) | Role |
|-------|----------|------|
| Keywords | `keyword.control.cpp` | 2 |
| Primitive types | `storage.type.cpp`, `keyword.type.cpp` | 3 |
| Preprocessor | `keyword.control.directive.cpp` (`#include`/`#define`) | 3 bold |
| Macros | `entity.name.function.preprocessor.cpp` | 10 |
| Header includes | `string.quoted.other.lt-gt.cpp`, `string.quoted.double.include.cpp` | 5 |
| Classes | `entity.name.type.class.cpp` | 7 |
| Templates | `meta.template.cpp entity.name.type.parameter` | 8 italic |
| Namespaces | `entity.name.type.namespace.cpp` | 18 |
| `::` scope resolution | `punctuation.separator.namespace.access.cpp` | 14 |
| Pointer operators | `keyword.operator.pointer.cpp` | 14 |
| `nullptr`/`true`/`false` | `constant.language.cpp` | 6 |
| Parameters | `variable.parameter.cpp` | 15 |

### 3.13 SQL (MySQL / PostgreSQL)

| Token | Scope(s) | Role |
|-------|----------|------|
| DML keywords | `keyword.other.sql` (SELECT/INSERT/UPDATE/DELETE) | 2 bold |
| DDL keywords | `keyword.other.sql` (CREATE/ALTER/DROP) | 2 bold |
| Clauses | `keyword.other.sql` (FROM/WHERE/JOIN/GROUP BY) | 2 |
| Functions | `support.function.sql` | 4 |
| Operators | `keyword.operator.sql` | 14 |
| Strings | `string.quoted.single.sql` | 5 |
| Numbers | `constant.numeric.sql` | 6 |
| Wildcards `*` | `keyword.operator.star.sql` | 14 |
| Comments `--` | `comment.line.double-dash.sql` | 11 italic |
| Comments `/* */` | `comment.block.sql` | 11 italic |
| Type names | `storage.type.sql` | 3 |
| Schema references | treated as variable: `variable.other.sql` | 9 |

### 3.14 Markdown

| Token | Scope(s) | Role |
|-------|----------|------|
| H1 | `markup.heading.1.markdown` | 2 bold |
| H2 | `markup.heading.2.markdown` | 7 bold |
| H3–H6 | `markup.heading.3–6.markdown` | 9 bold |
| `#` markers | `punctuation.definition.heading.markdown` | 14 |
| Bold `**` | `markup.bold.markdown` | bold weight, Role 1 |
| Italic `*` | `markup.italic.markdown` | italic, Role 14 |
| Bold+italic | `markup.bold_italic.markdown` | bold+italic, Role 1 |
| Inline code | `markup.raw.inline.markdown` | Role 6, no italic |
| Code block | `markup.raw.block.markdown`, `fenced_code.block` | Role 5 dim |
| Fence lang tag | `fenced_code.block.language` | Role 10 |
| Blockquote | `markup.quote.markdown` | Role 11 italic |
| Lists `- * 1.` | `markup.list.unnumbered`, `markup.list.numbered` | Role 1 |
| Bullet marker | `punctuation.definition.list.begin.markdown` | Role 6 |
| Link text `[...]` | `string.other.link.title.markdown` | Role 9 |
| Link URL | `markup.underline.link.markdown` | Role 8 italic |
| HR `---` | `meta.separator.markdown` | Role 14 |
| HTML in MD | inherits HTML rules | — |

---

## 4. Semantic Token Colors (VS Code `semanticTokenColors`)

VS Code applies semantic highlighting on top of TM grammar. These override/enhance:

```json
"semanticTokenColors": {
  "variable":              "#E8D5A3",
  "variable.constant":     "#F5CB5C",
  "variable.defaultLibrary": "#A3CEF1",
  "parameter":             "#C8B8A2",
  "property":              "#6096BA",
  "property.static":       "#6096BA bold",
  "function":              "#5B8E7D",
  "function.defaultLibrary": "#5B8E7D italic",
  "method":                "#5B8E7D",
  "class":                 "#D4845A",
  "interface":             "#A3CEF1",
  "enum":                  "#D4845A",
  "enumMember":            "#F5CB5C",
  "type":                  "#A3CEF1",
  "typeParameter":         "#A3CEF1 italic",
  "namespace":             "#B2967D",
  "decorator":             "#E8A838",
  "string":                "#8CB369",
  "number":                "#F5CB5C",
  "comment":               "#6B9080 italic",
  "keyword":               "#D9534F",
  "operator":              "#C0A882",
  "macro":                 "#E8A838",
  "label":                 "#C8B8A2",
  "regexp":                "#F4A259"
}
```

Light variant uses the light column from the palette table above.

---

## 5. Font Style Rules

| Condition | Style |
|-----------|-------|
| All comments | `italic` |
| Doc comments | `italic` |
| Keywords (control) | `bold` |
| SQL DML/DDL | `bold` |
| Storage modifiers (private/static) | `italic` |
| `this`/`self`/`cls` | `italic` |
| Generics / type params | `italic` |
| Dunder methods `__init__` | `italic` |
| LINQ keywords | `italic` |
| Default | no style |

---

## 6. UI Color Additions (currently missing)

| Element | Dark | Light |
|---------|------|-------|
| `editorError.foreground` | `#EE6055` | `#BC4B51` |
| `editorWarning.foreground` | `#F5CB5C` | `#C08A10` |
| `editorInfo.foreground` | `#A3CEF1` | `#2A6496` |
| `editorHint.foreground` | `#6B9080` | `#5A7A6E` |
| `editorGutter.addedBackground` | `#8CB36966` | `#8CB36966` |
| `editorGutter.modifiedBackground` | `#F5CB5C66` | `#C08A1066` |
| `editorGutter.deletedBackground` | `#EE605566` | `#BC4B5166` |
| `diffEditor.insertedTextBackground` | `#8CB36922` | `#8CB36920` |
| `diffEditor.removedTextBackground` | `#EE605522` | `#BC4B5120` |
| `gitDecoration.addedResourceForeground` | `#8CB369` | `#5A7A35` |
| `gitDecoration.modifiedResourceForeground` | `#F5CB5C` | `#C08A10` |
| `gitDecoration.deletedResourceForeground` | `#EE6055` | `#BC4B51` |
| `gitDecoration.untrackedResourceForeground` | `#6B9080` | `#5A7A6E` |
| `editorBracketHighlight.foreground1` | `#F5CB5C` | `#C08A10` |
| `editorBracketHighlight.foreground2` | `#5B8E7D` | `#3D6E5E` |
| `editorBracketHighlight.foreground3` | `#A3CEF1` | `#2A6496` |
| `editorBracketHighlight.foreground4` | `#D4845A` | `#A05830` |
| `editorBracketHighlight.foreground5` | `#E8A838` | `#A06010` |
| `editorBracketHighlight.foreground6` | `#8CB369` | `#5A7A35` |
| `input.background` | `#2D2A26` | `#FFF8E1` |
| `input.border` | `#403D39` | `#E8DAB5` |
| `input.foreground` | `#F4E285` | `#2D2A26` |
| `button.background` | `#274C77` | `#274C77` |
| `button.foreground` | `#F4E285` | `#FAF3E0` |
| `badge.background` | `#EE6055` | `#BC4B51` |
| `badge.foreground` | `#FAF3E0` | `#FAF3E0` |
| `list.activeSelectionBackground` | `#403D39` | `#F5CB5C66` |
| `list.hoverBackground` | `#2D2A2699` | `#F4E28566` |
| `scrollbarSlider.background` | `#403D3966` | `#E8DAB566` |
| `scrollbarSlider.hoverBackground` | `#403D3999` | `#E8DAB599` |
| `widget.shadow` | `#0D0B0A66` | `#C0A88266` |
| `notifications.background` | `#2D2A26` | `#FFF8E1` |
| `peek.background` | `#221F1E` | `#FFF8E1` |
| `breadcrumb.foreground` | `#6B9080` | `#6B9080` |
| `breadcrumb.activeSelectionForeground` | `#F4E285` | `#2D2A26` |

---

---

## 6b. Nature Theme Palettes

### Ocean Dark — `#0B1724` base
*Inspiration: midnight ocean floor, bioluminescence, coral reefs, deep-sea life*

| Role | Color | Nature source |
|------|-------|--------------|
| Background | `#0B1724` | Midnight water depth |
| Foreground | `#C4DFF0` | Sea foam pale |
| Sidebar | `#0E1E2E` | Deep blue trench |
| Status bar | `#1A4A6A` | Surface horizon |
| Keywords | `#E06C7A` | Coral reef pink-red |
| Control | `#D4556A` | Deep coral |
| Storage | `#E87E40` | Starfish orange |
| Functions | `#29B6A8` | Turquoise current |
| Strings | `#56B88A` | Sea glass green |
| Numbers | `#F0C040` | Golden fish scales |
| Constants | `#E8844A` | Warm amber fish |
| Classes | `#E8834A` | Seahorse |
| Interfaces | `#6EB8E8` | Sky reflection on water |
| Properties | `#5096CC` | Ocean deep blue |
| Comments | `#3A7A8A` | Deep blue-green shadow |
| Decorators | `#B880F0` | Sea anemone violet |
| Parameters | `#90C4DC` | Pale tide wash |
| Template `${}` | `#00D8C0` | Bioluminescent glow |
| Operators | `#8AB0CC` | Water ripple |
| Namespace | `#7A9AB8` | Ocean layer mist |

### Ocean Light — `#EBF4FB` base
*Inspiration: sea spray, shallow reef, coastal morning, white sand*

| Role | Color | Nature source |
|------|-------|--------------|
| Background | `#EBF4FB` | Sea spray white |
| Foreground | `#0D2B45` | Deep ocean ink |
| Keywords | `#BC2A3A` | Deep coral |
| Functions | `#0A8A78` | Teal tide pool |
| Strings | `#237A50` | Kelp forest |
| Numbers | `#9A6A08` | Sand amber |
| Classes | `#A04A18` | Terracotta ocean |
| Interfaces | `#1055A8` | Deep sky water |
| Properties | `#0A5090` | Ocean depth |
| Comments | `#4A8898` | Sea slate |
| Decorators | `#7030A8` | Sea urchin spine |

---

### Mountain Dark — `#141820` base
*Inspiration: granite night, alpine stars, glacial lakes, pine forest at altitude*

| Role | Color | Nature source |
|------|-------|--------------|
| Background | `#141820` | Granite night rock |
| Foreground | `#D8DCE8` | Snow shimmer |
| Sidebar | `#181C24` | Dark slate |
| Status bar | `#2A3850` | Mountain shadow blue |
| Keywords | `#CF5A5A` | Alpine berry |
| Control | `#C04848` | Mountain fire |
| Storage | `#C07848` | Pine bark orange |
| Functions | `#4898A0` | Glacier teal |
| Strings | `#70A860` | Mountain meadow |
| Numbers | `#C8A040` | Golden peak light |
| Constants | `#D08840` | Amber stone |
| Classes | `#C07858` | Rust iron ore |
| Interfaces | `#78B0D0` | Glacial blue sky |
| Properties | `#6090B0` | Mountain lake |
| Comments | `#506070` | Granite fog |
| Decorators | `#A888D0` | Alpine wildflower purple |
| Parameters | `#A8B8C8` | Pale snowpack |
| Template `${}` | `#30C8C0` | Glacial meltwater |
| Operators | `#8090A8` | Stone gray |
| Namespace | `#7888A0` | Mountain morning mist |

### Mountain Light — `#F0F2F5` base
*Inspiration: morning snow, alpine meadow, clear high-altitude sky*

| Role | Color | Nature source |
|------|-------|--------------|
| Background | `#F0F2F5` | Fresh morning snow |
| Foreground | `#1E2430` | Deep granite ink |
| Keywords | `#A83030` | Highland berry |
| Functions | `#1A7080` | Deep glacier stream |
| Strings | `#2A7030` | Pine needle green |
| Numbers | `#8A6808` | Stone gold |
| Classes | `#9A5030` | Rust |
| Interfaces | `#1A5888` | Glacial sky |
| Decorators | `#6840A8` | Lichen purple |

---

### Forest Dark — `#0D1510` base
*Inspiration: ancient forest floor, canopy light shafts, bioluminescent fungi, ferns*

| Role | Color | Nature source |
|------|-------|--------------|
| Background | `#0D1510` | Deep forest floor dark |
| Foreground | `#BEDBAE` | Dappled sunlight on leaf |
| Sidebar | `#101810` | Dark moss |
| Status bar | `#1A4020` | Deep canopy |
| Keywords | `#D05870` | Wild berry red |
| Control | `#C04860` | Dark berry |
| Storage | `#D07840` | Tree bark orange |
| Functions | `#3AAA60` | Emerald moss |
| Strings | `#80CC58` | Fresh spring leaf |
| Numbers | `#E8B838` | Honeycomb |
| Constants | `#C89030` | Autumn honey |
| Classes | `#C07838` | Bark brown |
| Interfaces | `#70B8CC` | Sky through forest canopy |
| Properties | `#48A888` | River water teal |
| Comments | `#3A7848` | Deep lichen shadow |
| Decorators | `#E058A0` | Wildflower pink orchid |
| Parameters | `#98C888` | Pale fern frond |
| Template `${}` | `#10D890` | Bioluminescent spore |
| Operators | `#70A078` | Fern gray-green |
| Namespace | `#608858` | Deep forest layer |

### Forest Light — `#EDF5E8` base
*Inspiration: morning mist in forest, sunlit clearing, dew on ferns*

| Role | Color | Nature source |
|------|-------|--------------|
| Background | `#EDF5E8` | Morning mist pale |
| Foreground | `#162010` | Deep bark ink |
| Keywords | `#A01838` | Forest berry |
| Functions | `#107838` | Deep emerald |
| Strings | `#386818` | Fern green |
| Numbers | `#7A5808` | Acorn |
| Classes | `#804A10` | Bark |
| Interfaces | `#0A5878` | Canopy sky |
| Properties | `#0A6858` | Forest stream |
| Decorators | `#901870` | Orchid bloom |

---

### Desert Dark — `#1A1308` base
*Inspiration: desert night, Sahara under moonlight, warm sand, oasis, cactus silhouettes*

| Role | Color | Nature source |
|------|-------|--------------|
| Background | `#1A1308` | Desert night — warm dark sand |
| Foreground | `#EAD8A8` | Moonlit sand dune |
| Sidebar | `#1E1708` | Dark sandy floor |
| Status bar | `#4A3010` | Dry earth |
| Keywords | `#E85030` | Sunset ember red |
| Control | `#D84020` | Hot coal |
| Storage | `#D08030` | Amber sand |
| Functions | `#38A880` | Oasis teal |
| Strings | `#88B040` | Cactus sage green |
| Numbers | `#D8A030` | Gold sand |
| Constants | `#C88828` | Desert gold |
| Classes | `#D07838` | Sandstone |
| Interfaces | `#70A8D0` | Clear desert sky blue |
| Properties | `#5090B8` | Mirage blue |
| Comments | `#7A6838` | Dry dust brown |
| Decorators | `#A058C8` | Desert wildflower violet |
| Parameters | `#C8B880` | Pale dune grass |
| Template `${}` | `#18D8C0` | Oasis spring water |
| Operators | `#B09060` | Sand ripple |
| Namespace | `#9A8858` | Sandstone layer |

### Desert Light — `#FDF5E0` base
*Inspiration: bleached noon sand, adobe walls, desert sky, sun-baked clay*

| Role | Color | Nature source |
|------|-------|--------------|
| Background | `#FDF5E0` | Bleached noon sand |
| Foreground | `#281C08` | Dark earth |
| Keywords | `#C03010` | Heat haze ember |
| Functions | `#107850` | Oasis green |
| Strings | `#406010` | Sage dry |
| Numbers | `#906808` | Amber gold |
| Classes | `#904A18` | Terracotta adobe |
| Interfaces | `#0A5890` | Clear desert sky |
| Decorators | `#681890` | Cactus bloom violet |

---

## 7. Implementation Phases

### Phase 1 — Token Depth (dark theme first)
- Expand `candlelight-paper-dark.json` from ~20 → ~120 rules
- Cover all scopes in sections 3.1–3.14
- Add comment type differentiation (section 2)
- Add semantic token colors (section 4)

### Phase 2 — Light theme parity
- Mirror Phase 1 changes to `candlelight-paper-light.json`
- Adjust contrast ratios — light bg needs darker tokens (WCAG AA minimum 4.5:1)

### Phase 3 — UI chrome (sections 6)
- Add missing workbench color keys to both themes
- Bracket pair colorization
- Diff / git decoration colors

### Phase 4 — Galaxy variants
- Register `candlelight-galaxy-dark.json` and `candlelight-galaxy-light.json` in `package.json`
- Remove inline `//` comments from JSON (invalid JSON)
- Apply same token depth — galaxy variants can shift blue/purple tones for space feel

### Phase 5 — Packaging
- Bump version `1.0.0` → `1.1.0`
- Update `README.md` with language coverage list
- Rebuild `.vsix`

---

## 8. What We Are NOT Changing

- Brand identity: candlelight / aged paper aesthetic
- Background colors (anchor the feel)
- Extension structure (`extension.js`, `package.json` commands, `contributes`)
- Galaxy variant concept (only fixing registration + invalid JSON)
- Any existing behavior working correctly

---

## 9. Contrast & Eye Comfort Notes

- Dark mode: all role foregrounds target ≥ 4.5:1 against `#1C1A19`
- Light mode: all role foregrounds target ≥ 4.5:1 against `#FAF3E0`
- Comments intentionally dim (≈ 3:1) — readable but visually recessed
- No pure white or pure black — softer warmth everywhere
- Avoid blue-heavy palettes under candlelight — sky blue (`#A3CEF1`) reserved for types/interfaces only
- Template interpolations use teal `#1DD3B0` — stands out without being harsh

---

*Plan authored: 2026-10-30. Implement Phase 1 first, review before proceeding.*
