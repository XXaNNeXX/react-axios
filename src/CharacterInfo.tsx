import {RickAndMortyCharacter} from "./RickAndMortyCharacters.ts";

type CharacterCard = {
    oneCharacter: RickAndMortyCharacter
}

export default function characterInfo(props: CharacterCard) {

    return (

        <div className="character-info">
            <h3>Character:</h3>
            <ul>
                <li>{props.oneCharacter.name}</li>
                <li>{props.oneCharacter.status}</li>
                <li>{props.oneCharacter.species}</li>
            </ul>
        </div>
    )
}