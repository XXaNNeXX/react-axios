import {RickAndMortyCharacter} from "./RickAndMortyCharacters.ts";
import CharacterInfo from "./CharacterInfo.tsx";
import {ChangeEvent, useState} from "react";

type CharactersOutput = {
    allCharacters: RickAndMortyCharacter[]
}

export default function charactersOutput(props: CharactersOutput) {

    const [inputText, setInputText] = useState<string>("")

    const filteredCharacter = props.allCharacters.filter(item => item.name.toLowerCase().includes(inputText.toLowerCase()))

    function findCharacter(event: ChangeEvent<HTMLInputElement>) {
        setInputText(event.target.value)
    }

    return (

        <div>
            <p>Search characters:</p>
            <input onChange={findCharacter} value={inputText}/>
            <h2>GALLERY</h2>
            {filteredCharacter.map(item => <CharacterInfo
                key={item.id}
                oneCharacter={item}
            />)}
        </div>
    )
}