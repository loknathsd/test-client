import axios from 'axios';
import React, { useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom';

const AddBook = () => {
    const { register, handleSubmit } = useForm();
    const checkRef = useRef();
    const {id} = useParams();
    const navigate = useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:5000/book/${id}`)
        .then(data=>console.log(data))
    },[id])

    const onSubmit = async(data) => {
         data.booktype = checkRef.current.value;

     if(id){
        const res = await axios.put(`http://localhost:5000/book/${id}`,data);
        console.log(res)
        res?.data && navigate('/booklist')
     }else{
       const res = await axios.post('http://localhost:5000/book/add',data)
       if(res.data){
        alert('book is added')
        navigate('/booklist')
       }
     }
    }
    return (
        <div className='w-[50%] mx-auto shadow-lg rounded mt-24 p-16'>
            <h1 className='text-4xl text-center mb-7'>{id? 'Update' :'Add'} Book</h1>
            <form onSubmit={handleSubmit(onSubmit)} >
                <div className='my-3'>
                    <label htmlFor="">Name : </label>
                    <input {...register("name")} type="text" className='border border-gray-500 px-10 py-1 rounded mx-5' />
                </div>
                <div className='my-3'>
                    <label htmlFor="">Publisher Name : </label>
                    <input {...register("pname")} className='border border-gray-500 px-10 py-1 rounded mx-5' type="text" />
                </div>
                <div className='my-3'>
                    <label htmlFor="">Age : </label>
                    <input {...register("age")} className='border border-gray-500 px-10 py-1 rounded mx-5' type="number" />
                </div>
                <div className='my-3'>
                    <label htmlFor="">Date : </label>
                    <input {...register("date")} className='border border-gray-500 px-10 py-1 rounded mx-5' type="date" />
                </div>
                <div className='my-3'>
                    <label htmlFor="">Page : </label>
                    <input {...register("page")} className='border border-gray-500 px-10 py-1 rounded mx-5' type="number" />
                </div>
                <div className='my-3'>
                    <label htmlFor="">Book Type : </label>
                    <input ref={checkRef} value="sci-fi"  className='ml-5' type="checkbox" />sci-fi
                    <input ref={checkRef} value="Drama" type="checkbox" />Drama
                    <input ref={checkRef} value="Novel"  className='ml-5' type="checkbox" />Novel
                </div>
                <input type="submit" className='cursor-pointer bg-blue-500 px-16 py-2 rounded text-white mt-5' />
            </form>
        </div>
    );
};

export default AddBook;