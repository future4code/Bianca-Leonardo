import React, { useLayoutEffect } from 'react';
import { useHistory } from 'react-router';

function useProtectedPage() {
    const history = useHistory()
    
    useLayoutEffect(() => {
        // guarda o que estiver em token no localstorage em uma constante token
        const token = localStorage.getItem('token')
        // Caso token for diferente de true, redireciona para a tela de login
        if(!token) {
            history.push('/login')
        }
    })
}

export default useProtectedPage;