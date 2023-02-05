import NavBar from "../components/NavBar";
import PostForum from "../components/PostForum";

const Post = () => {
    return (
        <div class='bg-gray-200 w-screen h-screen font-wendy flex flex-col'>
            <NavBar />
            <PostForum />
        </div>
    );

}

export default Post