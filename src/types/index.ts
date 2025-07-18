// src/types/index.ts
import React from 'react';

/**
 * Represents a project with optional demo and GitHub links.
 */
export interface Project {
    title: string;
    description: string;
    image: string;
    githubLink: string;
    demoLink?: string;
    videoEmbedUrl?: string;
}

/**
 * Represents a skill with an icon for display.
 */
export interface Skill {
    name: string;
    icon: React.ReactNode;
}

/**
 * Represents a social media link.
 */
export interface Social {
    name: string;
    url: string;
    icon: React.ReactNode;
}
