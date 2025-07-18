// src/components/SocialLink.tsx
import React from 'react';

interface SocialLinkProps {
    name: string;
    url: string;
    icon: React.ReactNode;
}

const SocialLink: React.FC<SocialLinkProps> = ({ name, url, icon }) => (
    <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={name}
        className="text-4xl hover:text-blue-500 transition"
    >
        {icon}
    </a>
);

export default SocialLink;
