# 1. Single source of truth for project card data

Date: 2026-09-17

## Status

Accepted

## Context

Project data (title, description, tags, images, links) for the data-science and web-projects listing pages was hardcoded as separate inline arrays inside each `page.tsx`. This let the same real-world project drift into two different representations: the Athlete Performance Monitor and Olist projects ended up sharing the same cover SVG (`ds-ecommerce-cover.svg`) because one array was copy-pasted from the other and the image field never got updated. Separately, the "967 atletas" fact drifted out of sync with a "300+ personas" meta description elsewhere in the site, for the same root reason — the same fact typed out by hand in more than one place.

## Decision

Project data lives in exactly one place: `src/data/projects.ts`, exporting typed `dataScienceProjects: Project[]` and `webProjects: Project[]`. `data-science/page.tsx` and `web-projects/page.tsx` import from it and render via `<ProjectCard>`. No page redeclares a project inline.

## Consequences

- Adding a new project means adding one object to `src/data/projects.ts`, not editing a `page.tsx`.
- `ProjectCard`'s prop type is `type ProjectCardProps = Project`, so the card component and the data shape can't drift apart either.
- The `/dashboards` page's "other projects" grid still has its own small inline list — those are dashboard-specific blurbs (different copy, no code snippets), not duplicates of `Project` entries, so that's an intentional exception, not a violation of this decision.
- See `CONSTRAINTS.md`'s floor rule for the enforcement side of this.
