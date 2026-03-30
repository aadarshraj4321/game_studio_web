import { Mail, Twitter, Github } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <div className="footer-logo">yngStudio</div>
          <p className="footer-text">
            Games and apps built with clarity, style, and better structure.
          </p>
        </div>

        <div className="footer-links">
          <a href="mailto:aadarshraj4321@gmail.com" aria-label="Email">
            <Mail size={18} />
          </a>
          <a href="https://twitter.com/yngstudio" target="_blank" rel="noreferrer" aria-label="Twitter">
            <Twitter size={18} />
          </a>
          <a href="https://github.com/aadarshraj4321" target="_blank" rel="noreferrer" aria-label="Github">
            <Github size={18} />
          </a>
        </div>
      </div>
    </footer>
  );
}