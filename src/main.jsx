import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import projects from "./data/projects.json";
import candidates from "./data/candidates.json";
import "./styles.css";

const categories = [
  "All",
  ...Array.from(new Set([...projects.map((project) => project.category), ...candidates.map((item) => item.category)]))
];

const assetPath = (path) => (path?.startsWith("/") ? `${import.meta.env.BASE_URL}${path.slice(1)}` : path);

const windowLabel = "June 9-13, 2026";
const windowNote =
  "Fable 5 was broadly available starting June 9, then worldwide access was suspended after the June 12 export-control directive. The originally announced no-extra-cost plan window ran June 9-22, but this gallery treats the active discovery window as June 9-13.";

const themeNotes = [
  {
    label: "One-shot awe",
    text: "The most viral examples felt complete on first contact: not a component, but a playable world, working system, or usable product-shaped artifact."
  },
  {
    label: "Taste jump",
    text: "People were reacting to visual judgment as much as raw code: nicer spacing, richer motion, stronger materials, and less of the default generated-app look."
  },
  {
    label: "Rules inside the world",
    text: "The best demos had mechanics: traffic, collisions, CAD constraints, game loops, physics, simulation, validation, or real-world domain structure."
  },
  {
    label: "Long horizon",
    text: "Fable looked different when tasks got longer. The model could hold plans, iterate internally, inspect its own output, and return with something more whole."
  }
];

const insights = [
  {
    title: "One-shot complete worlds",
    body:
      "The strongest public reaction was awe at complete end-to-end artifacts: city simulators, playable games, CAD objects, dashboards, and art tools arriving from one front-loaded prompt instead of many supervised passes.",
    source: "https://x.com/bilawalsidhu/status/2064524211914223867",
    sourceLabel: "Bilawal Sidhu"
  },
  {
    title: "Longer task horizon",
    body:
      "Anthropic framed Fable's lead as growing with task length, and early testers echoed that: work that used to take several supervised model sessions could finish after one scoping pass plus autonomous execution.",
    source: "https://www.anthropic.com/news/claude-fable-5-mythos-5",
    sourceLabel: "Anthropic launch notes"
  },
  {
    title: "First-principles objects",
    body:
      "Many hits were not just screens. They were engines, actuators, watches, traffic systems, physics-ish worlds, and CAD models where rules, constraints, geometry, or validation loops made the artifact feel grounded.",
    source: "https://x.com/earthtojake/status/2064883158441672706",
    sourceLabel: "Jake Fitzgerald"
  },
  {
    title: "Taste became the human interface",
    body:
      "Some creators loved the polish and aesthetic jump, especially in interactive art and game-like demos. But the signal is mixed: Lenny's review found one-shot design output surprisingly poor in a skills-registry task, so taste is a theme and a caveat.",
    source: "https://www.lennysnewsletter.com/p/how-i-ai-claude-fable-5-review-and",
    sourceLabel: "Lenny's Newsletter"
  },
  {
    title: "Effort was a real lever",
    body:
      "System-card readers highlighted that Fable converted extra reasoning effort into better coding results on hard agentic tasks. That helps explain why the best demos often look like sustained work rather than a lucky autocomplete.",
    source: "https://www.digitalapplied.com/blog/claude-fable-5-mythos-5-agentic-coding-deep-dive-2026",
    sourceLabel: "Digital Applied"
  },
  {
    title: "The catch: impressive is not identical to reliable",
    body:
      "Endor Labs found average results on security-fixing tasks despite a few hall-of-fame solves. The gallery should show wonder, but also preserve evidence quality, creator claims, and source context.",
    source: "https://www.endorlabs.com/learn/claude-fable-5-mythos-grade-hype",
    sourceLabel: "Endor Labs"
  }
];

function App() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("impressiveness");

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return projects
      .filter((project) => category === "All" || project.category === category)
      .filter((project) => {
        if (!needle) return true;
        return [project.title, project.creator, project.category, project.whyItMatters, project.tags.join(" ")]
          .join(" ")
          .toLowerCase()
          .includes(needle);
      })
      .sort((a, b) => {
        if (sort === "title") return a.title.localeCompare(b.title);
        return b.impressiveness - a.impressiveness;
      });
  }, [category, query, sort]);

  const candidateFiltered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return candidates
      .filter((candidate) => category === "All" || candidate.category === category)
      .filter((candidate) => {
        if (!needle) return true;
        return [
          candidate.title,
          candidate.creator,
          candidate.category,
          candidate.summary,
          candidate.whyPromising,
          candidate.tags.join(" ")
        ]
          .join(" ")
          .toLowerCase()
          .includes(needle);
      });
  }, [category, query]);

  const totalBrowseable = projects.length + candidates.length;
  const verifiedCount = projects.filter((project) => project.status === "verified").length;

  return (
    <main>
      <section className="hero">
        <p className="eyebrow">Last 30 Days Gallery</p>
        <h1>Fable Made This</h1>
        <p className="dek">
          A public gallery of the most impressive things people built with Claude Fable during its brief active
          availability window: polished prototypes, playable worlds, CAD objects, agents, research workflows, art
          systems, and the odd tiny miracle.
        </p>
        <div className="stats">
          <span>{windowLabel}</span>
          <span>{totalBrowseable} browseable leads</span>
          <span>{projects.length} curated artifacts</span>
          <span>{candidates.length} promotion candidates</span>
          <span>{verifiedCount} verified cards</span>
          <span>{categories.length - 1} categories</span>
        </div>
        <p className="windowNote">{windowNote}</p>
        <div className="heroLinks">
          <a href="#curated">Browse curated artifacts</a>
          <a href="#queue">See the 80-lead research queue</a>
        </div>
      </section>

      <section className="insights" aria-label="Why Fable looked impressive">
        <div className="sectionIntro">
          <p className="eyebrow">Synthesis</p>
          <h2>Why Fable Looked So Impressive</h2>
          <p>
            The public testing window was tiny, but the pattern is surprisingly crisp: Fable impressed when it
            could turn a fuzzy idea into a complete, inspectable artifact with taste, rules, and a longer arc of
            execution than people expected.
          </p>
        </div>
        <div className="themeStrip">
          {themeNotes.map((theme) => (
            <article key={theme.label}>
              <h3>{theme.label}</h3>
              <p>{theme.text}</p>
            </article>
          ))}
        </div>
        <div className="insightGrid">
          {insights.map((insight) => (
            <article className="insightCard" key={insight.title}>
              <h3>{insight.title}</h3>
              <p>{insight.body}</p>
              <a href={insight.source} target="_blank" rel="noreferrer">
                Source: {insight.sourceLabel}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="controls" aria-label="Gallery controls">
        <input
          type="search"
          placeholder="Search artifacts, creators, tags..."
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <select value={category} onChange={(event) => setCategory(event.target.value)}>
          {categories.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
        <select value={sort} onChange={(event) => setSort(event.target.value)}>
          <option value="impressiveness">Most impressive</option>
          <option value="title">A-Z</option>
        </select>
      </section>

      <section className="sectionHeader" id="curated">
        <div>
          <p className="eyebrow">Curated Gallery</p>
          <h2>Verified and Hand-Written Cards</h2>
          <p>
            These are the strongest cards so far: media captured where possible, source links preserved, and a short
            explanation of why each artifact belongs in the gallery.
          </p>
        </div>
        <strong>{filtered.length}</strong>
      </section>

      <section className="grid">
        {filtered.map((project) => (
          <article className="card" key={project.id}>
            <div className="cardTop">
              <span>{project.category}</span>
              <strong>{project.impressiveness}</strong>
            </div>
            {project.media?.type === "video" && (
              <video className="media" controls poster={assetPath(project.media.poster)} preload="metadata">
                <source src={assetPath(project.media.src)} type="video/mp4" />
              </video>
            )}
            {project.media?.type === "image" && (
              <img className="media" src={assetPath(project.media.src)} alt="" loading="lazy" />
            )}
            <h2>{project.title}</h2>
            <p className="creator">{project.creator}</p>
            <p>{project.whyItMatters}</p>
            <p className="proof">{project.proof}</p>
            <p className={`status ${project.status}`}>{project.createdDuringWindow}</p>
            {project.engagement && (
              <div className="engagement">
                {Object.entries(project.engagement).map(([key, value]) => (
                  <span key={key}>
                    {value} {key}
                  </span>
                ))}
              </div>
            )}
            <div className="tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <div className="links">
              {project.artifactUrl && (
                <a href={project.artifactUrl} target="_blank" rel="noreferrer">
                  Open artifact
                </a>
              )}
              <a href={project.sourceUrl} target="_blank" rel="noreferrer">
                View source
              </a>
            </div>
          </article>
        ))}
      </section>

      <section className="queueIntro" id="queue" aria-label="Road to 100">
        <div>
          <p className="eyebrow">Road to 100</p>
          <h2>Research Queue</h2>
          <p>
            This second layer is for discovery velocity: source-backed leads that look gallery-worthy, but still need
            original-post verification, media capture, and a final write-up before they graduate into the curated grid.
          </p>
        </div>
        <div className="queueStats">
          <strong>{candidates.length}</strong>
          <span>candidates ready to verify</span>
        </div>
      </section>

      <section className="candidateGrid" aria-label="Candidate queue">
        {candidateFiltered.map((candidate) => (
          <article className="candidateCard" key={candidate.id}>
            <div className="candidateTop">
              <span>{candidate.category}</span>
              <span>{candidate.evidence}</span>
            </div>
            <h2>{candidate.title}</h2>
            <p className="creator">{candidate.creator}</p>
            <p>{candidate.summary}</p>
            <p className="proof">{candidate.whyPromising}</p>
            <p className="status candidate">Needs verification</p>
            <div className="tags">
              {candidate.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
            <div className="links">
              <a href={candidate.sourceUrl} target="_blank" rel="noreferrer">
                Open source
              </a>
              <a href={candidate.creatorUrl} target="_blank" rel="noreferrer">
                Creator
              </a>
            </div>
          </article>
        ))}
      </section>

      <footer>
        Built from direct X/Reddit research, local media capture, `/last30days` passes, and a public source catalog.
        Candidate entries are deliberately labeled until each original artifact is verified.
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
