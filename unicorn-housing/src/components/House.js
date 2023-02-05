import houseImg from '../images/p-1.png'

const House = ({val}, index) => {
   
    return (
        <div key={index} class=" shadow-md shadow-slate-400 rounded-lg">
            <div >
                <img className='w-full rounded-t-lg' src={houseImg} alt='' />
            </div>
            <div class="p-2">
                <p class="font-bold">{val.price}</p>
                <div class="flex flex-row gap-10">
                    <p>{val.category}</p>
                    <p>{val.name}</p>
                </div>
                <p>{val.location} </p>
            </div>
        </div>
    )
}

export default House