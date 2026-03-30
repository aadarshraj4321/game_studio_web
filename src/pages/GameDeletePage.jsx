import { Link, useParams } from "react-router-dom";
import { getGameBySlug } from "../data/games";
import Container from "../components/common/Container";

export default function GameDeletePage() {
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

        <p className="eyebrow">Delete Account / Data</p>
        <h1>{game.title} Account or Data Deletion</h1>

        <p>
          If you want to request deletion of your account or related data for {game.title},
          send an email to:
          {" "}
          <a href="mailto:aadarshraj4321@gmail.com">aadarshraj4321@gmail.com</a>
        </p>

        <h2>Please include</h2>
        <ul>
          <li>Your game name: {game.title}</li>
          <li>Your user ID or device details if available</li>
          <li>A clear statement that you want your account/data deleted</li>
        </ul>

        <h2>Processing</h2>
        <p>
          Requests are reviewed manually and processed within a reasonable time.
        </p>
      </Container>
    </section>
  );
}