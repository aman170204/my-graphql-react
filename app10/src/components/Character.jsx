import React, { useState, useEffect } from "react";

const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const fetchData = () => {
    fetch("https://rickandmortyapi.com/graphql", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            query: `{
            characters{
                results{
                id
                name
                species
                gender
                origin{
                    name
                    dimension
                }
                    image
                }    
            }
            }`,
        })
    })
        .then((response) => response.json())
        .then((data) => (
            setCharacters(data.data.characters.results);
            console.log(data);
        ))
        .catch((error) => console.error("Error fetching data", error));
    };

useEffect(() => { fetchData(); }, []);

return (
    <div>
        <h2 className="text-center">All Charatcers</h2>
        <ul>
            {   
                characters.map((character) => <li key={character.id}>{character.name}x
                </li>)
            }
        </ul>
    </div>

)

};

export default Characters;