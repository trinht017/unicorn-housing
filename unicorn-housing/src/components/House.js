import houseImg from '../images/p-1.png'

const House = ({val}, index) => {
   
    return (
        <div key={index} class="bg-white shadow-md shadow-slate-400 rounded-lg">
            <div >
                <img className='w-full rounded-t-lg' src={houseImg} alt='' />
            </div>
            <div class="p-2">
                <p class="font-bold">${(val.price).toLocaleString()}</p>
                <div class="flex flex-row gap-3">
                    <p>{val.name}</p>
                    <p>|</p>
                    <p>{val.bedBath}</p>
                </div>
                <p>{val.address} </p>
                <p class="text-xs font-thin">{val.author}</p>
            </div>
        </div>
    )
}

export default House