// src/pages/demoreel.tsx
import React from 'react';
import Head from 'next/head';
import DemoReelPlayer from '@/components/DemoReelPlayer';

const DemoReelPage: React.FC = () => (
    <>
        <Head>
            <title>Demo Reel - freshFx</title>
            <meta
                name="description"
                content="Watch the VFX demo reel showcasing cinematic visuals, particle simulations, pyro effects, and compositing."
            />
        </Head>
        <DemoReelPlayer />
    </>
);

export default DemoReelPage;