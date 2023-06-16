import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet';

function Catalog() {

    const [characters, setCharacters] = useState([]);
    

    const navigate = useNavigate();
    const url = `https://rickandmortyapi.com/api/character`;
    
    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const characters = await axios.get(url);

                const characterArray = characters.data.results;
                setCharacters(characterArray);
                // console.log(characterArray);
            } catch (error) {
                console.log(error);
            }
        };
        fetchCharacters();

    }, []);

    const sortByName = () => {
        const sortCharacters = [...characters].sort((a, b) => {
            return a.name.localeCompare(b.name);
        });
        setCharacters(sortCharacters);
    };

    return (
        <>
            <div className='container'>
                <Helmet>
                    <title>Rick and Morty</title>
                </Helmet>
                <div className='sort-div'>
                    <input type="button" onClick={sortByName} className='sorting' value='Sort Characters' />

                </div>

                <section className='catalog  result-container'>
                    {characters.map(character => (
                        <div key={character.id} onClick={() => navigate(`character/${character.id}`)} className='character-item'>
                            <figure>
                                <img src={character.image} alt={character.name} className='character-image' />
                            </figure>
                            <div className='character-name'>
                                <p className='elipse'>{character.name}</p>
                                <p className='gender'>{character.gender}</p>
                            </div>
                        </div>
                    ))}
                </section>
            </div>
        </>
    )
}

export default Catalog