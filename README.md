freshFX
Home | Projects | About | Resume

Hi there! 👋
I’m freshFX –
VFX Artist • Houdini Artist • Compositing • 3D Generalist

Selection of my professional VFX work, including particle simulations, explosive pyro FX, compositing, 3D tracking, and FX‑driven sequences crafted in Houdini and Nuke.

Launch Showreel

Let me introduce myself
With over 15 years of experience, I’m a dedicated VFX artist specializing in particle simulations, pyro and explosive effects, high‑end compositing, and 3D tracking in Houdini and Nuke. I thrive on crafting cinematic visuals and solving complex technical challenges to bring stories to life on screen.

Contact
wesol4@gmail.com
+48 535 185 100

About me
Professional Skillset
• Houdini  
• Nuke  
• Unreal Engine  
• SynthEyes  
• After Effects  
• Python  
• Blender

Resume
Download CV

Designed & Developed by freshFX  
© 2025 freshFX



/
├── public/
│   ├── favicon.ico
│   ├── robots.txt
│   ├── manifest.json
│   ├── images/
│   │   ├── hero-bg.jpg
│   │   ├── demo-thumbnail.jpg
│   │   └── about-photo.png
│   └── icons/
│       └── logo.svg
│
├── src/
│   ├── assets/
│   │   ├── images/               # importowane w kodzie
│   │   │   ├── home-illustration.png
│   │   │   ├── skills-icons/…     # np. houdini.png, nuke.png
│   │   └── icons/                # Lottie JSON, custom SVG jako komponent
│   │       └── SiSynthEyes.tsx
│   │
│   ├── components/
│   │   ├── BackgroundAnimation.tsx   # gradienty, animowany background
│   │   ├── LoaderSpinner.tsx         # obracający się niepełny okrąg
│   │   ├── Navbar.tsx                # menu nawigacji
│   │   ├── Layout.tsx                # <Background /><Loader /><Navbar /> + children
│   │   ├── HomeHero.tsx              # nagłówek strony głównej (tekst + obrazek)
│   │   ├── DemoReelPlayer.tsx        # embed Vimeo + przełączanie po kliknięciu
│   │   ├── AboutDetails.tsx          # tekst “O mnie”, telefon, mail, social links
│   │   ├── SkillsGrid.tsx            # siatka ikon + opisy umiejętności
│   │   └── SocialLink.tsx            # pojedynczy przycisk/ikona social
│   │
│   ├── data/
│   │   ├── constants.ts              # NAME, ABOUT_TEXT, PHONE, EMAIL…
│   │   ├── skills.ts                 # export const SKILLS = [...]
│   │   ├── projects.ts               # export const PROJECTS = [...]
│   │   └── social.ts                 # export const SOCIAL = [...]
│   │
│   ├── hooks/
│   │   └── useIsLoaded.ts            # np. kontrola stanu pokazania loadera
│   │
│   ├── pages/                        # Next.js routing
│   │   ├── _app.tsx                  # import 'globals.css', <Layout>
│   │   ├── index.tsx                 # Home: <HomeHero />
│   │   ├── demoreel.tsx              # DemoReel: <DemoReelPlayer />
│   │   ├── about.tsx                 # About: <AboutDetails />
│   │   └── skills.tsx                # Skills: <SkillsGrid />
│   │
│   ├── styles/
│   │   ├── globals.css               # reset, podstawowe kolory, fonty
│   │   └── components/
│   │       ├── Navbar.module.css
│   │       ├── LoaderSpinner.module.css
│   │       └── HomeHero.module.css
│   │
│   ├── types/
│   │   └── index.ts                  # Project, Skill, Social
│   │
│   └── utils/
│       └── formatPhone.ts
│
├── .gitignore
├── README.md
├── package.json
├── tsconfig.json
└── next.config.js
