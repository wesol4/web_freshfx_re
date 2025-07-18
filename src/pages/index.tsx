// src/pages/index.tsx
import React from 'react';
import Head from 'next/head';
import HomeHero from '@/components/HomeHero';

const HomePage: React.FC = () => (
    <>
        <Head>
            <title>Home - freshFx</title>
            <meta
                name="description"
                content="freshFx portfolio: cinematic VFX, particle simulations, pyro effects, compositing and 3D tracking."
            />
        </Head>
        <HomeHero />
    </>
);

export default HomePage;