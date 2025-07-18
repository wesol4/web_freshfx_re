// src/hooks/useIsLoaded.ts
import { useState, useEffect } from 'react';

/**
 * Hook to toggle a loading state after a specified delay.
 * @param delay Time in milliseconds to show the loader (default: 2000ms)
 * @returns boolean indicating if loading is complete
 */
const useIsLoaded = (delay: number = 2000): boolean => {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, delay);

        return () => clearTimeout(timer);
    }, [delay]);

    return isLoaded;
};

export default useIsLoaded;
