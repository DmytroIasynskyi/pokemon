import {useEffect, useState} from "react";
import {fetchPokemon, PokemonDataView, PokemonInfoFallback} from "./pokemon.jsx";

export default function PokemonInfo({pokemonName}) {
    const [state, setState] = useState({
        status: 'idle',
        pokemon: null,
        error: null
    })
    const {status, pokemon, error} = state;

    useEffect(() => {
        if (pokemonName) {
            setState({status: 'pending'});
            fetchPokemon(pokemonName).then(
                pokemonData => {
                    setState({pokemon: pokemonData, status: 'resolved'})
                },
                error => {
                    setState({error:error, status: 'rejected'})
                }
            )
        }
    }, [pokemonName]);

    if (status === 'idle') return 'Submit a pokemon';
    if (status === 'pending') return <PokemonInfoFallback name={pokemonName} />;
    if (status === 'resolved') return <PokemonDataView pokemon={pokemon} />;
    if (status === 'rejected') throw error;
}