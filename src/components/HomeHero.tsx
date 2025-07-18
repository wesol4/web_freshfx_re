import React from 'react';
import { NAME } from '@/data/constants';

const HomeHero: React.FC = () => (
    <section id="home" className="flex flex-col items-center justify-center min-h-screen px-4">
        <h1 className="text-5xl font-bold mb-4">
            Welcome to {NAME}
        </h1>
        <p className="text-xl mb-8 text-center max-w-2xl">
            Crafting cinematic VFX and dynamic simulations to bring your stories to life.
        </p>
        <img
            src="/images/hero-bg.jpg"
            alt="Hero Illustration"
            className="w-full max-w-lg rounded-lg shadow-lg"
        />
    </section>
);

export default HomeHero;