import React from 'react';
import { ABOUT_TEXT, PHONE, EMAIL } from '@/data/constants';
import { SOCIAL } from '@/data/social';
import SocialLink from '@/components/SocialLink';

const AboutDetails: React.FC = () => {
    return (
        <section id="about" className="max-w-3xl mx-auto px-4 py-16">
            <h2 className="text-3xl font-semibold mb-4">About Me</h2>
            <p className="text-lg leading-relaxed mb-8">
                {ABOUT_TEXT}
            </p>

            <div className="mb-8">
                <h3 className="text-2xl font-medium mb-2">Contact</h3>
                <ul className="space-y-1">
                    <li>
                        <strong>Phone:</strong>{' '}
                        <a
                            href={`tel:${PHONE}`}
                            className="text-blue-500 hover:underline"
                        >
                            {PHONE}
                        </a>
                    </li>
                    <li>
                        <strong>Email:</strong>{' '}
                        <a
                            href={`mailto:${EMAIL}`}
                            className="text-blue-500 hover:underline"
                        >
                            {EMAIL}
                        </a>
                    </li>
                </ul>
            </div>

            <div>
                <h3 className="text-2xl font-medium mb-4">Find me on</h3>
                <div className="flex space-x-4">
                    {SOCIAL.map((item) => (
                        <SocialLink
                            key={item.name}
                            name={item.name}
                            url={item.url}
                            icon={item.icon}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutDetails;
