import React from 'react';
import '../App.css'

const Gryffindor = ({charactersTab}) => {
    return(
        <React.Fragment>
            <h1>Gryffindor</h1>
            <h2 className="students-title">Student</h2>
            <h2 className="adults-title">Adults</h2>
            {
                charactersTab.map( (character, i) => {
                    return (<div key={character._id} className="student">

                        <h3>{character.name}</h3>
                        <ul>
                            {character.role == "student" && <li>Role : {character.role}</li>}
                            <li>Blood Status : {character.bloodStatus}</li>
                            <li>Part of Dumbledore's Army : {character.bloodStatus ? "Of Course !" : "No Thanks !"}</li>
                        </ul>


                    </div>)
                })

            }
        </React.Fragment>
    )
}

export default Gryffindor;