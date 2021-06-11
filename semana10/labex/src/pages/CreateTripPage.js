import React from 'react';
import HeaderAdmin from '../components/HeaderAdmin/HeaderAdmin';
import useProtectedPage from '../hooks/useProtectedPage';

function CreateTripPage() {
    useProtectedPage()

    return (
        <div>
            <HeaderAdmin />
            <h3>Nova Viagem</h3>
            <form onSubmit=''>
                <input placeholder={'Nome'}/>
                <select>
                    <option>Escolha um Planeta</option>
                    <option value={'mercurio'}>Mercúrio</option>
                    <option value={'venus'}>Vênus</option>
                    <option value={'terra'}>Terra</option>
                    <option value={'marte'}>Marte</option>
                    <option value={'jupiter'}>Júpiter</option>
                    <option value={'saturno'}>Saturno</option>
                    <option value={'urano'}>Urano</option>
                    <option value={'netuno'}>Netuno</option>
                    <option value={'plutao'}>Plutão</option>
                </select>
                <input type='date' />
                <textarea placeholder={'Descrição'}/>
                <input type={'number'} placeholder={'Duração em Dias'}/>
                <button>Adicionar Viagem</button>
            </form>
        </div>
    );
}

export default CreateTripPage;