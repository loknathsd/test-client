import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const BookList = () => {
   const [books,setBooks] = useState([]);

   useEffect(()=>{
    fetch('http://localhost:5000/book/')
    .then(res=>res.json())
    .then(data=>{
        setBooks(data)
        console.log(data)
    })
   },[])

    const handleDelete=(id)=>{
        fetch(`http://localhost:5000/book/${id}`, {
            method: "DELETE"
        }).then(res => res.json())
        .then(data => {
            const filter = books.filter(pd=>pd._id !== id);
            setBooks(filter);
        }).catch(err=>{
            alert("Something went wrong");
        })
    }
    return (
        <div className='w-[70%] border border-gray-600 rounded mx-auto mt-24'>
            <div class="relative overflow-x-auto">
                <h1 className='text-4xl text-center mb-12'>Book list</h1>
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                               SL
                            </th>
                            <th scope="col" class="px-6 py-3">
                               Book Name
                            </th>
                            <th scope="col" class="px-6 py-3">
                               Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                               1
                            </th>
                            <td class="px-6 py-4">
                                Hero Javascript
                            </td>
                            <td class="px-6 py-4">
                               <div className='flex gap-3'>
                                <Link to={`/edit/${1}`}><button className='bg-gray-600 px-4 py-2 text-white rounded'>Edit</button></Link>
                                <button onClick={()=>handleDelete()} className='bg-red-500 px-4 py-2 text-white rounded'>Delete</button>
                               </div>
                            </td>  
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BookList;