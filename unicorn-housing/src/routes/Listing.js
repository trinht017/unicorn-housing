import NavBar from '../components/NavBar'
import houseImg from '../images/p-1.png'

const Listing = () => {

    let val = {
        id: 1,
        images: ["../images/p-1.png"],
        address: "210 Zirak Road, Canada",
        price: 3700,
        name: "Clemson Edge",
        bedBath: "2 Bed 2 Bath",
        description: "Located near the Clemson lake right on the beach etc",
        author: "Lucas Boyer"
    }

    return (
        <div class="w-full h-full bg-blue-200">
            <NavBar />
            <div class="flex mt-6">
                <div class="bg-white shadow-md content-center m-auto shadow-slate-400 rounded-lg flex flex-row max-h-screen">
                    <div class="w-2/3 overflow-auto scroll-smooth">
                        <img className='w-full rounded-t-lg' src={houseImg} alt='' />
                        <img className='w-full rounded-t-lg' src={houseImg} alt='' />
                        <img className='w-full rounded-t-lg' src={houseImg} alt='' />
                    </div>
                    <div class="p-2 flex flex-col">
                        <div class="text-lg">
                            <p class="font-bold p-2">${(val.price).toLocaleString()}/month</p>
                            <p>Listing made by: {val.author}</p>
                            <div class="flex flex-row gap-3">
                                <p>{val.name}</p>
                                <p>|</p>
                                <p>{val.bedBath}</p>
                            </div>
                            <p>{val.address} </p>
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Listing