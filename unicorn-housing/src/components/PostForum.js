import { useState } from "react"
import { useAuth0 } from "@auth0/auth0-react"
import axios from 'axios';

const PostForum = () => {

    let [listing, setListing] = useState({
        author: "",
        address: "",
        price: 0.0,
        bed: 0,
        bath: 0,
        description: "",
        title: ""
    })

    let { user } = useAuth0()

    const [uploadedFiles, setUploadedFiles] = useState([])

    const handleUploadFiles = async (files) => {
        var uploaded = [];
        await files.forEach(async (file) => {
            uploaded.push(file);
        })
        setUploadedFiles(uploaded);
    }

    const handleFileEvent = (e) => {
        const chosenFiles = Array.prototype.slice.call(e.target.files)
        handleUploadFiles(chosenFiles);
    }

    const handleChange = (event) => {
        setListing({ ...listing, [event.target.name]: event.target.value, "author": user.name });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await axios.post('http://localhost:3001/postings', listing);
        const postingID = res.data._id
        const res2 = await axios.post('http://localhost:3001/postings/images', {"numImages":uploadedFiles.length, "postingID": postingID});
        const s3SignedUploadUrls = res2.data;

        for(var i = 0; i < uploadedFiles.length; i++){
            var options = {
                params: { Key: `${postingID}-${i+1}.png`, ContentType: uploadedFiles[i].type },
                headers: { 'Content-Type': uploadedFiles[i].type }
              };
            try {
                await axios.put(s3SignedUploadUrls[i], uploadedFiles[i], options)
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
        <div class="shadow-md bg-gray-100 rounded-md p-2 w-2/3 flex flex-col content-center m-auto">
            <h1 class="text-5xl text-center m-3">
                Create a housing posting
            </h1>
            <form class='m-auto'>
                <div>
                    <label
                        className="block text-sm font-medium text-black"
                    >
                        Title
                    </label>
                    <div className="flex flex-col items-start">
                        <input
                            type="text"
                            name="title"
                            value={listing.title}
                            onChange={handleChange}
                            className="block w-full px-2 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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
                            className="block w-full px-2 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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
                            className="block w-full px-2 mt-1 border-black rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>
                </div>
                <div class="flex flex-row gap-10">
                    <div className="mt-4">
                        <label
                            className="block text-sm font-medium text-black undefined"
                        >
                            Bed
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                                type="number"
                                name="bed"
                                value={listing.bed}
                                onChange={handleChange}
                                className="block w-full px-2 mt-1 border-black rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label
                            className="block text-sm font-medium text-black undefined"
                        >
                            Bath
                        </label>
                        <div className="flex flex-col items-start">
                            <input
                                type="number"
                                name="bath"
                                value={listing.bath}
                                onChange={handleChange}
                                className="block w-full px-2 mt-1 border-black rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                        </div>
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
                            className="w-full px-2 content-left h-32 mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
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
                            className="block px-2 w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                        />
                    </div>
                </div>
                <div className="flex items-center justify-center mt-4">
                    <button
                        type="submit"
                        onClick={handleSubmit}
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