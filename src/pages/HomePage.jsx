import { Link } from "react-router-dom";
import { games } from "../data/games";
import { apps } from "../data/apps";
import GameCard from "../components/cards/GameCard";
import AppCard from "../components/cards/AppCard";
import Container from "../components/common/Container";

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <Container>
          <div className="hero-content">
            <p className="eyebrow">Welcome to yngStudio</p>
            <h1>Games and apps with proper pages, cleaner design, and real routes.</h1>
            <p className="section-description">
              Explore mobile games, useful apps, and dedicated privacy and delete pages for each product.
            </p>

            <div className="hero-actions">
              <Link className="btn btn-primary" to="/games">Explore Games</Link>
              <Link className="btn btn-secondary" to="/apps">Explore Apps</Link>
            </div>
          </div>
        </Container>
      </section>

      <section className="page-section">
        <Container>
          <div className="section-title">
            <p className="eyebrow">Featured Games</p>
            <h2>Published Games</h2>
          </div>

          <div className="grid grid-3">
            {games.map((game) => (
              <GameCard key={game.slug} game={game} />
            ))}
          </div>
        </Container>
      </section>

      <section className="page-section">
        <Container>
          <div className="section-title">
            <p className="eyebrow">Apps</p>
            <h2>Published Apps</h2>
          </div>

          <div className="grid grid-3">
            {apps.map((app) => (
              <AppCard key={app.slug} app={app} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}