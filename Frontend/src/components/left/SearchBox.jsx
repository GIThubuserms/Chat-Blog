import React from 'react';
import { CiSearch } from "react-icons/ci";

function SearchBox() {
    return (
        <div className='h-[10vh]'>
            <div className='w-full flex justify-center items-center mt-3 mb-3 space-x-2'>
                <input className='bg-slate-800 font-sans h-12 w-[70%] rounded-md outline-none px-6' type="text" placeholder="Search">
                </input>
                <CiSearch className='text-3xl text-white hover:text-gray-600 font-semibold hover:bg-gray-300 rounded-3xl ' />
            </div>

        </div>
    );
}

export default SearchBox;