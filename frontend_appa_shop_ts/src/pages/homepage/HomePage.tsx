import React from 'react';

import './HomePage.css';
import Directory from '../../components/directory/Directory';

const HomePage: React.FC = function () {
    return (
        <div className="homepage">
            <Directory />
        </div>
    );
};

export default HomePage;
