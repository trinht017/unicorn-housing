import { Link, useNavigate } from "react-router-dom"
import unicornLogo from '../images/light_logo.png'
import { useAuth0 } from "@auth0/auth0-react";


const NavBar = () => {
    let navigate = useNavigate();

    const { logout } = useAuth0();

    return (
        <div className="z-50 sticky top-0 w-full flex flex-row h-20 justify-between items-center align-middle text-black shadow-lg bg-rainbow bg-cover bg-no-repeat">
            <div className="flex flex-row items-center h-20 ml-6 pl-6 md:pl-1 md:w-72 w-48">
                <ul class='flex gap-4'>
                    <li>
                        <Link to='/home'>Home</Link>
                    </li>
                    <li>
                        <Link to='/post'>Post</Link>
                    </li>
                    <li>
                        <Link to='/message'>Message</Link>
                    </li>
                    <li>
                        <Link to='/account'>My Account</Link>
                    </li>
                </ul>
            </div>

            <div onClick={() => {
                navigate("/home");
            }} className="flex text-bold text-xl md:text-4xl align-middle cursor-pointer">

                <h1>Unicorn</h1>
                <img class="h-12 w-12" src={unicornLogo} alt="" />
                <h1>Housing</h1>
            </div>

            <div className="flex flex-row items-center h-20 pr-3 md:pr-1 md:w-72 w-48">
                <ul class='flex gap-4'>
                    <li>
                        <Link to='/userlisting'>My Listings</Link>
                    </li>
                    <li>
                        <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                            Log Out
                        </button>
                    </li>
                </ul>
            </div>


        </div>
    )
}

export default NavBar