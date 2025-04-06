import React, { createContext, useState } from 'react';

export const LatestDreamContext = createContext();

export const LatestDreamProvider = ({ children }) => {
    const [latestDream, setLatestDream] = useState({
        title: 'Cat interviews you while you fly a bike',
        image: require('@/assets/images/cat.png'),
        likes: 128,
        date: 'April 3, 2025',
    });

    return (
        <LatestDreamContext.Provider value={{ latestDream, setLatestDream }}>
            {children}
        </LatestDreamContext.Provider>
    );
};
