import React from 'react';
import {Link} from 'react-router-dom';
export default function Navbar(){
    return (
        <div className='w-full p-3'>
            <Link to="/" className='font-bold text-2xl border-2 p-1.5 border-black rounded-md bg-black text-white mr-4'>Movie Keeper</Link>
            <Link to='/' className="hover:underline px-4 py-2 mr-4">Home</Link>
            <Link to='/favourite' className="hover:underline px-4 py-2">Favourites</Link>
        </div>
    )
}