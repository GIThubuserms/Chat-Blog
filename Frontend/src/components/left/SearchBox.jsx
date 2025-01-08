import React, { useEffect, useState } from 'react';
import { CiSearch } from "react-icons/ci";
import { getallusers } from '../../context/GetAllusers';
import { Useconversation } from '../../hooks/Useconversation';
import { toast } from 'react-toastify';


function SearchBox() {
    const [allusers] = getallusers()
    const [search, setsearch] = useState("")
    const { selectedconversation, setselectedconversation } = Useconversation()

    const gosearch = () => {
        let userFound = false;
    
        allusers.map((user) => {
            if (user.email === search) {
                setselectedconversation(user);
                setsearch("");
                userFound = true;
                return; // exit the map once the user is found
            }
        });
    
        if (!userFound) {
            toast.error("User Not found");
        }
    };
    
    

    return (
        <div className='h-[10vh]'>
            <div className='w-full flex justify-center items-center mt-3 mb-3 space-x-2'>
                <input value={search} onChange={(e) => setsearch(e.target.value)} className='bg-slate-800 font-sans h-12 w-[70%] rounded-md outline-none px-6' type="text" placeholder="Search">
                </input>
                <CiSearch onClick={gosearch} className='text-3xl text-white hover:text-gray-600 font-semibold hover:bg-gray-300 rounded-3xl ' />
            </div>

        </div>
    );
}

export default SearchBox;