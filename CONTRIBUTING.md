# Contributing to Finntegrate

Thank you for your interest in making Finnish immigration simpler for everyone. Finntegrate is an open-source project and we welcome contributions of all kinds — code, design, content, research, and feedback.

## Discussions & Questions

The best place to ask questions, share ideas, or start a conversation before opening a pull request is our public discussion board:

**[github.com/Finntegrate/finntegrate.org/discussions](https://github.com/Finntegrate/finntegrate.org/discussions)**

Please check existing discussions before opening a new one.

---

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm (comes with Node.js)

### Local Development

```bash
# 1. Clone the repository
git clone https://github.com/Finntegrate/finntegrate.org.git
cd finntegrate.org

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The site will be available at `http://localhost:4321`.

### Other Useful Commands

| Command           | Description                            |
| ----------------- | -------------------------------------- |
| `npm run dev`     | Start local dev server with hot reload |
| `npm run build`   | Build the production site to `dist/`   |
| `npm run preview` | Preview the production build locally   |
| `npm run check`   | Run Astro's TypeScript type checker    |

---

## Project Structure

```text
src/
  components/   # Reusable Astro components (CtaBanner, WorkWithUs, …)
  layouts/      # Page shell (Base.astro — header, footer, <head>)
  pages/        # One file per route (index, about, tapio, …)
  styles/       # Global CSS
public/         # Static assets served as-is
```

---

## Making Changes

### Branches

- Work on a feature branch: `git checkout -b feat/your-feature-name`
- Keep branches focused on a single concern
- Branch off `main` unless you have a specific reason not to

### Commits

Write clear, imperative commit messages:

```text
feat: add resources page
fix: correct aria-current on active nav link
a11y: add sr-only label to external links
```

Use a prefix that matches the type of change: `feat`, `fix`, `content`, `a11y`, `style`, `chore`.

### Pull Requests

1. **Open a discussion first** for significant changes — it saves everyone time.
2. Keep PRs small and focused; one concern per PR is ideal.
3. Describe *what* changed and *why* in the PR description.
4. Link any related issues or discussions.
5. Ensure `npm run check` and `npm run build` pass before requesting review.

---

## Accessibility Standards

Finntegrate serves a diverse audience — many users rely on screen readers, keyboard navigation, or assistive technology. All contributions must meet **WCAG 2.1 AA** as a minimum.

### Checklist for Every PR

- [ ] Heading hierarchy is logical (`h1` → `h2` → `h3`; no skipped levels)
- [ ] All images have meaningful `alt` text; decorative images use `alt=""`
- [ ] Decorative inline SVGs have `aria-hidden="true"`
- [ ] Interactive elements are reachable and operable by keyboard
- [ ] Links have descriptive text — avoid "click here" or "read more"
- [ ] External links include a screen-reader notice: `<span class="sr-only"> (opens in new tab)</span>`
- [ ] Active navigation links use `aria-current="page"`
- [ ] Navigation and landmark regions have `aria-label` where there are multiple of the same role on a page
- [ ] Text meets minimum contrast ratios: **4.5:1** for normal text, **3:1** for large text
  - Avoid `text-gray-400` on white backgrounds (fails at ~2.4:1)
  - Use `text-gray-600` or darker for body copy on light backgrounds
- [ ] No content relies on colour alone to convey meaning
- [ ] Focus styles are visible and not removed

### Contrast Quick Reference (Tailwind on white)

| Class           | Ratio  | AA Normal | AA Large |
| --------------- | ------ | --------- | -------- |
| `text-gray-400` | 2.4:1  | ❌         | ❌        |
| `text-gray-500` | 3.9:1  | ❌         | ✅        |
| `text-gray-600` | 6.4:1  | ✅         | ✅        |
| `text-gray-700` | 10.7:1 | ✅         | ✅        |

---

## Content Guidelines

- Write in plain, clear English suitable for non-native speakers
- Avoid jargon; when technical terms are necessary, explain them
- Content about Finnish administrative processes must reference official sources (Migri, Kela, TE Services, DVV, etc.)
- Do not include personal advice or legal guidance

---

## Licences

By contributing, you agree that:

- **Code** contributions are released under the [MIT Licence](LICENSE.md)
- **Content** contributions are released under [CC BY 4.0](LICENSE.md)

See [LICENSE.md](LICENSE.md) for full details.
