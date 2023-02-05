import { useAuth0 } from '@auth0/auth0-react';
import NavBar from '../components/NavBar.js';

const Account = () => {
    const { user } = useAuth0();

    return (
        <div class="bg-green-300 w-screen h-screen">
            <NavBar />
            <div class='shadow-md mt-5 bg-gray-100 rounded-md p-2 w-2/3 flex flex-col content-center m-auto'>
                <div class="text-lg flex-col p-3">
                    <h1 class='underline'>User Profile</h1>
                    <p>{user.name}</p>
                    <p>{user.email} </p>
                    <img src={user.picture} />
                </div>
            </div>
        </div>
    );
};

export default Account;
