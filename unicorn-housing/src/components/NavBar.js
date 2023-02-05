import { Link, useNavigate } from 'react-router-dom';
import unicornLogo from '../images/light_logo.png';
import LoginButton from '../components/auth/LoginButton';
import LogoutButton from './auth/LogoutButton';
import { useAuth0 } from '@auth0/auth0-react';

const NavBar = () => {
    let navigate = useNavigate();
    const { isAuthenticated } = useAuth0();
    return (
        <div className='z-50 sticky top-0 w-full flex flex-row h-20 justify-between items-center align-middle text-black backdrop-filter backdrop-blur-xl bg-white bg-opacity-60'>
            <div className='flex flex-row items-center ml-16'>
                <ul class='flex gap-4 text-lg'>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/post'>Post</Link>
                    </li>
                    <li>
                        <Link to='/message'>Message</Link>
                    </li>
                </ul>
            </div>


            <div
                onClick={() => {
                    navigate('/');
                }}
                className='flex text-bold text-xl md:text-4xl align-middle cursor-pointer'
            >
                <h1>Unicorn</h1>
                <img class='h-12 w-12' src={unicornLogo} alt='' />
                <h1>Housing</h1>
            </div>

            <div className='flex flex-row items-center h-20 pr-3 md:pr-1 md:w-72 w-48'>
                <ul class='flex gap-4'>
                    {isAuthenticated && (
                        <li>
                            <Link to='/myAccount'>My Account</Link>
                        </li>
                    )}
                    {isAuthenticated && (
                        <li>
                            <Link to='/userlisting'>My Listings</Link>
                        </li>
                    )}
                    {!isAuthenticated && (
                        <li>
                            <LoginButton></LoginButton>
                        </li>
                    )}
                    {isAuthenticated && (
                        <li>
                            <LogoutButton></LogoutButton>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
