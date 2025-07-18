// src/components/Layout.tsx
import React from 'react';
import BackgroundAnimation from '@/components/BackgroundAnimation';
import LoaderSpinner from '@/components/LoaderSpinner';
import Navbar from '@/components/Navbar';
import useIsLoaded from '@/hooks/useIsLoaded';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const isLoaded = useIsLoaded(2000);

    return (
        <>
            <BackgroundAnimation />
            {!isLoaded ? (
                <LoaderSpinner />
            ) : (
                <>
                    <Navbar />
                    <main className="relative z-10">{children}</main>
                </>
            )}
        </>
    );
};

export default Layout;
