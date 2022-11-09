import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../../Context/AuthContext/AuthContext';

const Header = () => {
    const { user, logOutUser } = useContext(userContext);

    // menu navItems organize
    const navItems = <>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/blog'>Blog</Link></li>
        {
            user && user.uid ?
                <>
                    <li><Link to='/admin'>Admin</Link></li>
                    <li><Link to='/myreview'>My reviews</Link></li>
                    <li><Link to='/addservice'>Add service</Link></li>
                </>
                :
                <>
                    <li><Link to='/login'>Log In</Link></li>
                </>
        }
    </>

    // user logout of the website
    const handleLogOutUser = () => {
        logOutUser()
            .then(() => {
                console.log("user tata bye bye");
            })
            .catch((error) => {
                console.error(error);
            });
    }
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl">daisyUI</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {navItems}
                    </ul>
                </div>
                <div className="navbar-end bg-white">
                    {
                        user && user.uid && <div className='flex gap-3 items-center'>
                            <img src={user?.photoURL} alt="" className='w-[40px] h-[40px] object-contain rounded-full' />

                            <button onClick={handleLogOutUser} className="btn">Log Out</button>

                        </div>
                    }
                </div>
            </div>
        </div>

    );
};

export default Header;