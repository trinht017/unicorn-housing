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
        const token = await getAccessTokenSilently();
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

  let list = [
    {
      id: 1,
      images: ['../images/p-1.png'],
      address: '210 Zirak Road, Canada',
      price: 3700,
      name: 'Clemson Edge',
      bedBath: '2 Bed 2 Bath',
      description: 'Located near the Clemson lake right on the beach etc',
      author: 'Lucas Boyer',
    },
    {
      id: 2,
      images: ['../images/p-1.png'],
      address: '210 Zirak Road, Canada',
      price: 3700,
      name: 'Clemson Edge',
      bedBath: '2 Bed 2 Bath',
      description: 'Located near the Clemson lake right on the beach etc',
      author: 'Lucas Boyer',
    },
    {
      id: 3,
      images: ['../images/p-1.png'],
      address: '210 Zirak Road, Canada',
      price: 3700,
      name: 'Clemson Edge',
      bedBath: '2 Bed 2 Bath',
      description: 'Located near the Clemson lake right on the beach etc',
      author: 'Lucas Boyer',
    },
    {
      id: 4,
      images: ['../images/p-1.png'],
      address: '210 Zirak Road, Canada',
      price: 3700,
      name: 'Clemson Edge',
      bedBath: '2 Bed 2 Bath',
      description: 'Located near the Clemson lake right on the beach etc',
      author: 'Lucas Boyer',
    },
    {
      id: 5,
      images: ['../images/p-1.png'],
      address: '210 Zirak Road, Canada',
      price: 3700,
      name: 'Clemson Edge',
      bedBath: '2 Bed 2 Bath',
      description: 'Located near the Clemson lake right on the beach etc',
      author: 'Lucas Boyer',
    },
    {
      id: 6,
      images: ['../images/p-1.png'],
      address: '210 Zirak Road, Canada',
      price: 3700,
      name: 'Clemson Edge',
      bedBath: '2 Bed 2 Bath',
      description: 'Located near the Clemson lake right on the beach etc',
      author: 'Lucas Boyer',
    },
    {
      id: 7,
      images: ['../images/p-1.png'],
      address: '210 Zirak Road, Canada',
      price: 3700,
      name: 'Clemson Edge',
      bedBath: '2 Bed 2 Bath',
      description: 'Located near the Clemson lake right on the beach etc',
      author: 'Lucas Boyer',
    },
  ];

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
