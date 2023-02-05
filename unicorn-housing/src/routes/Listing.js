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
        <div class="w-screen h-screen bg-blue-200">
            <NavBar/>
            <div class="flex mt-6">
                <div class="bg-white shadow-md content-center m-auto shadow-slate-400 rounded-lg flex flex-row max-h-screen">
                    <div class="w-2/3 overflow-auto scroll-smooth">
                        <img className='w-full rounded-t-lg' src={houseImg} alt='' />
                        <img className='w-full rounded-t-lg' src={houseImg} alt='' />
                        <img className='w-full rounded-t-lg' src={houseImg} alt='' />
                    </div>
                    <div class="p-2">
                        <p class="font-bold">${(val.price).toLocaleString()}/month</p>
                        <div class="flex flex-row gap-3">
                            <p>{val.name}</p>
                            <p>|</p>
                            <p>{val.bedBath}</p>
                        </div>
                        <p>{val.address} </p>
                        <p>{val.description} </p>
                        <p class="text-xs font-thin">{val.author}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Listing