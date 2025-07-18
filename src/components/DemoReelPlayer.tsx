/* DemoReelPlayer.tsx */
import React, { useState } from 'react';
import { PROJECTS } from '@/data/projects';

interface DemoReelPlayerProps {
    projectIndex?: number;
}

const DemoReelPlayer: React.FC<DemoReelPlayerProps> = ({ projectIndex = 0 }) => {
    const { demoLink, videoEmbedUrl, title } = PROJECTS[projectIndex];
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => setIsPlaying(true);

    return (
        <section id="demoreel" className="max-w-4xl mx-auto px-4 py-16">
            <h2 className="text-3xl font-semibold mb-6">{title}</h2>
            <div className="relative w-full" style={{ paddingBottom: '56.25%' /* 16:9 */ }}>
                {!isPlaying ? (
                    <button
                        onClick={handlePlay}
                        className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 hover:bg-opacity-50 transition"
                    >
                        <img
                            src="/images/demo-thumbnail.jpg"
                            alt="Demo thumbnail"
                            className="absolute inset-0 w-full h-full object-cover" />
                        <span className="relative text-white text-6xl">▶</span>
                    </button>
                ) : (
                    <iframe
                        src={videoEmbedUrl}
                        title={title}
                        className="absolute inset-0 w-full h-full"
                        frameBorder="0"
                        allow="autoplay; fullscreen"
                        allowFullScreen
                    />
                )}
            </div>
            <p className="mt-4 text-center">
                or view on{' '}
                <a
                    href={demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                >Vimeo</a>
            </p>
        </section>
    );
};

export default DemoReelPlayer;