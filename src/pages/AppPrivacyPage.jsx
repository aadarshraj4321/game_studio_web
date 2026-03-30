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

  // Right now this page is written specifically for Trimix
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

        <p><strong>Effective date:</strong> March 30, 2026</p>

        <p>
          Trimix: 3-Min Workout ("Trimix", "we", "our", or "us") is a general
          fitness and wellness app designed to help users stay active with quick
          guided workouts, strength plans, reminders, progress tracking, and
          supportive coach audio.
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

        <h3>Account information</h3>
        <p>If you sign in, we may collect limited account information such as:</p>
        <ul>
          <li>name</li>
          <li>email address</li>
          <li>account identifier from the sign-in provider</li>
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
          <li>progress and strength-session data</li>
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

        <h2>4. Ads</h2>
        <p>Trimix may display ads in the free app experience.</p>
        <p>
          Third-party ad providers may process limited device or advertising
          information in accordance with their own privacy practices. These
          services may use advertising identifiers where supported by the
          platform.
        </p>
        <p>
          Trimix is designed to keep ads low-interruption and outside active
          workout flow where possible.
        </p>

        <h2>5. Notifications and Reminders</h2>
        <p>
          If you enable workout reminders, Trimix may schedule local
          notifications on your device. You can disable notifications at any
          time through your device settings or in-app settings where available.
        </p>

        <h2>6. Personalization and Audio Settings</h2>
        <p>Trimix may store your selected:</p>
        <ul>
          <li>coach language</li>
          <li>coach voice amount</li>
          <li>sound preferences</li>
          <li>haptics preferences</li>
          <li>training mode preferences</li>
        </ul>
        <p>This information is used only to personalize the app experience.</p>

        <h2>7. Data Sharing</h2>
        <p>We do not sell your personal information.</p>
        <p>
          We may share limited information only when necessary to operate the
          app, including with:
        </p>
        <ul>
          <li>authentication providers</li>
          <li>backend or infrastructure providers used for app functionality</li>
          <li>advertising providers used for the free app experience</li>
          <li>platform or delivery services needed to operate the app</li>
        </ul>

        <h2>8. Data Storage and Security</h2>
        <p>
          We use reasonable measures to protect your information. Data
          transmitted between the app and supporting services is intended to be
          encrypted in transit where supported.
        </p>
        <p>
          No system is completely secure, and we cannot guarantee absolute
          security.
        </p>

        <h2>9. Data Retention</h2>
        <p>We retain data for as long as needed to:</p>
        <ul>
          <li>provide app features</li>
          <li>maintain workout history and settings</li>
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

        <h2>10. Your Choices</h2>
        <p>You may be able to:</p>
        <ul>
          <li>update your app settings</li>
          <li>disable reminders and notifications</li>
          <li>sign out of your account</li>
          <li>request account deletion</li>
          <li>stop using the app at any time</li>
        </ul>
        <p>
          For account deletion, see the Delete Account information published by
          Trimix.
        </p>

        <h2>11. Children’s Privacy</h2>
        <p>
          Trimix is not directed to children under 13, and we do not knowingly
          collect personal information from children under 13. If you believe a
          child has provided personal information, contact us so we can review
          and delete it if appropriate.
        </p>

        <h2>12. Changes to This Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. If we make
          material changes, we may update the effective date above and publish
          the revised version.
        </p>

        <h2>13. Contact Us</h2>
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