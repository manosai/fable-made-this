# Fable Made This Research Plan

## Goal

Build a browsable gallery of the most impressive projects, demos, workflows, tools, and artifacts people created with Claude Fable during the user's availability window.

## Availability Window

- June 9, 2026: Claude Fable 5 became generally available on Claude API, AWS, Vertex AI, Microsoft Foundry, and subscriber plans.
- June 9-22, 2026: Originally announced as included on Pro, Max, Team, and seat-based Enterprise plans at no extra cost.
- June 12, 2026: Public reporting says the US government ordered Anthropic to suspend access for foreign nationals.
- June 13, 2026: Treat as the practical worldwide suspension date for gallery inclusion.

Working gallery window: **June 9-13, 2026**, America/New_York unless a source gives a more precise timezone.

Include artifacts created, launched, demoed, or substantially shared during this window. Artifacts started earlier can be included only if the Fable-created output was publicly posted during this window.

## Remaining Clarifications

- Whether to include only public artifacts or also private/user-submitted ones.
- Whether to include Mythos Preview/Fable-class artifacts, or only public Claude Fable 5 artifacts.

## Source Strategy

Use `last30days` as the discovery layer, then manually verify anything that becomes a gallery card.

Run query batches:

1. `last30days Claude Fable projects created June 9 June 13 2026 --agent`
2. `last30days Claude Fable demos built June 2026 --agent`
3. `last30days Claude Fable app prototype --agent`
4. `last30days Claude Fable game demo --agent`
5. `last30days Claude Fable website built --agent`
6. `last30days Claude Fable coding project --agent`
7. `last30days Claude Fable visual design artifact --agent`
8. `last30days Claude Fable research tool --agent`
9. `last30days Claude Fable agent workflow --agent`
10. `last30days Fable 5 created with Claude --agent`
11. `last30days "made with Fable 5" --agent`
12. `last30days "built with Claude Fable" --agent`

For each promising hit, capture:

- Title
- Creator
- URL
- Date
- Platform
- Category
- What was made
- Why it is impressive
- Evidence quote or proof line
- Media URL if available
- Confidence level
- Whether it falls inside the availability window
- Which window rule it satisfies: created, launched, demoed, or substantially shared

## Categories

- Software Engineering
- Games and Agents
- Research and Analysis
- Visual and Interactive Art
- Websites and Apps
- Productivity Workflows
- Education and Explainers
- Weird and Wonderful

## Scoring

Score each item from 0 to 100 using:

- Ambition: how hard or large the artifact is.
- Completion: whether it is actually usable or only a claim.
- Novelty: whether it shows a new behavior or pattern.
- Evidence quality: demo, repo, video, screenshots, thread, or third-party mention.
- Community response: engagement, reposts, discussion, forks, stars, or comments.

## Gallery Shape

The site should support:

- Search
- Category filters
- Sort by impressiveness
- A detail page or modal per artifact
- Tags
- Source links
- Confidence labels
- Optional embedded screenshots/videos

## Deployment

Best first deployment target: Vercel static site.

Build command: `npm run build`

Output directory: `dist`
