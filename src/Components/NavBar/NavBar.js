import React, { useState } from 'react';
import Link from '../Link/Link';
import { RiMenu2Line } from "react-icons/ri";
import { RxCross2 } from "react-icons/rx";

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, name: 'Home', path: '/home' },
        { id: 2, name: 'Service', path: '/service' },
        { id: 3, name: 'Orders', path: '/order' },
        { id: 4, name: 'Contact', path: '/contact' },
        { id: 5, name: 'About', path: '/about' }
    ];

    return (
        <nav className='bg-red-400 w-full lg:py-5'>
            {/* 1st system for dynamic menu */}
            
            {/* <div>
                {
                    open ?
                        <RxCross2 onClick={() => setOpen(!open)}></RxCross2>
                        :
                        <RiMenu2Line onClick={() => setOpen(!open)}></RiMenu2Line>
                }
            </div> */}

            {/* 2nd system for dynamic menu */}

            <div onClick={() => setOpen(!open)} className='text-3xl lg:hidden'>
                {
                    open ?
                        <RxCross2 ></RxCross2> : <RiMenu2Line></RiMenu2Line>
                }
            </div>
            <ul className={`bg-red-400 w-full text-white lg:flex justify-center absolute lg:static duration-500 ease-in ${open ? 'top-7' : 'top-[-120px]'}`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;