import React from 'react';

const BackgroundAnimation: React.FC = () => (
    <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-blue-900 via-indigo-900 to-black animate-gradient" />
        <style jsx>{`
            @keyframes gradientAnimation {
                0% { background-position: 0% 50%; }
                50% { background-position: 100% 50%; }
                100% { background-position: 0% 50%; }
            }
            .animate-gradient {
                background-size: 200% 200%;
                animation: gradientAnimation 15s ease infinite;
            }
        `}</style>
    </div>
);

export default BackgroundAnimation;
