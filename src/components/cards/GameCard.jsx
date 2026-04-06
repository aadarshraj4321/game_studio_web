import { Link } from "react-router-dom";
import { Star, Download, ArrowRight } from "lucide-react";

export default function GameCard({ game }) {
  return (
    <article className="card">
      <Link to={`/games/${game.slug}`} className="card-image-link">
        <img src={game.image} alt={game.title} className="card-image" />
        <div className="card-image-overlay" />
      </Link>

      <div className="card-body">
        <div className="card-badge-row">
          <span className="badge">{game.category}</span>
          {game.downloads !== "0+" && (
            <span className="badge badge-new">
              <Download size={10} />
              {game.downloads}
            </span>
          )}
        </div>

        <h3>{game.title}</h3>
        <p className="card-tagline">{game.tagline}</p>
        <p className="card-description">{game.description}</p>

        <div className="card-stats">
          <span>
            <Download size={13} />
            {game.downloads}
          </span>
          {game.rating > 0 && (
            <span>
              <Star size={13} style={{ color: "#fbbf24", fill: "#fbbf24" }} />
              {game.rating}
            </span>
          )}
        </div>

        <div className="card-actions">
          <Link className="btn btn-primary" to={`/games/${game.slug}`}>
            <ArrowRight size={15} />
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
