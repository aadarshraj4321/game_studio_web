import { Link } from "react-router-dom";
import { Mail, Gamepad2 } from "lucide-react";

function GithubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.339-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.026 2.747-1.026.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.848-2.338 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.579.688.481C19.138 20.2 22 16.447 22 12.021 22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-inner">
          {/* Brand */}
          <div>
            <div className="footer-brand">
              <span className="footer-brand-icon">
                <Gamepad2 size={16} color="white" />
              </span>
              <span className="footer-brand-text">boyinfuture</span>
            </div>
            <p className="footer-text">
              Building games and apps with clarity, style, and real care. Every product ships with proper privacy pages and clean routes.
            </p>
            <div className="footer-social">
              <a href="mailto:aadarshraj4321@gmail.com" aria-label="Email">
                <Mail size={16} />
              </a>
              <a
                href="https://github.com/aadarshraj4321"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <GithubIcon />
              </a>
            </div>
          </div>

          {/* Games */}
          <div>
            <p className="footer-col-title">Games</p>
            <ul className="footer-links-list">
              <li><Link to="/games">All Games</Link></li>
              <li><Link to="/games/sort-garbage">Sort Garbage</Link></li>
              <li><Link to="/games/cricket-destruction">Cricket Destruction</Link></li>
              <li><Link to="/games/zombie-alien-space-adventure">Zombie Alien</Link></li>
              <li><Link to="/games/auto-express-highway-heist">Auto Express</Link></li>
            </ul>
          </div>

          {/* Apps */}
          <div>
            <p className="footer-col-title">Apps</p>
            <ul className="footer-links-list">
              <li><Link to="/apps">All Apps</Link></li>
              <li><Link to="/apps/trimix">Trimix Workout</Link></li>
              <li><Link to="/apps/streak-fighter">Streak Fighter</Link></li>
              <li><Link to="/apps/streak-fighter/privacy">Privacy Policy</Link></li>
              <li><Link to="/apps/streak-fighter/delete">Delete Account</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {year} boyinfuture. All rights reserved.</span>
          <span>
            <a href="mailto:aadarshraj4321@gmail.com">aadarshraj4321@gmail.com</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
