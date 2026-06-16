# Research Log

## 2026-06-16 Browser/X Pass

Window used: June 9-13, 2026.

X direct search required login in the in-app Browser, so discovery used Google-indexed X results and direct public X status pages. Regular status posts rendered publicly; X Articles often redirected to login.

## Verified Gallery Items Added

- Higgsfield AI: one-prompt Voyager documentary. Source: `https://x.com/higgsfield/status/2064858973216580002`. Saved video and poster.
- Higgsfield AI: one-click playable story game. Source: `https://x.com/higgsfield/status/2064780036234969131`. Saved video and poster.
- Greg Feingold: Fable-built browser CAD editor and 3D-printable model demo. Source: `https://x.com/GregFeingold/status/2064400480206266384`. Saved image.
- Asaad Mahmood: few-prompt website demo. Source: `https://x.com/AsaadMahmood5/status/2064603342387724332`. Saved video and poster.
- Marc Lou: DataEmpire web analytics game. Source: `https://x.com/marclou/status/2065029898243318093`. Saved poster and live artifact URL `https://DataEmpire.DataFa.st`.
- jacob / spawn: Spawn 5.0 system build. Source: `https://x.com/jsnnsa/status/2064420561078693941`. Saved poster.
- Eric / outsource_: HermesWorld automated MMO redesign loop. Source: `https://x.com/outsource_/status/2065586212266541515`. Saved video and poster.

## Candidates Not Yet Promoted

- AlphaSignalAI article on Minecraft-style HTML/Three.js demo: `https://x.com/AlphaSignalAI/article/2064744378397045093`. Google snippet is promising, but X Article redirects to login, so needs alternate corroboration.
- ChristopherA article on Fable making agent scaffolding obsolete: `https://x.com/ChristopherA/article/2065234780497883259`. Article result only; needs accessible details.
- Chris Pirillo Seattle-area app: `https://x.com/ChrisPirillo/status/2065619664055750919`. Outside strict June 9-13 window depending on exact timestamp; verify if the artifact was built/shared before suspension.
- Julian Goldie SEO agent game/dashboard: `https://x.com/JulianGoldieSEO/status/2064965858993082525`. Low engagement but maybe interesting if public page exists.

## Media Notes

- Browser `pageAssets` could see many X posters and some HLS `.m3u8` video URLs.
- Direct `ffmpeg` worked for Higgsfield, Asaad, and HermesWorld videos.
- Some posts exposed only poster images even after pressing play; those are still usable as gallery thumbnails.

## 2026-06-16 Chrome/X Logged-In Pass

The in-app Browser got stuck in the Google/X sign-in handoff, so the user approved switching to Chrome. Chrome had an active X session for `@manosaie`.

Focused query:

```text
("Claude Fable 5" OR "Fable 5" OR "Claude Fable") since:2026-06-09 until:2026-06-14 filter:media min_faves:20
```

Verified gallery additions:

- Justine Moore: AI-lab/startup Monopoly recreation with rules, money, turns, and multiplayer share codes. Source: `https://x.com/venturetwins/status/2064504760951304346`. Saved poster.
- Aaron Li: Fable-generated working V8 engine model in CAD, with follow-up link to Adam Fusion extension. Source: `https://x.com/aaronli/status/2064876123109089742`. Saved poster.
- Zach Dive: one-prompt Boeing 747 model in Autodesk Fusion via Adam. Source: `https://x.com/zachdive/status/2064793406145269919`. Saved poster.
- Chris / ChrissGPT: Limbo-style clone generated with Claude Fable 5 extra-high. Source: `https://x.com/ChrissGPT/status/2065478857960849631`. Saved poster.

Media notes:

- Chrome rendered the embedded videos but exposed them as blob URLs. The Chrome `downloadMedia()` hook reported success for the Justine post, but no stable local file was found in the usual download/workspace/temp locations.
- For this pass, promoted cards use local poster images plus source links rather than unstable blob videos.

## 2026-06-16 Theme Synthesis and Deeper X Pass

User feedback requested a top-level synthesis section around why Fable felt impressive, plus a deeper X pass and recategorization by synthesized themes.

Web analysis sources used for synthesis:

- Anthropic launch page: `https://www.anthropic.com/news/claude-fable-5-mythos-5`
- Lenny Rachitsky / ChatPRD review: `https://www.lennysnewsletter.com/p/how-i-ai-claude-fable-5-review-and`
- Endor Labs benchmark critique: `https://www.endorlabs.com/learn/claude-fable-5-mythos-grade-hype`
- Digital Applied agentic coding deep dive: `https://www.digitalapplied.com/blog/claude-fable-5-mythos-5-agentic-coding-deep-dive-2026`

Theme buckets now used in the gallery:

- One-Shot Complete Worlds
- Taste and Polish
- First-Principles Engines
- Long-Horizon Agents
- Productized Play
- Research and Knowledge Work

Focused X searches used logged-in Chrome and date filters for June 9-13:

- One-shot / one prompt examples
- Design, UI, web design, and aesthetic examples
- Physics, engine, simulation, CAD, and Fusion examples
- Agentic, autonomous, and long-horizon examples
- Built with Fable / made with Fable media examples

Verified gallery additions:

- Bilawal Sidhu: one-shot city block simulator with multi-agent traffic, live detection boxes/tracks, and day-night cycle. Source: `https://x.com/bilawalsidhu/status/2064524211914223867`. Saved poster.
- Noah Wachnik: Minecraft-like world from one prompt in 20 minutes. Source: `https://x.com/noahwachnik/status/2064473058597863857`. Saved poster.
- Jake Fitzgerald: QDD actuator design, gearbox animation, and collision inspection validation loop. Source: `https://x.com/earthtojake/status/2064883158441672706`. Saved poster.
- Misbah Syed: one-shot geometric Islamic patterns visualizer with seed generation and downloads. Source: `https://x.com/MisbahSy/status/2064578147719249947`. Saved poster.
- echo.hive: playable V16 engine in Three.js with slider-crank geometry. Source: `https://x.com/hive_echo/status/2064840850312716463`. Saved poster.

Additional `/last30days` corroboration pass:

```bash
LAST30DAYS_MEMORY_DIR="$PWD/last30days-out" python3.14 ~/.codex/skills/last30days/scripts/last30days.py \
  'Claude Fable 5 early testing insights impressive examples' \
  --agent \
  --emit=json \
  --save-dir ./last30days-out \
  --save-suffix=insights-pass \
  --plan ./last30days-plan-fable-insights.json \
  --subreddits=ClaudeAI,ClaudeCode,singularity,vibecoding,artificial,ChatGPTCoding,gamedev,webdev \
  --days=8 \
  --search=reddit,hackernews,github
```

Output saved to `last30days-out/claude-fable-5-early-testing-insights-impressive-examples-raw-insights-pass.json`.

Useful corroboration:

- r/ClaudeCode Minecraft-from-scratch thread appeared independently.
- r/singularity horror game thread remained a strong gallery item.
- HN/Web chatter added caveats: security-fix benchmarks were mixed, access limits mattered, and design praise was not universal.

Limitations:

- The engine still lacked configured X and YouTube, so Chrome/X plus web search remain the higher-signal channels for artifacts and social analysis.

## 2026-06-16 /last30days Pass

Installed `last30days` from `mvanhorn/last30days-skill`, then ran a public-source pass using Reddit, Hacker News, and GitHub:

```bash
python3.14 ~/.codex/skills/last30days/scripts/last30days.py \
  'Claude Fable 5 projects people built' \
  --emit=json \
  --save-dir ./last30days-out \
  --save-suffix=gallery-pass \
  --plan ./last30days-plan-fable-gallery.json \
  --subreddits=ClaudeAI,ClaudeCode,artificial,singularity,webdev,gamedev,SideProject \
  --days=8 \
  --search=reddit,hackernews,github
```

Output saved to `last30days-out/claude-fable-5-projects-people-built-raw-gallery-pass.json`.

Useful addition:

- r/singularity: "It's over. Claude Fable 5 one-shots horror game live" with 2.4K upvotes, 580 comments, and a public 4:30 video. Saved muxed video and poster as `public/media/fable-horror-game/`.

Limitations:

- X/Twitter and YouTube were unavailable to `last30days` because no local X credentials or `yt-dlp` were configured.
- Reddit public JSON returned 403, but the skill's keyless RSS/listing fallback still found relevant Reddit posts.
- Most GitHub results were false positives caused by matching "Claude" or "Fable" adjacent to unrelated PRs/issues.

## 2026-06-16 Road to 100 Expansion

Goal: reach 100 browseable gallery leads without flattening verified artifacts and lower-confidence candidates into the same tier.

Result:

- Kept the existing 20 curated gallery cards as the main verified/seed layer.
- Added `src/data/candidates.json` with 80 candidate leads, giving the local site exactly 100 browseable entries.
- The candidate queue is sourced from the public `awesome-claude-fable-5` catalog, which links each case to an original post and includes case notes. These are treated as promotion candidates, not fully verified cards.
- Candidate cards include category, source URL, creator URL, evidence/date line, summary, why-promising analysis, and a next verification step.

Additional X/Chrome leads found during this pass:

- Chris / ChrissGPT: full explorable starship, Minecraft clone, Pokemon clone, Kerbal-style rocket game.
- Kevin Klatt: Call of Duty-style Three.js clone.
- Pallav Agarwal: Liquid Glass web package.
- Todd Saunders: customer-call feature building in real time.
- Matt Shumer: Hogwarts castle.
- Jake Fitzgerald: humanoid robot and 16DOF robot hand/URDF in addition to the QDD actuator already promoted.
- echo.hive: mozaic, lumen, flux lab, living machinery mandala, transformer simulations.

Verification rule:

- Promote candidates only after opening the original source, checking that the artifact was actually made with Fable during the June 9-13 active window, and capturing media or a poster where possible.
