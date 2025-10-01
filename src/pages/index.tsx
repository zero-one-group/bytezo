import type { ReactNode } from "react";
import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import Heading from "@theme/Heading";

import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Where Junior Developers Level Up`}
      description="Master modern web development with our comprehensive courses. Start with Node.js and build real-world applications."
    >
      <HomepageHeader />
      <main>
        <section className="container margin-vert--lg">
          <div className="row">
            <div className="col col--8 col--offset-2">
              <div className="text--center">
                <Heading as="h2">Featured Course</Heading>
                <div className="card margin-vert--md">
                  <div className="card__header">
                    <Heading as="h3">Modern Node.js Web Development</Heading>
                  </div>
                  <div className="card__body">
                    <p>
                      Learn to build scalable web applications with Node.js,
                      Fastify, and modern JavaScript. Perfect for junior
                      developers looking to advance their web development
                      skills.
                    </p>
                  </div>
                  <div className="card__footer">
                    <Link
                      className="button button--primary button--block"
                      to="/docs/nodejs-course"
                    >
                      Start Course
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
