import React from "react";
import { apps } from "../data/apps";
import AppCard from "../components/cards/AppCard";
import Container from "../components/common/Container";
import SectionTitle from "../components/common/SectionTitle";

export default function AppsPage() {
  return (
    <section className="page-section">
      <Container>
        <SectionTitle
          eyebrow="Apps"
          title="All Apps"
          description="Each app has its own detail page, privacy page, and delete page."
        />

        <div className="grid grid-3">
          {apps.map((app) => (
            <AppCard key={app.slug} app={app} />
          ))}
        </div>
      </Container>
    </section>
  );
}