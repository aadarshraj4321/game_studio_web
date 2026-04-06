import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";

export default function AppCard({ app }) {
  const accentColor = app.accent || "#6c63ff";

  return (
    <article className="card">
      {/* Icon header */}
      <Link to={`/apps/${app.slug}`} className="card-image-link" style={{ height: 140 }}>
        <div
          className="card-icon-wrap"
          style={{ height: "100%", background: `linear-gradient(135deg, ${accentColor}22, ${accentColor}08)` }}
        >
          <div
            className="card-icon-bg"
            style={{ background: `radial-gradient(circle at 60% 40%, ${accentColor}44, transparent 70%)` }}
          />
          <span className="card-icon">{app.icon || "📱"}</span>
        </div>
      </Link>

      <div className="card-body">
        <div className="card-badge-row">
          <span className="badge">{app.category}</span>
          {app.downloads === "New" && (
            <span className="badge badge-new">New</span>
          )}
        </div>

        <h3>{app.name}</h3>
        <p className="card-tagline">{app.tagline}</p>
        <p className="card-description">{app.description}</p>

        {app.rating > 0 && (
          <div className="card-stats">
            <span>
              <Star size={13} style={{ color: "#fbbf24", fill: "#fbbf24" }} />
              {app.rating}
            </span>
            <span>{app.downloads} downloads</span>
          </div>
        )}

        <div className="card-actions">
          <Link className="btn btn-primary" to={`/apps/${app.slug}`}>
            <ArrowRight size={15} />
            View App
          </Link>
        </div>
      </div>
    </article>
  );
}
