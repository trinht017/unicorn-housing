import House from './House.js'

const Houses = () => {
  let list = [
    {
      id: 1,
      images: ["../images/p-1.png"],
      address: "210 Zirak Road, Canada",
      price: 3700,
      name: "Clemson Edge",
      bedBath: "2 Bed 2 Bath",
      description: "Located near the Clemson lake right on the beach etc",
      author: "Lucas Boyer"
    },
    {
      id: 2,
      images: ["../images/p-1.png"],
      address: "210 Zirak Road, Canada",
      price: 3700,
      name: "Clemson Edge",
      bedBath: "2 Bed 2 Bath",
      description: "Located near the Clemson lake right on the beach etc",
      author: "Lucas Boyer"
    },
    {
      id: 3,
      images: ["../images/p-1.png"],
      address: "210 Zirak Road, Canada",
      price: 3700,
      name: "Clemson Edge",
      bedBath: "2 Bed 2 Bath",
      description: "Located near the Clemson lake right on the beach etc",
      author: "Lucas Boyer"
    },
    {
      id: 4,
      images: ["../images/p-1.png"],
      address: "210 Zirak Road, Canada",
      price: 3700,
      name: "Clemson Edge",
      bedBath: "2 Bed 2 Bath",
      description: "Located near the Clemson lake right on the beach etc",
      author: "Lucas Boyer"
    },
    {
      id: 5,
      images: ["../images/p-1.png"],
      address: "210 Zirak Road, Canada",
      price: 3700,
      name: "Clemson Edge",
      bedBath: "2 Bed 2 Bath",
      description: "Located near the Clemson lake right on the beach etc",
      author: "Lucas Boyer"
    },
    {
      id: 6,
      images: ["../images/p-1.png"],
      address: "210 Zirak Road, Canada",
      price: 3700,
      name: "Clemson Edge",
      bedBath: "2 Bed 2 Bath",
      description: "Located near the Clemson lake right on the beach etc",
      author: "Lucas Boyer"
    },
    {
      id: 7,
      images: ["../images/p-1.png"],
      address: "210 Zirak Road, Canada",
      price: 3700,
      name: "Clemson Edge",
      bedBath: "2 Bed 2 Bath",
      description: "Located near the Clemson lake right on the beach etc",
      author: "Lucas Boyer"
    },
  ]

  return (
    <div>
      <div class='grid grid-cols-3 gap-8 m-4 p-3'>
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