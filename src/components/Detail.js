import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';



function Detail() {
  const { character } = useParams();
  const [name, setName] = useState('');
  const [picture, setPicture] = useState('');
  const [gender, setGender] = useState('');
  const [origin, setOrigin] = useState('');
  const [species, setSpecies] = useState('');
  const [status, setStatus] = useState('');
  const [location, setLocation] = useState('');
 

  

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await axios.get(`https://rickandmortyapi.com/api/character/${character}`);
        console.log(data);
        setName(data.name);
        setPicture(data.image);
        setGender(data.gender);
        setOrigin(data.origin.name);
        setSpecies(data.species);
        setStatus(data.status);
        
        setLocation(data.location.name);
      } catch (error) {
        console.log(error);
      };
    };

    getData();
  }, []);




  return (
    <div className='center'>
      <p className='name'>{name}</p>
      
      <Helmet>
        <title>{`Detail/${name}`}</title>
      </Helmet>

      <div className='character-details'>
        <figure>
          <img src={picture} alt={name} />
        </figure>
        <div className='detail'>
          <p>Gender: {gender}</p>
          <p className='gray'>Origin: {origin}</p>
          <p>
            <span>{status}</span> - <span>{species}</span>
          </p>
          <p className='gray'>Last known location:</p><span>{location}</span>
          
        </div>
        
      </div>
      
    </div>

  )
}

export default Detail;