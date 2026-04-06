import React from "react";
import { Link, useParams } from "react-router-dom";
import { getAppBySlug } from "../data/apps";
import Container from "../components/common/Container";

function StreakFighterPrivacy() {
  return (
    <div className="legal-page">
      <p className="eyebrow">Privacy Policy</p>
      <h1>Streak Fighter: Habit Tracker — Privacy Policy</h1>

      <div className="legal-meta">
        <span><strong>Effective date:</strong> April 6, 2026</span>
        <span><strong>Last updated:</strong> April 6, 2026</span>
        <span><strong>Developer:</strong> boyinfuture</span>
        <span><strong>Contact:</strong> aadarshraj4321@gmail.com</span>
      </div>

      <p>
        This Privacy Policy explains how <strong>Streak Fighter: Habit Tracker</strong> ("Streak Fighter,"
        "we," "us," or "our") collects, uses, shares, and stores information when you use the Streak
        Fighter mobile application and related services.
      </p>
      <p>
        If you have questions about this Privacy Policy or our privacy practices, contact us at{" "}
        <strong>aadarshraj4321@gmail.com</strong>.
      </p>

      <h2>1. Who this policy applies to</h2>
      <p>
        This Privacy Policy applies to users of the Streak Fighter mobile app on Android and any related
        support or account-deletion pages that we provide.
      </p>

      <h2>2. Information we collect</h2>

      <h3>A. Account and sign-in information</h3>
      <p>If you sign in with Google, we may collect and store:</p>
      <ul>
        <li>your email address</li>
        <li>your public profile name or username</li>
        <li>your Google profile image, if made available to us</li>
        <li>authentication tokens required to keep your session active</li>
      </ul>

      <h3>B. App profile and gameplay data</h3>
      <p>To provide the app's habit tracking and progression features, we may collect and store:</p>
      <ul>
        <li>your username</li>
        <li>your level, XP, rank, and health</li>
        <li>your habit entries</li>
        <li>habit schedules and frequencies</li>
        <li>habit completion, skip, and miss logs</li>
        <li>streak values</li>
        <li>strength, focus, discipline, and energy stats</li>
        <li>unlocked titles, skins, trophies, and related progression state</li>
      </ul>

      <h3>C. Device, app, and diagnostic information</h3>
      <p>We and our service providers may process limited technical information such as:</p>
      <ul>
        <li>device type</li>
        <li>operating system version</li>
        <li>app version</li>
        <li>crash and error information</li>
        <li>basic performance and diagnostic information</li>
      </ul>

      <h3>D. Notifications and reminder data</h3>
      <p>If you enable notifications, we may process:</p>
      <ul>
        <li>notification permission status</li>
        <li>reminder times associated with your habits</li>
        <li>reminder scheduling metadata required to deliver habit reminders</li>
      </ul>

      <h3>E. Advertising-related information</h3>
      <p>
        If ads are shown in the app, our advertising partners may process information necessary to
        deliver and measure ads, which may include:
      </p>
      <ul>
        <li>advertising identifiers</li>
        <li>device identifiers</li>
        <li>basic ad interaction information</li>
      </ul>

      <h3>F. Local device storage</h3>
      <p>
        The app also stores some information locally on your device to support offline use and app
        preferences, such as:
      </p>
      <ul>
        <li>onboarding state</li>
        <li>ambient audio volume preference</li>
        <li>cached habit and progress data</li>
        <li>queued offline actions waiting to sync</li>
      </ul>

      <h2>3. How we use your information</h2>
      <p>We use your information to:</p>
      <ul>
        <li>create and manage your app account</li>
        <li>authenticate you and maintain your session</li>
        <li>provide habit tracking, streaks, progress, and game mechanics</li>
        <li>sync your data across sessions and devices</li>
        <li>schedule notifications and reminders</li>
        <li>support offline use and later synchronization</li>
        <li>display and manage in-app ads</li>
        <li>improve app stability, security, and performance</li>
        <li>respond to support or deletion requests</li>
        <li>comply with legal obligations and enforce our terms</li>
      </ul>

      <h2>4. Legal basis and consent</h2>
      <p>Depending on your location, we may process your information:</p>
      <ul>
        <li>to provide the app features you request</li>
        <li>with your consent, such as for notifications where required</li>
        <li>for our legitimate interests in operating, improving, and securing the app</li>
        <li>to comply with legal obligations</li>
      </ul>

      <h2>5. How we share information</h2>
      <p>We do not sell your personal information.</p>
      <p>We may share information with trusted service providers that help us operate the app:</p>
      <ul>
        <li><strong>Supabase</strong> for authentication, database, and backend services</li>
        <li><strong>Google Sign-In</strong> for account authentication</li>
        <li><strong>Google AdMob</strong> for in-app advertising</li>
        <li><strong>Expo services and related mobile infrastructure</strong> for notifications and app functionality</li>
      </ul>
      <p>We may also disclose information:</p>
      <ul>
        <li>if required by law, regulation, or legal process</li>
        <li>to protect the safety, rights, or property of users, us, or others</li>
        <li>in connection with a merger, acquisition, financing, or sale of assets</li>
      </ul>

      <h2>6. Data retention</h2>
      <p>
        We retain information only for as long as necessary to operate the app and fulfill the purposes
        described in this policy, unless a longer retention period is required by law.
      </p>
      <p>In general:</p>
      <ul>
        <li>account and habit data are retained while your account remains active</li>
        <li>local cached data may remain on your device until you uninstall the app or clear app storage</li>
        <li>
          some limited records may be retained for security, fraud prevention, dispute resolution, backup
          recovery, or legal compliance
        </li>
      </ul>
      <p>
        When you request account deletion, we will delete or de-identify your account data unless we are
        required or permitted to retain certain information for legitimate legal or security reasons.
      </p>

      <h2>7. Account deletion and data deletion</h2>
      <p>If you created or use an app account, you may request deletion of your account and associated data.</p>
      <p>To request deletion:</p>
      <ul>
        <li>use the in-app deletion path: Profile → Account → Delete Account, or</li>
        <li>
          email <strong>aadarshraj4321@gmail.com</strong> with the subject line:{" "}
          <em>Delete My Streak Fighter Account</em>
        </li>
      </ul>
      <p>
        When we process a valid deletion request, we will delete the app account and associated user data
        within a reasonable period, subject to any lawful retention requirements.
      </p>
      <p>
        For more detail, see our{" "}
        <Link to="/apps/streak-fighter/delete">Account Deletion Policy</Link>.
      </p>

      <h2>8. Your choices</h2>
      <p>You can:</p>
      <ul>
        <li>choose whether to sign in with Google</li>
        <li>disable notifications in your device settings</li>
        <li>delete habits or app data within the app</li>
        <li>uninstall the app at any time</li>
        <li>request deletion of your account and associated data</li>
      </ul>

      <h2>9. Data security</h2>
      <p>
        We use reasonable technical and organizational measures designed to protect your information.
        However, no system is completely secure, and we cannot guarantee absolute security.
      </p>

      <h2>10. Children</h2>
      <p>
        Streak Fighter is not intended for children under the age required by applicable law to use the
        service independently. If you believe a child provided personal information to us without
        appropriate authorization, contact us at <strong>aadarshraj4321@gmail.com</strong>.
      </p>

      <h2>11. International data transfers</h2>
      <p>
        Your information may be processed and stored in countries other than your own, including where
        our service providers operate. By using the app, you understand that your information may be
        transferred to and processed in those locations, subject to applicable safeguards and law.
      </p>

      <h2>12. Changes to this Privacy Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. When we do, we will update the "Last
        updated" date above. If changes are material, we may provide additional notice where appropriate.
      </p>

      <h2>13. Contact us</h2>
      <p>For privacy questions, support requests, or data deletion requests, contact:</p>
      <ul>
        <li><strong>Developer / Publisher:</strong> boyinfuture</li>
        <li><strong>App:</strong> Streak Fighter: Habit Tracker</li>
        <li><strong>Email:</strong> aadarshraj4321@gmail.com</li>
      </ul>
    </div>
  );
}

function TrimixPrivacy() {
  return (
    <div className="legal-page">
      <p className="eyebrow">Privacy Policy</p>
      <h1>Trimix: 3-Min Workout — Privacy Policy</h1>

      <div className="legal-meta">
        <span><strong>Effective date:</strong> March 30, 2026</span>
        <span><strong>Developer:</strong> boyinfuture</span>
        <span><strong>Contact:</strong> aadarshraj4321@gmail.com</span>
      </div>

      <p>
        Trimix: 3-Min Workout ("Trimix", "we", "our", or "us") is a general fitness and wellness app
        designed to help users stay active with quick guided workouts, strength plans, reminders,
        progress tracking, leaderboard features, friend connections, and supportive coach audio.
      </p>
      <p>
        Trimix is intended only for general fitness and wellness purposes. It is not a medical app and
        does not provide medical advice, diagnosis, treatment, monitoring, or prevention of any disease
        or condition.
      </p>

      <h2>1. Information We Collect</h2>
      <h3>Account and profile information</h3>
      <p>If you sign in, we may collect limited account and profile information such as:</p>
      <ul>
        <li>name</li>
        <li>email address</li>
        <li>account identifier from the sign-in provider</li>
        <li>username</li>
        <li>selected avatar</li>
        <li>public profile information used for leaderboard and friends features</li>
      </ul>

      <h3>Workout and app usage information</h3>
      <ul>
        <li>workouts completed</li>
        <li>workout history and streaks</li>
        <li>achievements and milestones</li>
        <li>training preferences and reminder settings</li>
        <li>progress and strength-session data</li>
        <li>weekly leaderboard points and rank status</li>
        <li>friend requests, accepted friends, and leaderboard activity</li>
      </ul>

      <h3>Device and technical information</h3>
      <ul>
        <li>device type and operating system version</li>
        <li>app version</li>
        <li>crash and diagnostic data</li>
        <li>advertising identifiers where applicable</li>
      </ul>

      <h2>2. How We Use Information</h2>
      <ul>
        <li>provide and operate the app</li>
        <li>save workout history and user progress</li>
        <li>personalize the app experience</li>
        <li>support reminders and engagement features</li>
        <li>enable leaderboard, ranking, and friends features</li>
        <li>improve reliability, quality, and performance</li>
        <li>show ads in the free app experience</li>
      </ul>

      <h2>3. Data Sharing</h2>
      <p>We do not sell your personal information. We may share limited information with:</p>
      <ul>
        <li>authentication providers</li>
        <li>backend or infrastructure providers</li>
        <li>advertising providers for the free app experience</li>
      </ul>

      <h2>4. Data Retention</h2>
      <p>
        If you request account deletion, we will delete or anonymize applicable account-related data
        within a reasonable period unless retention is required for legal, security, fraud-prevention,
        compliance, or operational reasons.
      </p>

      <h2>5. Contact Us</h2>
      <p>
        <strong>aadarshraj4321@gmail.com</strong>
      </p>
    </div>
  );
}

export default function AppPrivacyPage() {
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

        {app.slug === "streak-fighter" && <StreakFighterPrivacy />}
        {app.slug === "trimix" && <TrimixPrivacy />}
        {app.slug !== "streak-fighter" && app.slug !== "trimix" && (
          <div className="legal-page">
            <p className="eyebrow">Privacy Policy</p>
            <h1>{app.name} Privacy Policy</h1>
            <p>Privacy policy content for this app will be added soon.</p>
          </div>
        )}
      </Container>
    </section>
  );
}
