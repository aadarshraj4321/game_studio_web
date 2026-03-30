import { games } from "../data/games";
import GameCard from "../components/cards/GameCard";
import Container from "../components/common/Container";
import SectionTitle from "../components/common/SectionTitle";

export default function GamesPage() {
  return (
    <section className="page-section">
      <Container>
        <SectionTitle
          eyebrow="Games"
          title="All Games"
          description="Every game has its own detail route, privacy route, and delete route."
        />

        <div className="grid grid-3">
          {games.map((game) => (
            <GameCard key={game.slug} game={game} />
          ))}
        </div>
      </Container>
    </section>
  );
}