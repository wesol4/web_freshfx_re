import React from 'react';
import { SKILLS } from '@/data/skills';

const SkillsGrid: React.FC = () => (
    <section id="skills" className="max-w-4xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold mb-6">My Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
            {SKILLS.map(skill => (
                <div key={skill.name} className="flex flex-col items-center">
                    <div className="text-6xl mb-2">{skill.icon}</div>
                    <span className="mt-2 text-lg font-medium">{skill.name}</span>
                </div>
            ))}
        </div>
    </section>
);

export default SkillsGrid;


/* SocialLink.tsx */
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
