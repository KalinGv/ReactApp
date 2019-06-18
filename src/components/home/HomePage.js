import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return (
        <div>
        <h1>Wellcome</h1>
        <Link to="ttt" className="btn btn-primary btn-lg">
            Play game
        </Link>

    </div>
    );
    

};

export default HomePage;