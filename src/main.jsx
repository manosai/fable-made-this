import React, { useMemo, useState } from "react";
import { createRoot } from "react-dom/client";
import projects from "./data/projects.json";
import candidates from "./data/candidates.json";
import "./styles.css";

const assetPath = (path) => (path?.startsWith("/") ? `${import.meta.env.BASE_URL}${path.slice(1)}` : path);

const promotedCandidates = candidates.map((candidate, index) => ({
  id: `promoted-${candidate.id}`,
  title: candidate.title,
  creator: candidate.creator,
  category: candidate.category,
  impressiveness: Math.max(70, 88 - Math.floor(index / 7)),
  proof: `${candidate.evidence.replace(/^Type: /, "")} via ${candidate.sourceCollection}`,
  whyItMatters: candidate.summary,
  sourceUrl: candidate.sourceUrl,
  createdDuringWindow: candidate.evidence.includes("Date:") ? candidate.evidence.replace(/^Type: /, "") : "Source-backed lead",
  tags: candidate.tags,
  status: "source-backed",
  visual: "generated"
}));

const galleryItems = [...projects, ...promotedCandidates];
const categories = ["All", ...Array.from(new Set(galleryItems.map((project) => project.category)))];
const featuredItems = galleryItems.slice(0, 8);
const windowLabel = "June 9-13, 2026";
const catalogUrl = "https://github.com/Anil-matcha/awesome-claude-fable-5";

const synthesisThemes = [
  {
    title: "1. The unit of generation became the artifact",
    body:
      "The interesting jump was not better snippets. It was that one intent could become a shareable object: a city simulator, web OS, CAD editor, playable game, analytics product, research tool, or media pipeline. The examples feel uncanny because the model crosses the last mile from answer to artifact: packaging, defaults, state, edge cases, and enough polish that someone else can inspect it without needing the prompt history.",
    sourceUrl: "https://www.anthropic.com/news/claude-fable-5-mythos-5",
    sourceLabel: "Anthropic launch"
  },
  {
    title: "2. It held the plot across long horizons",
    body:
      "Anthropic's own framing matches the gallery: Fable's lead grows as tasks get longer and more complex. The strongest public artifacts are not clever one-screen tricks; they are sustained runs with many dependent choices. Codebase migrations, 74-file PR reviews, multi-hour game builds, autonomous MMO loops, and multi-stage research workflows all test whether the model remembers what it is building after the novelty of the first response is gone.",
    sourceUrl: "https://www-cdn.anthropic.com/d00db56fa754a1b115b6dd7cb2e3c342ee809620.pdf",
    sourceLabel: "System card"
  },
  {
    title: "3. Taste stopped being a thin skin",
    body:
      "A lot of generated software used to look like a demo of the prompt, not a thing a person chose. The Fable examples have more editorial taste: cleaner hierarchy, more coherent motion, more plausible defaults, and UI surfaces that seem intentionally composed. That matters because taste is compression. It lets the artifact communicate what it is before the viewer reads the explanation.",
    sourceUrl: "https://x.com/earthtojake/status/2064883158441672706",
    sourceLabel: "QDD actuator example"
  },
  {
    title: "4. The demos had rules, not just vibes",
    body:
      "The most convincing cards are grounded in systems with consequences: orbital motion, black-hole lensing, traffic agents, gearboxes, collision validation, CAD constraints, voxel worlds, game loops, spreadsheet reasoning, and tool execution. That is why the first-principles examples matter so much. They suggest Fable was not only making plausible surfaces; it was often preserving a causal model long enough for the surface to behave.",
    sourceUrl: "https://www.anthropic.com/news/claude-fable-5-mythos-5",
    sourceLabel: "Physics and CAD examples"
  },
  {
    title: "5. Fable was a public Mythos-class glimpse",
    body:
      "Fable and Mythos share the same underlying capabilities, but Fable added classifiers and refusals for risky domains while Mythos stayed limited to trusted access. That split explains the strange energy around the release: for a few days, ordinary builders could touch a Mythos-class model with a 1M-token context window, large outputs, adaptive thinking, memory, code execution, and tool calling. The gallery is a record of what people did when that threshold briefly opened.",
    sourceUrl: "https://platform.claude.com/docs/en/about-claude/models/introducing-claude-fable-5-and-claude-mythos-5",
    sourceLabel: "Claude API docs"
  }
];

const synthesisSignals = [
  `${galleryItems.length} curated artifacts`,
  "Worlds, engines, agents, and polished interfaces",
  "12 long-horizon agent examples",
  "Same underlying capabilities as Mythos 5",
  "1M token context and up to 128k output"
];

function GeneratedVisual({ item }) {
  const words = item.title
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 4)
    .join(" ");

  return (
    <div className={`generatedMedia ${item.category.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}>
      <span>{item.category}</span>
      <strong>{words}</strong>
      <small>{item.creator}</small>
    </div>
  );
}

function Media({ item }) {
  if (item.media?.type === "video") {
    return (
      <video className="media" controls poster={assetPath(item.media.poster)} preload="metadata">
        <source src={assetPath(item.media.src)} type="video/mp4" />
      </video>
    );
  }

  if (item.media?.type === "image") {
    return <img className="media" src={assetPath(item.media.src)} alt="" loading="lazy" />;
  }

  return <GeneratedVisual item={item} />;
}

function cardDestination(item) {
  return item.artifactUrl || item.sourceUrl;
}

function openCard(item) {
  const destination = cardDestination(item);
  if (destination) window.open(destination, "_blank", "noopener,noreferrer");
}

function App() {
  const [category, setCategory] = useState("All");
  const [query, setQuery] = useState("");
  const [sort, setSort] = useState("impressiveness");

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return galleryItems
      .filter((item) => category === "All" || item.category === category)
      .filter((item) => {
        if (!needle) return true;
        return [item.title, item.creator, item.category, item.whyItMatters, item.proof, item.tags.join(" ")]
          .join(" ")
          .toLowerCase()
          .includes(needle);
      })
      .sort((a, b) => {
        if (sort === "title") return a.title.localeCompare(b.title);
        if (sort === "category") return a.category.localeCompare(b.category) || b.impressiveness - a.impressiveness;
        return b.impressiveness - a.impressiveness;
      });
  }, [category, query, sort]);

  const capturedMedia = galleryItems.filter((item) => item.media).length;

  const handleCardClick = (item, event) => {
    if (event.target.closest("a, button, input, select, textarea, video")) return;
    openCard(item);
  };

  const handleCardKeyDown = (item, event) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    if (event.target.closest("a, button, input, select, textarea, video")) return;
    event.preventDefault();
    openCard(item);
  };

  const handleCardPointerMove = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--ripple-x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--ripple-y", `${event.clientY - rect.top}px`);
  };

  return (
    <main>
      <section className="hero">
        <div className="heroCopy">
          <p className="eyebrow">Fable Window Gallery</p>
          <h1>Fable Made This</h1>
          <p className="dek">
            {galleryItems.length} artifacts from the few public days when Claude Fable felt less like a chatbot and more
            like a builder: games, worlds, agents, CAD tools, simulations, visual systems, and polished product surfaces.
          </p>
          <div className="stats">
            <span>{windowLabel}</span>
            <span>{galleryItems.length} entries</span>
            <span>{capturedMedia} media cards</span>
            <span>{categories.length - 1} categories</span>
          </div>
          <div className="heroLinks">
            <a href="#gallery">Enter the gallery</a>
            <a href="#synthesis">What made it interesting?</a>
          </div>
        </div>
        <div className="heroVisual" aria-label="Featured artifact preview">
          {featuredItems.map((item) => (
            <a
              className="previewTile"
              href={cardDestination(item)}
              key={item.id}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${item.title}`}
            >
              <Media item={item} />
              <span>{item.category}</span>
            </a>
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
          <option value="category">Group by category</option>
          <option value="title">A-Z</option>
        </select>
      </section>

      <section className="sectionHeader" id="gallery">
        <div>
          <p className="eyebrow">Gallery</p>
          <h2>Browse the artifacts</h2>
          <p>
            Bigger thumbnails, lighter cards, and quick filters. Hover or focus a card to reveal the source trail.
          </p>
        </div>
        <strong>{filtered.length}</strong>
      </section>

      <section className="grid">
        {filtered.map((item) => (
          <article
            className="card"
            key={item.id}
            role="link"
            tabIndex={0}
            data-destination={cardDestination(item)}
            onClick={(event) => handleCardClick(item, event)}
            onKeyDown={(event) => handleCardKeyDown(item, event)}
            onPointerMove={handleCardPointerMove}
            aria-label={`Open ${item.title}`}
          >
            <div className="cardTop">
              <span>{item.category}</span>
              <small>{item.artifactUrl ? "Open artifact" : "Open source"}</small>
            </div>
            <Media item={item} />
            <h2>{item.title}</h2>
            <p className="creator">{item.creator}</p>
            <p className="cardSummary">{item.whyItMatters}</p>
            <div className="cardDetails">
              <p className="proof">{item.proof}</p>
              <p className={`status ${item.status}`}>{item.createdDuringWindow}</p>
              {item.engagement && (
                <div className="engagement">
                  {Object.entries(item.engagement).map(([key, value]) => (
                    <span key={key}>
                      {value} {key}
                    </span>
                  ))}
                </div>
              )}
              <div className="tags">
                {item.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <div className="links">
                {item.artifactUrl && (
                  <a href={item.artifactUrl} target="_blank" rel="noreferrer">
                    Open artifact
                  </a>
                )}
                <a href={item.sourceUrl} target="_blank" rel="noreferrer">
                  View source
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="synthesis" id="synthesis" aria-label="Why Fable looked impressive">
        <div className="sectionIntro">
          <p className="eyebrow">Synthesis</p>
          <h2>Why it felt different</h2>
          <p>
            The public reaction was not just benchmark excitement. It was a threshold feeling: people watched a model
            turn underspecified creative intent into complete, inspectable artifacts with working mechanics and enough
            design taste to feel authored.
          </p>
        </div>
        <div className="thesisPanel">
          <p className="eyebrow">Thesis</p>
          <h3>Fable made the artifact, not the answer, feel like the natural output of a model.</h3>
          <p>
            The strongest examples combine three things that usually fall apart separately: long-horizon execution,
            tasteful product judgment, and respect for the rules of a domain. That combination is what made the launch
            feel discontinuous. It did not merely help builders move faster; it briefly changed what counted as a
            reasonable first draft.
          </p>
          <div className="signalRow" aria-label="Evidence signals">
            {synthesisSignals.map((signal) => (
              <span key={signal}>{signal}</span>
            ))}
          </div>
        </div>
        <div className="synthesisList">
          {synthesisThemes.map((theme) => (
            <article key={theme.title}>
              <h3>{theme.title}</h3>
              <p>{theme.body}</p>
              <a href={theme.sourceUrl} target="_blank" rel="noreferrer">
                Source: {theme.sourceLabel}
              </a>
            </article>
          ))}
        </div>
      </section>

      <footer>
        Built from direct X/Reddit research, local media capture, Anthropic launch and system-card sources, and the
        public catalog{" "}
        <a href={catalogUrl} target="_blank" rel="noreferrer">
          Anil-matcha/awesome-claude-fable-5
        </a>
        , which collected many of the original posts used for source-backed entries. Every card links to the playable
        artifact when available, otherwise to the original source.
      </footer>
    </main>
  );
}

createRoot(document.getElementById("root")).render(<App />);
