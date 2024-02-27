import useRequest from "../hooks/useRequest";

function Pokemon(pokemon){
    const name = pokemon.pokemon.name; // get pokemon name from pokemon arg
    const { data, error } = useRequest('/pokemon', name); // request data and error 
    const { sprite, type } = useRequest(`/pokemon/${name}`); // request sprite and type

    const ErrorHandling = () => {
        if(!data){
            return <h1>Loading...</h1>
        }

        if(error){
            return <div>{error}: There was an error with getting data</div>
        }
    }

    return(
        <>
            {data ? 
                (
                    <div class="card">
                        <span class="card-id">#{data.id}</span>
                        <img
                            class="card-sprite"
                            src={data.sprites.front_default}
                            alt={name}
                        />
                        <h2 class="card-name">{name}</h2>
                        <span class="card-details">
                            <h3>
                                <i>Type</i>
                            </h3>
                            <ul class="type-list">
                                {data.types.map((poke) => (
                                    <li key={poke.type.name}>{poke.type.name.toUpperCase()}</li>
                                ))}
                            </ul>
                        </span>
                    </div>
                ) : <ErrorHandling />}
        </>
    );
}

export default Pokemon;