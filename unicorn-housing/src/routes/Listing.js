import NavBar from '../components/NavBar'
import placeholder from '../images/placeholder.png'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router'
import axios from 'axios'
import { useAuth0 } from '@auth0/auth0-react'

const Listing = () => {
    const [val, setVal] = useState({})
    const [imageUrls, setImageUrls] = useState([])
    let { id } = useParams();
    let navigate = useNavigate();
    const { getAccessTokenSilently, user, isLoading } = useAuth0();

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/postings/${id}`)
            .then((res) => {
                setVal(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
        axios
            .get(`${process.env.REACT_APP_API_URL}/postings/images/${id}`)
            .then((res) => {
                if(res.data != ""){
                    setImageUrls(res.data)
                } else {
                    setImageUrls([placeholder])
                }
            })
            .catch((error) => {
                console.log(error)
            })
    }, []);

    let deleteListing = async () => {
        try {
            const token = await getAccessTokenSilently({
                authorizationParams: {
                    audience: 'https://unicorn-api.com',
                },
            });
            const res = await axios
            .delete(`${process.env.REACT_APP_API_URL}/postings/${id}`, {
                headers: {
                    authorization: `Bearer ${token}`,
                }
            })

            console.log(res)
            navigate('/')
        } catch (error) {
            console.log(error);
        }
    }

    let renderDelete = () => {
        if(!isLoading){
            if (val.author === user.email) 
                return (
                    <button onClick={deleteListing} class='bg-red-500 m-3 p-3 rounded-md'>Delete Listing</button>
                )
        }
    }

    return (
        <div class="w-full h-full bg-blue-200">
            <NavBar />
            <div class="flex mt-6">
                <div class="bg-white shadow-md content-center m-auto shadow-slate-400 rounded-lg flex flex-row max-h-screen">
                    <div class="w-2/3 overflow-auto scroll-smooth rounded-l-lg">
                        {imageUrls.map(url => <img className='w-full' src={url} alt='' />)}
                    </div>
                    <div class="p-2 flex flex-col">
                        <div class="text-lg">
                            {val.price ? <p class="font-bold p-2">${(val.price).toLocaleString()}/month</p> : null}
                            <p class="underline">{val.title}</p>
                            <p>Listing made by: {val.author}</p>
                            <p>{val.address} </p>
                            <div class="flex flex-row gap-3">
                                <p>{val.bed} Bed</p>
                                <p>|</p>
                                <p>{val.bath} Bath</p>
                            </div>  
                            <p>{val.description} </p>
                        </div>

                        <div class="flex content-center mx-auto mt-6 gap-6">
                            <button class="bg-blue-500 p-3 rounded-md">
                                Message
                            </button>
                            <button class="bg-red-500 p-3 rounded-md">
                                Request
                            </button>
                        </div>

                        {renderDelete()}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Listing