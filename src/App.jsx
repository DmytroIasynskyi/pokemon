import ErrorBoundary from "./ErrorBoundary.jsx";
import PokemonInfo from "./PokemonInfo.jsx";
import {PokemonForm} from "./pokemon.jsx";
import ErrorFallback from "./ErrorFallback.jsx";
import React from "react";

function App() {
    const [pokemonName, setPokemonName] = React.useState('')

    function handleSubmit(newPokemonName) {
        setPokemonName(newPokemonName)
    }

    return (
        <div className="pokemon-info-app">
            <PokemonForm pokemonName={pokemonName} onSubmit={handleSubmit} />
            <hr />
            <div className="pokemon-info">
                <ErrorBoundary key={pokemonName} FallBackComponent={ErrorFallback}>
                    <PokemonInfo pokemonName={pokemonName} />
                </ErrorBoundary>
            </div>
        </div>
    )
}

export default App
