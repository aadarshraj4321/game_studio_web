import { Link, useParams } from "react-router-dom";
import { getAppBySlug } from "../data/apps";
import Container from "../components/common/Container";
import LegalLinks from "../components/common/LegalLinks";
import { Star, Download } from "lucide-react";

export default function AppDetailPage() {
  const { appSlug } = useParams();
  const app = getAppBySlug(appSlug);

  if (!app) {
    return (
      <section className="page-section">
        <Container>
          <h1>App not found</h1>
          <Link className="btn btn-secondary" to="/apps" style={{ marginTop: 16 }}>← Back to Apps</Link>
        </Container>
      </section>
    );
  }

  const accentColor = app.accent || "#6c63ff";

  return (
    <section className="page-section">
      <Container>
        <div className="back-row">
          <Link className="back-link" to="/apps">← Back to Apps</Link>
        </div>

        <div className="detail-layout single-column">
          <div className="detail-content">
            {/* App icon header */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 20,
                marginBottom: 24,
                paddingBottom: 24,
                borderBottom: "1px solid var(--border)",
              }}
            >
              <div
                style={{
                  width: 80,
                  height: 80,
                  borderRadius: 20,
                  background: `linear-gradient(135deg, ${accentColor}33, ${accentColor}11)`,
                  border: `1px solid ${accentColor}44`,
                  display: "grid",
                  placeItems: "center",
                  fontSize: "2.2rem",
                  flexShrink: 0,
                }}
              >
                {app.icon || "📱"}
              </div>
              <div>
                <p className="eyebrow" style={{ marginBottom: 4 }}>{app.category}</p>
                <h1 style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)", marginBottom: 6 }}>{app.name}</h1>
                <p className="detail-tagline" style={{ margin: 0 }}>{app.tagline}</p>
              </div>
            </div>

            <p className="detail-description">{app.description}</p>

            <div className="detail-meta">
              <span><Download size={14} /> {app.downloads} downloads</span>
              {app.rating > 0 && (
                <span>
                  <Star size={14} style={{ color: "#fbbf24", fill: "#fbbf24" }} />
                  {app.rating} rating
                </span>
              )}
            </div>

            <h2 style={{ marginTop: 24, marginBottom: 16 }}>Features</h2>
            <ul className="feature-list">
              {app.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            {app.screenshots && app.screenshots.length > 0 && (
              <>
                <h2 style={{ marginTop: 28, marginBottom: 4 }}>Screenshots</h2>
                <div className="screenshot-row">
                  {app.screenshots.map((shot, index) => (
                    <img
                      key={index}
                      src={shot}
                      alt={`${app.name} screenshot ${index + 1}`}
                      className="screenshot-img"
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        <div className="legal-section">
          <p className="eyebrow">Legal & Account</p>
          <h2 style={{ marginBottom: 20 }}>Privacy & Data</h2>
          <LegalLinks basePath={`/apps/${app.slug}`} />
        </div>
      </Container>
    </section>
  );
}
