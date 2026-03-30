import { Link } from "react-router-dom";
import { Star, Download } from "lucide-react";

export default function GameCard({ game }) {
  return (
    <article className="card">
      <Link to={`/games/${game.slug}`} className="card-image-link">
        <img src={game.image} alt={game.title} className="card-image" />
      </Link>

      <div className="card-body">
        <div className="card-badge-row">
          <span className="badge">{game.category}</span>
        </div>

        <h3>{game.title}</h3>
        <p className="card-tagline">{game.tagline}</p>
        <p className="card-description">{game.description}</p>

        <div className="card-stats">
          <span><Download size={14} /> {game.downloads}</span>
          <span><Star size={14} /> {game.rating}</span>
        </div>

        <div className="card-actions">
          <Link className="btn btn-primary" to={`/games/${game.slug}`}>
            View Game
          </Link>
          <a
            className="btn btn-secondary"
            href={game.playStoreUrl}
            target="_blank"
            rel="noreferrer"
          >
            Play Store
          </a>
        </div>
      </div>
    </article>
  );
}