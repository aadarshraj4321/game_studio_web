import React from "react";
import { Link } from "react-router-dom";

export default function AppCard({ app }) {
  return (
    <article className="card">
      <div className="card-body">
        <div className="card-badge-row">
          <span className="badge">{app.category}</span>
        </div>

        <h3>{app.name}</h3>
        <p className="card-tagline">{app.tagline}</p>
        <p className="card-description">{app.description}</p>

        <div className="card-actions">
          <Link className="btn btn-primary" to={`/apps/${app.slug}`}>
            View App
          </Link>
        </div>
      </div>
    </article>
  );
}