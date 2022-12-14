import React from 'react';
import contactbook from '../Images/contactbook.png';
const AddContact = () =>{
 
    return(
        <div className="m-20 bg-white drop-shadow-lg hover:drop-shadow-xl">
                <h2 className="text-center text-xl py-4 font-medium">Add Contact</h2>
                <div className="flex justify-between m-5 ">
                    <form 
                    className="text-justify px-4 py-3"
                    >
                        <div className="pt-1">
                            <label className="pr-9">Name</label>
                            <input 
                            className="border-2 rounded"  
                            type="text" 
                            placeholder="Name" 
                            />
                        </div>
                        <div className="py-4">
                            <label className="pr-10">Email</label>
                            <input 
                            className="border-2 rounded"
                            type="text" 
                            placeholder="Email" 
                            />
                        </div>
                        <button
                        className="bg-blue-700 my-5 py-1 px-4 rounded hover:bg-blue-500"
                        >
                        Add</button>
                    </form>
                    <div className=""><img src={contactbook} className="w-32 h-32" /></div>
                </div>
        </div>

    );
}

export default AddContact;