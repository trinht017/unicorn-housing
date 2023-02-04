import houseImg from '../images/p-1.png'

const House = ({val}, index) => {
    return (
        <div key={index}>
            <div >
                <img src={houseImg} alt='' />
            </div>
            <div class="text-red-100" key={index}>
                <p class="text-red-100">{val.price}</p>
                <p>{val.category}</p>
                <p>{val.name}</p>
                <p>{val.location} </p>
            </div>
        </div>
    )
}

export default House