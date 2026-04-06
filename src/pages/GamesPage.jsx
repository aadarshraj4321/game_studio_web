import { games } from "../data/games";
import GameCard from "../components/cards/GameCard";
import Container from "../components/common/Container";
import { Gamepad2 } from "lucide-react";

export default function GamesPage() {
  return (
    <>
      <section className="page-hero">
        <Container>
          <div className="hero-content">
            <div className="hero-badge">
              <span className="hero-badge-dot">
                <Gamepad2 size={12} color="white" />
              </span>
              Android Games
            </div>
            <h1>
              <span className="gradient-text">Our Games</span>
            </h1>
            <p className="section-description">
              Action, puzzle, racing, and sports — every game ships with its own
              detail page, privacy policy, and account deletion route.
            </p>
          </div>
        </Container>
      </section>

      <section className="page-section">
        <Container>
          <div className="grid grid-3">
            {games.map((game) => (
              <GameCard key={game.slug} game={game} />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
