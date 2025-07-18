// src/data/social.ts
import { Social } from '@/types';
import {
    SiLinkedin,
    SiYoutube,
    SiVimeo,
    SiBehance,
    SiArtstation,
    SiGmail
} from 'react-icons/si';

export const SOCIAL: Social[] = [
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/pawel-wesolowski/',
        icon: <SiLinkedin className="text-4xl" />
    },
    {
        name: 'YouTube',
        url: 'https://www.youtube.com/',
        icon: <SiYoutube className="text-4xl" />
    },
    {
        name: 'Vimeo',
        url: 'https://vimeo.com/229182428',
        icon: <SiVimeo className="text-4xl" />
    },
    {
        name: 'Behance',
        url: 'https://www.behance.net/',
        icon: <SiBehance className="text-4xl" />
    },
    {
        name: 'Artstation',
        url: 'https://www.artstation.com/',
        icon: <SiArtstation className="text-4xl" />
    },
    {
        name: 'Mail',
        url: 'mailto:wesol4@gmail.com',
        icon: <SiGmail className="text-4xl" />
    }
];
