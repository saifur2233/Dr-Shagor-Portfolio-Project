import React, { useEffect, useState } from 'react';
import preloaderImg from '../assets/images/preloader.png';

function Preloader() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading completion
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {isLoading && (
                <div className="preloader">
                    <div className="vertical-centered-box">
                        <div className="content">
                            <div className="loader-circle"></div>
                            <div className="loader-line-mask">
                                <div className="loader-line"></div>
                            </div>
                            <img src={preloaderImg} alt="Preloader" />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default Preloader;
