import { apps } from "../data/apps";
import AppCard from "../components/cards/AppCard";
import Container from "../components/common/Container";
import { Smartphone } from "lucide-react";

export default function AppsPage() {
  return (
    <>
      <section className="page-hero">
        <Container>
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-dot">
                <Smartphone size={12} color="white" />
              </span>
              Android Apps
            </div>
            <h1>
              <span className="gradient-text">Our Apps</span>
            </h1>
            <p className="section-description">
              Productivity and lifestyle apps designed to improve your daily routine —
              each with proper privacy and account deletion pages.
            </p>
          </div>
        </Container>
      </section>

      <section className="page-section">
        <Container>
          <div className="grid grid-2">
            {apps.map((app) => (
              <AppCard key={app.slug} app={app} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
