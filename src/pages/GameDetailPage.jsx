import { Link, useParams } from "react-router-dom";
import { getGameBySlug } from "../data/games";
import Container from "../components/common/Container";
import LegalLinks from "../components/common/LegalLinks";

export default function GameDetailPage() {
  const { gameSlug } = useParams();
  const game = getGameBySlug(gameSlug);

  if (!game) {
    return (
      <section className="page-section">
        <Container>
          <h1>Game not found</h1>
          <Link className="btn btn-secondary" to="/games">Back to Games</Link>
        </Container>
      </section>
    );
  }

  return (
    <section className="page-section">
      <Container>
        <div className="back-row">
          <Link className="back-link" to="/games">← Back to Games</Link>
        </div>

        <div className="detail-layout">
          <div className="detail-media">
            <img src={game.image} alt={game.title} className="detail-image" />
          </div>

          <div className="detail-content">
            <p className="eyebrow">{game.category}</p>
            <h1>{game.title}</h1>
            <p className="detail-tagline">{game.tagline}</p>
            <p className="detail-description">{game.description}</p>

            <div className="detail-meta">
              <span>Downloads: {game.downloads}</span>
              <span>Rating: {game.rating}</span>
              <span>Reviews: {game.reviews}</span>
            </div>

            <div className="detail-actions">
              <a
                className="btn btn-primary"
                href={game.playStoreUrl}
                target="_blank"
                rel="noreferrer"
              >
                Open Play Store
              </a>
            </div>
          </div>
        </div>

        <div className="legal-section">
          <h2>Legal & Account</h2>
          <LegalLinks basePath={`/games/${game.slug}`} />
        </div>
      </Container>
    </section>
  );
}