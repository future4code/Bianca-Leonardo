import React from 'react';
import Header from '../components/HeaderAdmin/HeaderAdmin';
import useProtectedPage from '../hooks/useProtectedPage';

function TripDetailPage() {
    useProtectedPage()
    
    return (
        <div>
            <Header />
            <div>Detalhamento da Viagem</div>
            <div>Candidatos Aprovados</div>
            <div>Candidados Pendentes</div>
        </div>
    );
}

export default TripDetailPage;