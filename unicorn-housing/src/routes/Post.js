import NavBar from "../components/NavBar";
import PostForum from "../components/PostForum";

const Post = () => {
    return (
        <div class='bg-gray-700 w-screen h-screen flex flex-col'>
            <NavBar />
            <PostForum />
        </div>
    );

}

export default Post