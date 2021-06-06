import axios from 'axios';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { URL_BASE } from '../../constants/Url';
import CardListMatches from '../CardListMatches/CardListMatches';

function ListMatches(props) {

    const [matches, setMatches] = useState([])

    useEffect(() => {
        getMatches()
    }, [])

    const getMatches = () => {
        axios.get(`${URL_BASE}/matches`)
            .then((res) => {
                // console.log(res.data.matches)
                setMatches(res.data.matches)
            }).catch((err) => {
                console.log(err)
            })
    }
    return (
        <div>
            {matches.map((matche) => {
                return <CardListMatches
                    key={matche.id}
                    photo={matche.photo}
                    name={matche.name}
                    id={matche.id}
                />
            })}

        </div>
    );
}

export default ListMatches;