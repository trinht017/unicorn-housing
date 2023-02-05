import { Link } from 'react-router-dom';
import House from './House.js';
import { useAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Listing from '../routes/Listing.js';

const Houses = () => {
  const { getAccessTokenSilently } = useAuth0();

  const [postings, setPostings] = useState([]);

  useEffect(() => {
    const getHouses = async () => {
      try {
        const token = await getAccessTokenSilently({
          authorizationParams: {
            audience: 'https://unicorn-api.com',
          },
        });
        await console.log(token);
        const response = await axios.get('http://localhost:3001/postings', {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });
        setPostings(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getHouses();
  }, [getAccessTokenSilently]);

  return (
    <div>
      <div class='grid grid-cols-3 gap-8 m-4 p-3'>
        {postings.map((posting) => {
          return (
            <Link to={`/listing/${posting._id}`} element={<Listing />} key={posting._id}>
              <House val={posting} index={posting._id} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Houses;
