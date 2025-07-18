// src/pages/skills.tsx
import React from 'react';
import Head from 'next/head';
import SkillsGrid from '@/components/SkillsGrid';

const SkillsPage: React.FC = () => (
    <>
        <Head>
            <title>Skills - freshFx</title>
            <meta
                name="description"
                content="Discover the VFX, compositing, and 3D skills of freshFx, including Houdini, Nuke, Unreal Engine, and more."
            />
        </Head>
        <SkillsGrid />
    </>
);

export default SkillsPage;