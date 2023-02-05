import { useState } from "react"


const PostForum = () => {
    let [listing, setListing] = useState({
        author: "",
        address: "",
        price: 0.0,
        roomBath: "",
        description: "",
        images: []
    })

    const [uploadedFiles, setUploadedFiles] = useState([])

    const handleUploadFiles = (files) => {
        const uploaded = [...uploadedFiles];
        files.some((file) => {
            uploaded.push(file);
        })
        setUploadedFiles(uploaded);
    }

    const handleFileEvent = (e) => {
        const chosenFiles = Array.prototype.slice.call(e.target.files)
        console.log(chosenFiles)
        handleUploadFiles(chosenFiles);
    }

    const handleChange = (event) => {
        setListing({ ...listing, [event.target.name]: event.target.value });
    }

    const handleSubmit = (e) => {
        // prevents the submit button from refreshing the page
        e.preventDefault();
        setListing({ ...listing, ["images"]: uploadedFiles})
        console.log(listing);
    };

    return (
        <div class="bg-violet-500 w-2/3 flex flex-col content-center m-auto">
            <h1 class="text-7xl font-wendy">
                Create a housing posting
            </h1>
            <form onSubmit={handleSubmit} class='m-auto'>
                <div>
                    <label
                        className="block text-sm font-medium text-black"
                    >
                        Author
                    </label>
                    <div className="flex flex-col items-start">
                        <input
                            type="text"
                            name="author"
                            value={listing.author}
                            onChange={handleChange}
                            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>
                </div>
                <div>
                    <label
                        className="block text-sm font-medium text-black"
                    >
                        Address
                    </label>
                    <div className="flex flex-col items-start">
                        <input
                            type="text"
                            name="address"
                            value={listing.address}
                            onChange={handleChange}
                            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>
                </div>
                <div className="mt-4">
                    <label
                        className="block text-sm font-medium text-black undefined"
                    >
                        Price
                    </label>
                    <div className="flex flex-col items-start">
                        <input
                            type="number"
                            name="price"
                            value={listing.price}
                            onChange={handleChange}
                            className="block w-full mt-1 border-black rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>
                </div>
                <div className="mt-4">
                    <label
                        className="block text-sm font-medium text-black undefined"
                    >
                        Room and Bath
                    </label>
                    <div className="flex flex-col items-start">
                        <input
                            type="text"
                            name="roomBath"
                            value={listing.roomBath}
                            onChange={handleChange}
                            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>
                </div>
                <div className="mt-4">
                    <label
                        className="block text-sm font-medium text-black undefined"
                    >
                        Description
                    </label>
                    <div>
                        <textarea
                            name="description"
                            value={listing.description}
                            onChange={handleChange}
                            className="w-full content-left h-32 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>
                </div>
                <div className="mt-4">
                    <label
                        htmlFor="password_confirmation"
                        className="block text-sm font-medium text-black undefined"
                    >
                        Images
                    </label>
                    <div className="flex flex-col items-start">
                        <input
                            type="file"
                            multiple
                            name="images"
                            onChange={handleFileEvent}
                            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>
                </div>
                <div className="flex items-center justify-end mt-4">
                    <button
                        type="submit"
                        className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-gray-900 border border-transparent rounded-md active:bg-gray-900 false"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    )
}

export default PostForum