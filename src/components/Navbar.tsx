import React from 'react';
import Link from 'next/link';
import styles from '@/styles/components/Navbar.module.css';

const Navbar: React.FC = () => (
    <nav className={styles.nav}>
        <div className={styles.container}>
            <Link href="/"><a className={styles.logo}>freshFx</a></Link>
            <ul className={styles.navList}>
                {['/', '/demoreel', '/about', '/skills'].map((path, i) => {
                    const labels = ['Home','Demo Reel','About','Skills'];
                    return (
                        <li key={i}>
                            <Link href={path}>
                                <a className={styles.navLink}>{labels[i]}</a>
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    </nav>
);
<ul className={styles.navList}>
    <li><Link href="/" className={styles.navLink}>Home</Link></li>
    <li><Link href="/demoreel" className={styles.navLink}>Demo Reel</Link></li>
    <li><Link href="/about" className={styles.navLink}>About</Link></li>
    <li><Link href="/skills" className={styles.navLink}>Skills</Link></li>
</ul>

export default Navbar;
