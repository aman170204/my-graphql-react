import { useQuery, gql } from "@apollo/client";

const GET_CHARACTERS = gql`
    {
      characters{
                results{
                    id
                    name
                    status
                    species
                    gender
                    origin{
                    name
                    dimension
                    }
                    image
                }
            }
    }
`

const Characters = () => {
    const { data, loading, error } = useQuery(GET_CHARACTERS);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;

    return (
        <div>
            <h1>Characters List</h1>
            <ul>
                {data.characters.results.map((character) => (
                    <li key={character.id}>{character.name}</li>
                ))}
            </ul>
        </div>
    )
}
export default Characters;