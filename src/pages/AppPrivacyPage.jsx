import React from "react";
import { Link, useParams } from "react-router-dom";
import { getAppBySlug } from "../data/apps";
import Container from "../components/common/Container";

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

  if (app.slug !== "trimix") {
    return (
      <section className="page-section">
        <Container className="legal-page">
          <Link className="back-link" to={`/apps/${app.slug}`}>
            ← Back to {app.name}
          </Link>

          <p className="eyebrow">Privacy Policy</p>
          <h1>{app.name} Privacy Policy</h1>
          <p>Privacy policy content for this app will be added soon.</p>
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

        <p className="eyebrow">Privacy Policy</p>
        <h1>Trimix: 3-Min Workout Privacy Policy</h1>

        <p>
          <strong>Effective date:</strong> March 30, 2026
        </p>

        <p>
          Trimix: 3-Min Workout ("Trimix", "we", "our", or "us") is a general
          fitness and wellness app designed to help users stay active with quick
          guided workouts, strength plans, reminders, progress tracking,
          leaderboard features, friend connections, and supportive coach audio.
        </p>

        <p>
          Trimix is intended only for general fitness and wellness purposes. It
          is not a medical app and does not provide medical advice, diagnosis,
          treatment, monitoring, or prevention of any disease or condition.
        </p>

        <p>
          This Privacy Policy explains what information we collect, how we use
          it, and what choices you have.
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
        <p>
          We may collect and store information related to how you use the app,
          including:
        </p>
        <ul>
          <li>workouts completed</li>
          <li>workout history</li>
          <li>streaks</li>
          <li>achievements and milestones</li>
          <li>training preferences</li>
          <li>coach language and coach settings</li>
          <li>reminder preferences</li>
          <li>selected training style</li>
          <li>selected weekly split</li>
          <li>progress and strength-session data</li>
          <li>leaderboard points</li>
          <li>weekly league and rank status</li>
          <li>friend requests, accepted friends, and related leaderboard activity</li>
        </ul>

        <h3>Device and technical information</h3>
        <p>
          We may collect limited technical information needed to operate and
          improve the app, such as:
        </p>
        <ul>
          <li>device type</li>
          <li>operating system version</li>
          <li>app version</li>
          <li>crash and diagnostic data</li>
          <li>advertising identifiers where applicable</li>
        </ul>

        <h3>Advertising-related data</h3>
        <p>
          If the free app experience includes ads, third-party advertising
          services may collect limited device and advertising-related
          information to deliver and measure ads.
        </p>

        <h2>2. How We Use Information</h2>
        <p>We use information to:</p>
        <ul>
          <li>provide and operate the app</li>
          <li>save workout history and user progress</li>
          <li>personalize the app experience</li>
          <li>support reminders and engagement features</li>
          <li>enable leaderboard, ranking, and friends features</li>
          <li>show your username, selected avatar, rank, and leaderboard points to other users where those social features apply</li>
          <li>improve reliability, quality, and performance</li>
          <li>show ads in the free app experience</li>
          <li>help protect the app, our users, and our services</li>
        </ul>

        <h2>3. Sign-In and Account Creation</h2>
        <p>
          If you sign in through a provider such as Google, we may receive
          limited account information from that provider for authentication and
          account support.
        </p>
        <p>We use this information only to:</p>
        <ul>
          <li>authenticate your account</li>
          <li>support account continuity</li>
          <li>save and restore account-linked app data where applicable</li>
        </ul>

        <h2>4. Leaderboards, Friends, and Public Profile Information</h2>
        <p>
          If you use social features such as leaderboards, friend requests, or
          friends boards, certain profile and progress information may be
          visible to other users inside the app.
        </p>
        <p>This may include:</p>
        <ul>
          <li>username</li>
          <li>selected avatar</li>
          <li>display name</li>
          <li>weekly leaderboard points</li>
          <li>league or rank status</li>
          <li>friend-request and friendship status</li>
        </ul>
        <p>
          We do not display your email address publicly to other users through
          leaderboards, friend requests, or friends features.
        </p>

        <h2>5. Ads</h2>
        <p>Trimix may display ads in the free app experience.</p>
        <p>
          Third-party ad providers may process limited device, diagnostic, and
          advertising-related information, including advertising identifiers
          where supported by the platform, in accordance with their own privacy
          practices.
        </p>
        <p>
          Trimix is designed to keep ads low-interruption and outside active
          workout flow where possible.
        </p>

        <h2>6. Notifications and Reminders</h2>
        <p>
          If you enable workout reminders, Trimix may schedule local
          notifications on your device. You can disable notifications at any
          time through your device settings or in-app settings where available.
        </p>

        <h2>7. Personalization and Audio Settings</h2>
        <p>Trimix may store your selected:</p>
        <ul>
          <li>coach language</li>
          <li>coach voice amount</li>
          <li>sound preferences</li>
          <li>haptics preferences</li>
          <li>training mode preferences</li>
          <li>selected avatar</li>
          <li>selected weekly split</li>
        </ul>
        <p>This information is used only to personalize the app experience.</p>

        <h2>8. Data Sharing</h2>
        <p>We do not sell your personal information.</p>
        <p>
          We may share limited information only when necessary to operate the
          app, including with:
        </p>
        <ul>
          <li>authentication providers</li>
          <li>backend or infrastructure providers used for account, leaderboard, and friends features</li>
          <li>advertising providers used for the free app experience</li>
          <li>platform or delivery services needed to operate the app</li>
        </ul>

        <h2>9. Data Storage and Security</h2>
        <p>
          We use reasonable measures to protect your information. Data
          transmitted between the app and supporting services is intended to be
          encrypted in transit where supported.
        </p>
        <p>
          No system is completely secure, and we cannot guarantee absolute
          security.
        </p>

        <h2>10. Data Retention</h2>
        <p>We retain data for as long as needed to:</p>
        <ul>
          <li>provide app features</li>
          <li>maintain workout history and settings</li>
          <li>support leaderboard and friends features</li>
          <li>comply with legal obligations</li>
          <li>resolve disputes</li>
          <li>enforce our policies</li>
        </ul>
        <p>
          If you request account deletion, we will delete or anonymize
          applicable account-related data within a reasonable period unless
          retention is required for legal, security, fraud-prevention,
          compliance, or operational reasons.
        </p>

        <h2>11. Your Choices</h2>
        <p>You may be able to:</p>
        <ul>
          <li>update your app settings</li>
          <li>disable reminders and notifications</li>
          <li>sign out of your account</li>
          <li>request account deletion</li>
          <li>stop using the app at any time</li>
        </ul>
        <p>
          If you signed in and created an account-linked profile, you may
          request deletion of your account-related data. For account deletion,
          see the Delete Account information published by Trimix.
        </p>

        <h2>12. Children’s Privacy</h2>
        <p>
          Trimix is not directed to children under 13, and we do not knowingly
          collect personal information from children under 13. If you believe a
          child has provided personal information, contact us so we can review
          and delete it if appropriate.
        </p>

        <h2>13. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. If we make
          material changes, we may update the effective date above and publish
          the revised version.
        </p>

        <h2>14. Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy or your data, contact:
        </p>
        <p>
          <strong>aadarshraj4321@gmail.com</strong>
        </p>
      </Container>
    </section>
  );
}
