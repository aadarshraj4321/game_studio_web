import { Link, useParams } from "react-router-dom";
import { getAppBySlug } from "../data/apps";
import Container from "../components/common/Container";

function StreakFighterDelete() {
  return (
    <div className="legal-page">
      <p className="eyebrow">Account Deletion Policy</p>
      <h1>Streak Fighter: Habit Tracker — Account Deletion</h1>

      <div className="legal-meta">
        <span><strong>Effective date:</strong> April 6, 2026</span>
        <span><strong>Last updated:</strong> April 6, 2026</span>
        <span><strong>Developer:</strong> boyinfuture</span>
        <span><strong>Contact:</strong> aadarshraj4321@gmail.com</span>
      </div>

      <p>
        This Account Deletion Policy explains how users of <strong>Streak Fighter: Habit Tracker</strong> can
        request deletion of their app account and associated data.
      </p>

      <h2>1. Who can request deletion</h2>
      <p>
        Any user with a Streak Fighter account may request deletion of their app account and associated
        user data.
      </p>
      <p>
        If the app is used without signing in, uninstalling the app or clearing app storage will remove
        locally stored data on that device, but it will not affect any server-side account because no
        signed-in app account is being used.
      </p>

      <h2>2. How to request account deletion</h2>

      <h3>Option A: In-app request</h3>
      <p>If available in the app, go to:</p>
      <ul>
        <li>Profile</li>
        <li>Account</li>
        <li>Delete Account</li>
      </ul>
      <p>Then follow the on-screen confirmation steps.</p>

      <h3>Option B: Email request</h3>
      <p>
        Email <strong>aadarshraj4321@gmail.com</strong> using the subject line:
      </p>
      <p><strong>Delete My Streak Fighter Account</strong></p>
      <p>To help us process your request, include:</p>
      <ul>
        <li>the email address used for your app account</li>
        <li>your app username, if available</li>
        <li>a brief request to delete your account and associated data</li>
      </ul>

      <h2>3. What happens when you request deletion</h2>
      <p>
        Once we verify and process a valid request, we will delete or de-identify the app account and
        associated user data, which may include:
      </p>
      <ul>
        <li>account profile data</li>
        <li>habit entries</li>
        <li>habit logs</li>
        <li>streak and progression data</li>
        <li>stats, levels, rank, and related profile state</li>
        <li>collection-related unlock state linked to the account</li>
      </ul>

      <h2>4. What may be retained</h2>
      <p>We may retain limited information where necessary for:</p>
      <ul>
        <li>legal compliance</li>
        <li>fraud prevention</li>
        <li>security and abuse prevention</li>
        <li>dispute resolution</li>
        <li>backup recovery within a limited period</li>
      </ul>
      <p>
        If any data must be retained for these reasons, we will retain only what is reasonably necessary
        and for as long as required.
      </p>

      <h2>5. Deletion timing</h2>
      <p>
        We will process deletion requests within a reasonable period after verification, subject to any
        legal or operational requirements.
      </p>
      <p>
        If additional information is needed to confirm account ownership, we may contact the user before
        completing the deletion request.
      </p>

      <h2>6. Important note about uninstalling</h2>
      <p>
        Uninstalling the app alone does not necessarily delete your server-side account or associated
        cloud data if you signed in with Google or otherwise created an app account.
      </p>
      <p>
        To delete your account and associated cloud data, you must use one of the deletion request
        methods described above.
      </p>

      <h2>7. Contact</h2>
      <p>For deletion requests or questions, contact:</p>
      <ul>
        <li><strong>Developer / Publisher:</strong> boyinfuture</li>
        <li><strong>App:</strong> Streak Fighter: Habit Tracker</li>
        <li><strong>Email:</strong> aadarshraj4321@gmail.com</li>
      </ul>
    </div>
  );
}

function TrimixDelete() {
  return (
    <div className="legal-page">
      <p className="eyebrow">Delete Account / Data</p>
      <h1>Trimix: 3-Min Workout — Delete Account</h1>

      <div className="legal-meta">
        <span><strong>Effective date:</strong> March 30, 2026</span>
        <span><strong>Developer:</strong> boyinfuture</span>
        <span><strong>Contact:</strong> aadarshraj4321@gmail.com</span>
      </div>

      <p>
        If you want to delete your Trimix account and associated account data, you can request deletion
        by emailing <strong>aadarshraj4321@gmail.com</strong>.
      </p>
      <p>Use this subject line: <strong>Delete My Trimix Account</strong></p>

      <h2>What to include in your request</h2>
      <ul>
        <li>the email address linked to your Trimix account</li>
        <li>a short message requesting account deletion</li>
      </ul>

      <h2>What happens after you request deletion</h2>
      <p>
        After we receive a valid request, we will delete or anonymize the account data associated with
        your Trimix account within a reasonable period, unless some information must be retained for
        legal, security, fraud-prevention, compliance, or operational reasons.
      </p>

      <h2>Data that may be deleted</h2>
      <ul>
        <li>account profile information associated with Trimix</li>
        <li>workout history associated with your account</li>
        <li>progress data</li>
        <li>streak and achievement data</li>
        <li>saved preferences associated with your account</li>
      </ul>

      <h2>Data that may be retained</h2>
      <ul>
        <li>legal compliance</li>
        <li>security and fraud prevention</li>
        <li>enforcing our policies</li>
        <li>resolving disputes</li>
        <li>backup and system recovery cycles</li>
      </ul>

      <h2>Contact</h2>
      <p><strong>aadarshraj4321@gmail.com</strong></p>
    </div>
  );
}

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

  return (
    <section className="page-section">
      <Container>
        <div className="back-row">
          <Link className="back-link" to={`/apps/${app.slug}`}>
            ← Back to {app.name}
          </Link>
        </div>

        {app.slug === "streak-fighter" && <StreakFighterDelete />}
        {app.slug === "trimix" && <TrimixDelete />}
        {app.slug !== "streak-fighter" && app.slug !== "trimix" && (
          <div className="legal-page">
            <p className="eyebrow">Delete Account / Data</p>
            <h1>{app.name} — Account Deletion</h1>
            <p>Account deletion information for this app will be added soon.</p>
            <p>
              In the meantime, email <strong>aadarshraj4321@gmail.com</strong> to request deletion.
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}
