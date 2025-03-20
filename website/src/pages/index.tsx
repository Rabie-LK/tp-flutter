import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import styles from './index.module.css';
import React from 'react';

function HomepageHeader() {
  return (
    <div className={styles.heroBanner}>
      <div className={styles.container}>
        <Heading as="h1" className={styles.title}>
          Flutter
        </Heading>
        <p className={styles.subtitle}>
          Développez des applications mobiles modernes
        </p>
        <div className={styles.buttons}>
          <a
            className={styles.button}
            href="/tp-flutter/docs/Installation">
            Commencer le TP
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="TP React Native - UMONS">
      <HomepageHeader />
    </Layout>
  );
}