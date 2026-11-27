# Glen Tan — portfolio

A static portfolio site built with [Astro](https://astro.build).

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # production files in dist/
```

## Add a project

1. Create `src/content/projects/<slug>.md`:

   ```md
   ---
   title: My Project
   summary: One line for the card.
   year: 2026
   tags: [Claude app, JavaScript]
   order: 1                              # lower = earlier on the page
   thumbnail: /images/my-project.png     # optional, file in public/images/
   visual: /visuals/my-project/index.html  # optional interactive preview
   visualHeight: 360                     # preview height in px
   github: https://github.com/you/my-project   # optional
   demo: https://claude.ai/...                 # optional live app link
   ---

   The write-up shown in the popup, in Markdown.
   ```

2. For the interactive preview, save a standalone HTML file (any Claude-made demo works as-is) at
   `public/visuals/my-project/index.html`. It runs inside an iframe, so its styles can't affect the site.

Each project automatically gets a card on the homepage, a popup at `/#<slug>`, and its own page at `/projects/<slug>/`.

## Where things live

- `src/styles/global.css`: colours, fonts and spacing tokens (light and dark)
- `src/components/`: `ProjectCard`, `ProjectModal` (the popup), `ProjectDetail` (shared popup/page content)
- `src/pages/index.astro`: homepage, plus the popup open/close script
- `mockups/style-directions.html`: the original three style options
