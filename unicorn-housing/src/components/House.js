import placeholder from '../images/placeholder.png'
import axios from 'axios'
import { useState, useEffect } from 'react'


const House = ({val}, index) => {
    const [imageUrl, setImageUrl] = useState(undefined)

    useEffect(() => {
        console.log(imageUrl)
        if (imageUrl === undefined){
            axios
                .get(`http://localhost:3001/postings/images/${val._id}-1.png`)
                .then((res) => {
                    if(res.data != ""){
                        setImageUrl(res.data)
                    } else {
                        setImageUrl(placeholder)
                    }
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    })

    return (
        <div key={index} class="bg-white shadow-md shadow-slate-400 rounded-lg">
            <div >
                <img className='w-full rounded-t-lg' src={imageUrl} alt='' />
            </div>
            <div class="p-2">
                <p class="font-bold">${(val.price).toLocaleString()}/month</p>
                <p>{val.author}</p>
                <div class="flex flex-row gap-3">
                    <p>{val.bed} Bed</p>
                    <p>|</p>
                    <p>{val.bath} Bath</p>
                </div>
                <p>{val.address} </p>
                <p class="text-xs font-thin">{val.author}</p>
            </div>
        </div>
    )
}

export default House