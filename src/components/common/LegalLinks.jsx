import { Link } from "react-router-dom";
import { Shield, Trash2 } from "lucide-react";

export default function LegalLinks({ basePath }) {
  return (
    <div className="legal-links-grid">
      <Link to={`${basePath}/privacy`} className="legal-card">
        <Shield size={20} />
        <div>
          <h3>Privacy Policy</h3>
          <p>See how data is collected and used.</p>
        </div>
      </Link>

      <Link to={`${basePath}/delete`} className="legal-card">
        <Trash2 size={20} />
        <div>
          <h3>Delete Account / Data</h3>
          <p>See how users can request account or data deletion.</p>
        </div>
      </Link>
    </div>
  );
}