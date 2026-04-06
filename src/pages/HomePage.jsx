import { Link } from "react-router-dom";
import { games } from "../data/games";
import { apps } from "../data/apps";
import GameCard from "../components/cards/GameCard";
import AppCard from "../components/cards/AppCard";
import Container from "../components/common/Container";
import { Gamepad2, Smartphone, ArrowRight, Zap } from "lucide-react";

export default function HomePage() {
  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="hero">
        <Container>
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-dot">✦</span>
              Indie Studio · Android
            </div>

            <h1>
              <span className="gradient-text">Games & Apps</span>
              <br />
              Built with Purpose
            </h1>

            <p className="section-description">
              boyinfuture crafts mobile games and productivity apps with real polish,
              clean routes, and proper privacy pages for every product.
            </p>

            <div className="hero-actions">
              <Link className="btn btn-primary btn-lg" to="/games">
                <Gamepad2 size={18} />
                Explore Games
              </Link>
              <Link className="btn btn-secondary btn-lg" to="/apps">
                <Smartphone size={18} />
                Explore Apps
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Stats Strip ───────────────────────────────────────── */}
      <section className="stats-strip">
        <Container>
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">4</div>
              <div className="stat-label">Published Games</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">2</div>
              <div className="stat-label">Published Apps</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5K+</div>
              <div className="stat-label">Total Downloads</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">4.6★</div>
              <div className="stat-label">Avg Rating</div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Games Section ─────────────────────────────────────── */}
      <section className="page-section">
        <Container>
          <div className="section-header">
            <div className="section-title" style={{ marginBottom: 0 }}>
              <p className="eyebrow">
                <Gamepad2 size={11} style={{ display: "inline", marginRight: 6 }} />
                Games
              </p>
              <h2>Published Games</h2>
              <p className="section-description">
                Mobile games built for Android — action, puzzle, racing, and sports.
              </p>
            </div>
            <Link className="btn btn-secondary" to="/games">
              View All
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid grid-3">
            {games.map((game) => (
              <GameCard key={game.slug} game={game} />
            ))}
          </div>
        </Container>
      </section>

      <div className="divider" />

      {/* ── Apps Section ──────────────────────────────────────── */}
      <section className="page-section">
        <Container>
          <div className="section-header">
            <div className="section-title" style={{ marginBottom: 0 }}>
              <p className="eyebrow">
                <Smartphone size={11} style={{ display: "inline", marginRight: 6 }} />
                Apps
              </p>
              <h2>Published Apps</h2>
              <p className="section-description">
                Productivity and lifestyle apps designed to improve your daily routine.
              </p>
            </div>
            <Link className="btn btn-secondary" to="/apps">
              View All
              <ArrowRight size={15} />
            </Link>
          </div>

          <div className="grid grid-2">
            {apps.map((app) => (
              <AppCard key={app.slug} app={app} />
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="cta-section">
        <Container>
          <div className="cta-box">
            <p className="eyebrow">Get in Touch</p>
            <h2>Let's Work Together</h2>
            <p>
              Have a project idea, feedback, or collaboration proposal?
              Reach out — we're always open to new conversations.
            </p>
            <a
              href="mailto:aadarshraj4321@gmail.com"
              className="btn btn-primary btn-lg"
            >
              <Zap size={16} />
              Contact boyinfuture
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
