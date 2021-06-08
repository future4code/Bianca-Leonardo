import React from 'react';
import { useHistory } from 'react-router';
import { goToListTripsPage, goToLoginPage } from '../routes/coordinator';

function HomePage() {
    const history = useHistory()

    return (
        <div>
            <h2>LabeX</h2>

            <button onClick={() => goToLoginPage(history)}>Login</button>
            <button onClick={() => goToListTripsPage(history)}>Ver Viagens</button>
        </div>
    );
}

export default HomePage;