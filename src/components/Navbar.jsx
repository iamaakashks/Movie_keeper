import React from 'react';
import {Link} from 'react-router-dom';
export default function Navbar(){
    return (
        <div className='w-full p-3 flex gap-4'>
            <Link to='/home' className="bg-black text-white rounded-md px-4 py-2">Home</Link>
            <Link to='/favourite' className="bg-black text-white rounded-md px-4 py-2">Favourites</Link>
        </div>
    )
}