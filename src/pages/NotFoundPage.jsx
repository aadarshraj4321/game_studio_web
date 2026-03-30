import { Link } from "react-router-dom";
import Container from "../components/common/Container";

export default function NotFoundPage() {
  return (
    <section className="page-section">
      <Container>
        <h1>404 - Page Not Found</h1>
        <p className="section-description">
          The page you are looking for does not exist.
        </p>
        <Link className="btn btn-primary" to="/">
          Go Home
        </Link>
      </Container>
    </section>
  );
}