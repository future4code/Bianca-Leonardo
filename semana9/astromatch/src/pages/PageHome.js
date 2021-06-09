import axios from 'axios';
import React from 'react';
import swal from 'sweetalert';
import CardPrincipal from '../components/CardPrincipal/CardPrincipal';
import { URL_BASE } from '../constants/Url';
import {PageContainer} from './style'


function PageHome() {

    const clear = () => {
        axios.put(`${URL_BASE}/clear`)
        .then((res) => {
            swal('Matches Zerados', '', "success");
        }).catch((err) => {
            swal('Ocorreu um erro', '', "error");
        })
    }
    return (
        <PageContainer>
            <CardPrincipal />
            <button onClick={clear}>Resetar Matches</button>
        </PageContainer>
    );
}

export default PageHome;