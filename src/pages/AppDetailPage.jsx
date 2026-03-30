import { Link, useParams } from "react-router-dom";
import { getAppBySlug } from "../data/apps";
import Container from "../components/common/Container";
import LegalLinks from "../components/common/LegalLinks";

export default function AppDetailPage() {
  const { appSlug } = useParams();
  const app = getAppBySlug(appSlug);

  if (!app) {
    return (
      <section className="page-section">
        <Container>
          <h1>App not found</h1>
          <Link className="btn btn-secondary" to="/apps">Back to Apps</Link>
        </Container>
      </section>
    );
  }

  return (
    <section className="page-section">
      <Container>
        <div className="back-row">
          <Link className="back-link" to="/apps">← Back to Apps</Link>
        </div>

        <div className="detail-layout single-column">
          <div className="detail-content">
            <p className="eyebrow">{app.category}</p>
            <h1>{app.name}</h1>
            <p className="detail-tagline">{app.tagline}</p>
            <p className="detail-description">{app.description}</p>

            <div className="detail-meta">
              <span>Downloads: {app.downloads}</span>
              <span>Rating: {app.rating}</span>
            </div>

            <h2>Features</h2>
            <ul className="feature-list">
              {app.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            <h2>Screenshots</h2>
            <div className="screenshot-row">
              {app.screenshots.map((shot, index) => (
                <img key={index} src={shot} alt={`${app.name} screenshot ${index + 1}`} className="screenshot-img" />
              ))}
            </div>
          </div>
        </div>

        <div className="legal-section">
          <h2>Legal & Account</h2>
          <LegalLinks basePath={`/apps/${app.slug}`} />
        </div>
      </Container>
    </section>
  );
}