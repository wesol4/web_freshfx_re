// src/pages/about.tsx
import React from 'react';
import Head from 'next/head';
import AboutDetails from '@/components/AboutDetails';

const AboutPage: React.FC = () => (
    <>
        <Head>
            <title>About - freshFx</title>
            <meta name="description" content="Learn more about freshFx, a VFX artist specializing in particle simulations, pyro effects, and compositing." />
        </Head>
        <AboutDetails />
    </>
);

export default AboutPage;