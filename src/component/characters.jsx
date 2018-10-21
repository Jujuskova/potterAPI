import React from 'react';
import Gryffindor from './gryffindor';

const CharactersHP = ({charactersTab}) => {

        return (
            <div className="Characters">
                <Gryffindor charactersTab={charactersTab}/>
            </div>
        )
}

{/**

<ul>
    { // create a list with all the characters name
    charactersTab.map((character) => {
        return character.house ? 
            <li key={character._id}>{character.name} is in {character.house}</li> : 
            <li key={character._id}>{character.name} </li>
        })
    }
</ul>

*/}

export default CharactersHP;