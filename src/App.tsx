import './App.css'
import {Route, Routes} from "react-router-dom";
import Welcome from "./Welcome.tsx";
import {useEffect, useState} from 'react'
import CharactersOutput from "./CharactersOutput.tsx";
import {RickAndMortyCharacter} from "./RickAndMortyCharacters.ts";
import Header from "./Header.tsx";
import axios from "axios";


export default function App() {

    const [character, setCharacter] = useState<RickAndMortyCharacter[]>([])

    useEffect(() =>
            loadCharacters(),
        []
    )
    function loadCharacters() {
        axios.get("https://rickandmortyapi.com/api/character")
            .then((response) => {
                //console.log(response.status)
                //console.log(response.data.results)
                setCharacter(response.data.results)
            })
            .catch((reason) => console.error(reason.message))
            .finally(() => console.log("Fertig"))
    }

    return (
        <>
            <Header/>
            <Routes>
                <Route path={"/"} element={<Welcome/>}/>
                <Route path={"/welcome"} element={<Welcome/>}/>
                <Route path={"/characters"} element={<CharactersOutput allCharacters={character}/>}/>
            </Routes>

        </>
    )
}


