# Social Posts — The Azure Publishing Experience

> Theme: trying to publish a VS Code extension to the marketplace
> Reality: accidentally touring Microsoft's entire cloud empire first
> Tone: relatable dev humor, honest, slightly exhausted

---

## LinkedIn

**I just wanted to publish a VS Code theme. Microsoft had other plans.**

The process looked simple on paper:

1. Get a Personal Access Token
2. Run `vsce publish`
3. Done

What actually happened:

**Step 1** — Googled "VS Code marketplace publish PAT."
Got redirected to `dev.azure.com/_usersSettings/tokens`.
**404. Page not found.**

**Step 2** — Tried `portal.azure.com`.
Wrong portal. This one is for cloud VMs, Kubernetes clusters, and things that cost money.
I just want to ship a color theme.

**Step 3** — Found `aex.dev.azure.com`. This looked right.
It showed my Azure DevOps organization: `dev.azure.com/qsakib`.
Progress.

**Step 4** — Realized the PAT URL needs your org name embedded in it.
Not `dev.azure.com/_usersSettings/tokens`.
It's `dev.azure.com/qsakib/_usersSettings/tokens`.
One word. Nowhere documented clearly.

**Step 5** — Finally got the token. Published.

The whole time, the actual marketplace page — `marketplace.visualstudio.com/manage/publishers/sharkb` — was sitting there calm and clean, already showing **473 installs** from my buggy v1.0.0 that I shipped with an honest commit message six months ago.

The theme had invisible command palette text. JSON files with illegal `//` comments. Two of the four theme variants weren't even registered in `package.json`.

473 people installed it anyway.

Developers are incredibly forgiving if the idea resonates.

v1.1.0 is live now. 12 themes. 120+ token rules. All the broken things fixed.

And I finally know which Azure URL actually works.

---

**Lessons:**
→ Ship the imperfect thing. 473 people don't wait for perfect.
→ Microsoft has at least 4 different portals and only one of them is what you need.
→ The org-specific URL is never in the docs. It's always `dev.azure.com/{your-org-name}/_usersSettings/tokens`.
→ Build in public. The story is part of the product.

🔗 marketplace.visualstudio.com/items?itemName=SharkB.candlelight-paper-theme

#VSCode #OpenSource #BuildInPublic #DeveloperLife #Azure #WebDevelopment

---

## X/Twitter Thread

**🧵 I just wanted to publish a VS Code theme.**

**Microsoft had a whole journey planned for me.**

---

**1/** The docs say: go to `dev.azure.com/_usersSettings/tokens` to get your PAT.

I went there.

404. Page not found.

The date on the 404 page: 30/10/2026 14:49:31 UTC.

Microsoft timestamped my confusion.

---

**2/** Tried `portal.azure.com` instead.

This is where you manage virtual machines, Kubernetes clusters, and entire cloud infrastructures.

I want to publish a color theme.

A color theme.

---

**3/** Eventually figured out the PAT URL needs your org name:

❌ `dev.azure.com/_usersSettings/tokens`
✅ `dev.azure.com/{your-org}/_usersSettings/tokens`

One word. Not in the quick-start docs. Found it by accident.

---

**4/** Meanwhile the actual marketplace page was completely fine the whole time.

`marketplace.visualstudio.com/manage/publishers/sharkb`

Sitting there. Calm. Already showing 473 installs from my v1.0.0.

The version with the bugs. The invisible command palette text. The unregistered themes.

473 installs.

---

**5/** v1.1.0 is live now.

12 themes. 120+ token rules. Everything fixed.

Also I now know exactly which Azure URL to use.

Some knowledge can only be earned.

`SharkB.candlelight-paper-theme` on VS Code Marketplace.

#VSCode #BuildInPublic #DevLife

---

## Facebook

Wanted to update my VS Code theme on the marketplace today.

Ended up on three different Microsoft portals, got a 404 from Azure DevOps, accidentally visited the page where you manage cloud databases and Kubernetes clusters (I just wanted to ship a color theme, not host a startup), and eventually found the right URL buried under my organization name that nobody mentioned in the docs.

The fun part? While I was lost in Microsoft's portal maze, my original buggy version had quietly racked up 473 installs. That's the version where the command palette had invisible text and two themes weren't even registered properly.

473 people. Buggy theme. Zero marketing.

v1.1.0 is finally live — 12 themes total, Ocean, Mountain, Forest, Desert, all with dark and light variants, everything properly fixed.

The lesson: ship the thing. People will use it while you're still figuring out which Azure portal is the right one.

Link in comments 👇

---

## Reddit — r/vscode

**Title:** PSA: the VS Code Marketplace PAT URL in most tutorials is wrong — here's the correct one

---

Quick note for anyone hitting a 404 when trying to generate a Personal Access Token for `vsce publish`:

Most docs and tutorials point you to:
```
dev.azure.com/_usersSettings/tokens
```

This 404s. The URL needs your Azure DevOps **organization name** in it:

```
dev.azure.com/{your-org-name}/_usersSettings/tokens
```

Find your org name at `aex.dev.azure.com` — it shows under "Azure DevOps Organizations" on your profile page.

---

**Context:** I was publishing v1.1.0 of my VS Code theme ([Candlelight Paper](https://marketplace.visualstudio.com/items?itemName=SharkB.candlelight-paper-theme)) and spent an embarrassing amount of time in the wrong Azure portal before figuring this out. Sharing so the next person doesn't have to.

Also: if you're debating whether to publish your extension even though it's not perfect — my v1.0.0 had:
- Two theme variants not registered in `package.json`
- `//` comments inside `.json` files (illegal syntax)
- Invisible text in the command palette
- Zero SQL/Markdown/Python-specific token rules

It got 473 installs.

Ship it. Fix it after.

---

*Posted: 2026-10-30*
