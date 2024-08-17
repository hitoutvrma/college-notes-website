import React, { useState } from 'react';
import './UserStatistics.css';

const UserStatistics = () => {
    const [userCount, setUserCount] = useState(0);
    const [userRating, setUserRating] = useState(0);

    const updateStatistics = () => {
        const randomUserCount = Math.floor(Math.random() * 1000) + 1; // Random user count between 1 and 1000
        const randomUserRating = (Math.random() * 5).toFixed(1); // Random rating between 0.0 and 5.0
        setUserCount(randomUserCount);
        setUserRating(randomUserRating);
    };

    return (
        <div className="statistics-container">
            <div className="statistic">
                <h2>{userCount}</h2>
                <p>Users</p>
            </div>
            <div className="statistic">
                <h2>{userRating}</h2>
                <p>Average Rating</p>
            </div>
            {/* <button onClick={updateStatistics}>Update Stats</button> */}
        </div>
    );
};

export default UserStatistics;
