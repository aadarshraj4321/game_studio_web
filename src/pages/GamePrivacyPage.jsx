import { Link, useParams } from "react-router-dom";
import { getGameBySlug } from "../data/games";
import Container from "../components/common/Container";

export default function GamePrivacyPage() {
  const { gameSlug } = useParams();
  const game = getGameBySlug(gameSlug);

  if (!game) {
    return (
      <section className="page-section">
        <Container>
          <h1>Game not found</h1>
        </Container>
      </section>
    );
  }

  return (
    <section className="page-section">
      <Container className="legal-page">
        <Link className="back-link" to={`/games/${game.slug}`}>← Back to {game.title}</Link>

        <p className="eyebrow">Privacy Policy</p>
        <h1>{game.title} Privacy Policy</h1>

        <h2>Introduction</h2>
        <p>
          This Privacy Policy explains how {game.title} may collect, use, and protect information.
        </p>

        <h2>Information We May Collect</h2>
        <ul>
          <li>Basic device information</li>
          <li>App usage analytics</li>
          <li>Crash reports</li>
          <li>Support communication if the user contacts you</li>
        </ul>

        <h2>How We Use Information</h2>
        <ul>
          <li>To improve game performance</li>
          <li>To fix crashes and bugs</li>
          <li>To maintain app safety and reliability</li>
        </ul>

        <h2>Contact</h2>
        <p>
          For privacy questions, contact:
          {" "}
          <a href="mailto:aadarshraj4321@gmail.com">aadarshraj4321@gmail.com</a>
        </p>
      </Container>
    </section>
  );
}