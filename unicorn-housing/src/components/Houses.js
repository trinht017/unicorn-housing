import House from './House.js'

const Houses = () => {
  let list = [
    {
      id: 1,
      cover: "../images/p-1.png",
      name: "Red Carpet Real Estate",
      location: "210 Zirak Road, Canada",
      category: "For Rent",
      price: "$3,700",
      type: "Apartment",
    },
    {
      id: 2,
      cover: "../images/p-2.png",
      name: "Fairmount Properties",
      location: "5698 Zirak Road, NewYork",
      category: "For Sale",
      price: "$9,750",
      type: "Condos",
    },
    {
      id: 3,
      cover: "../images/p-7.png",
      name: "The Real Estate Corner",
      location: "5624 Mooker Market, USA",
      category: "For Rent",
      price: "$5,860",
      type: "Offices",
    },
    {
      id: 4,
      cover: "../images/p-4.png",
      name: "Herringbone Realty",
      location: "5621 Liverpool, London",
      category: "For Sale",
      price: "$7,540",
      type: "Homes & Villas",
    },
    {
      id: 5,
      cover: "../images/p-5.png",
      name: "Brick Lane Realty",
      location: "210 Montreal Road, Canada",
      category: "For Rent",
      price: "$4,850",
      type: "Commercial",
    },
    {
      id: 6,
      cover: "../images/p-6.png",
      name: "Banyon Tree Realty",
      location: "210 Zirak Road, Canada",
      category: "For Sale",
      price: "$2,742",
      type: "Apartment",
    },
  ]


  return (
    <div>
      <div class='grid grid-cols-3 gap-4'>
        {list.map((val, index) => {
          return (
            <House val={val} index={index} />
          )
        })}
      </div>
    </div>
  )
}

export default Houses