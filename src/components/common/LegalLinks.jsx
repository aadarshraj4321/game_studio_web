import { Link } from "react-router-dom";
import { Shield, Trash2 } from "lucide-react";

export default function LegalLinks({ basePath }) {
  return (
    <div className="legal-links-grid">
      <Link to={`${basePath}/privacy`} className="legal-card">
        <div
          className="legal-card-icon"
          style={{ background: "rgba(108, 99, 255, 0.12)", border: "1px solid rgba(108, 99, 255, 0.2)" }}
        >
          <Shield size={18} color="var(--primary-light)" />
        </div>
        <div>
          <h3>Privacy Policy</h3>
          <p>How data is collected, used, and protected.</p>
        </div>
      </Link>

      <Link to={`${basePath}/delete`} className="legal-card">
        <div
          className="legal-card-icon"
          style={{ background: "rgba(255, 71, 87, 0.1)", border: "1px solid rgba(255, 71, 87, 0.2)" }}
        >
          <Trash2 size={18} color="var(--danger)" />
        </div>
        <div>
          <h3>Delete Account / Data</h3>
          <p>How to request account or data deletion.</p>
        </div>
      </Link>
    </div>
  );
}
