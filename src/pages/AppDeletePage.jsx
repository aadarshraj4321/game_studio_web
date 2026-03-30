import React from "react";
import { Link, useParams } from "react-router-dom";
import { getAppBySlug } from "../data/apps";
import Container from "../components/common/Container";

export default function AppDeletePage() {
  const { appSlug } = useParams();
  const app = getAppBySlug(appSlug);

  if (!app) {
    return (
      <section className="page-section">
        <Container>
          <h1>App not found</h1>
        </Container>
      </section>
    );
  }

  // Right now this page is written specifically for Trimix
  if (app.slug !== "trimix") {
    return (
      <section className="page-section">
        <Container className="legal-page">
          <Link className="back-link" to={`/apps/${app.slug}`}>
            ← Back to {app.name}
          </Link>

          <p className="eyebrow">Delete Account / Data</p>
          <h1>{app.name} Account or Data Deletion</h1>
          <p>Delete account information for this app will be added soon.</p>
        </Container>
      </section>
    );
  }

  return (
    <section className="page-section">
      <Container className="legal-page">
        <Link className="back-link" to={`/apps/${app.slug}`}>
          ← Back to {app.name}
        </Link>

        <p className="eyebrow">Delete Account / Data</p>
        <h1>Trimix: 3-Min Workout Delete Account Information</h1>

        <p><strong>Effective date:</strong> March 30, 2026</p>

        <p>
          If you want to delete your Trimix account and associated account data,
          you can request deletion by emailing:
        </p>

        <p>
          <strong>aadarshraj4321@gmail.com</strong>
        </p>

        <p>Use this subject line:</p>
        <p>
          <strong>Delete My Trimix Account</strong>
        </p>

        <h2>What to include in your request</h2>
        <p>Please include:</p>
        <ul>
          <li>the email address linked to your Trimix account</li>
          <li>a short message requesting account deletion</li>
        </ul>

        <h2>What happens after you request deletion</h2>
        <p>
          After we receive a valid request, we will delete or anonymize the
          account data associated with your Trimix account within a reasonable
          period, unless some information must be retained for legal, security,
          fraud-prevention, compliance, or operational reasons.
        </p>

        <h2>Data that may be deleted</h2>
        <p>This may include:</p>
        <ul>
          <li>account profile information associated with Trimix</li>
          <li>workout history associated with your account</li>
          <li>progress data</li>
          <li>streak and achievement data</li>
          <li>saved preferences associated with your account</li>
        </ul>

        <h2>Data that may be retained for a limited period</h2>
        <p>We may retain limited information where necessary for:</p>
        <ul>
          <li>legal compliance</li>
          <li>security and fraud prevention</li>
          <li>enforcing our policies</li>
          <li>resolving disputes</li>
          <li>backup and system recovery cycles</li>
        </ul>

        <h2>Local device data</h2>
        <p>Some app data may remain on your device until you:</p>
        <ul>
          <li>uninstall the app</li>
          <li>clear app storage</li>
          <li>remove local app data from your device</li>
        </ul>

        <h2>Additional note</h2>
        <p>
          If you stop using the app without requesting deletion, account-related
          data may remain stored according to the retention practices described
          in the Trimix Privacy Policy.
        </p>

        <h2>Contact</h2>
        <p>For account deletion requests or related questions, contact:</p>
        <p>
          <strong>aadarshraj4321@gmail.com</strong>
        </p>
      </Container>
    </section>
  );
}