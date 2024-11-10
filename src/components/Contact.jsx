import React, { useContext, useState } from 'react'
import { listContext } from '../App'
import { useNavigate } from 'react-router-dom'

const Contact = () => {
    const {employeeList,setEmployeeList} = useContext(listContext)
    const [formValue,setFormValue] = useState({
        name:"",
        number:"",
        email:"",
    })
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormValue({...formValue, [name]:value})
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setEmployeeList([...employeeList, formValue])
        setFormValue({
            name:"",
            number:"",
            email:"",
        })
    }
    console.log(formValue)
    const navigate = useNavigate();
  return (
   <div className='flex justify-center '>
    <div className='bg-gray-200 md:mx-0 md:mt-14 mt-10 h-fit mx-3 md:w-[430px] w-full rounded-sm'>
        <div className='flex items-center mx-3 justify-between my-3'>
            <h1 className=' text-2xl font-semibold'>Employee Info</h1>
            <button onClick={() => (navigate("/create"))} className='bg-[#0077b6] opacity-90 hover:opacity-100 px-5 font-medium py-2 rounded text-white'>Employee List</button>

        </div>
        <form onSubmit={handleSubmit} className='mx-3'>
            <div className='flex flex-col mb-2 gap-1'>
                <label >Name:</label>
                <input type="text" value={formValue?.name} onChange={handleChange} name='name' className='w-full outline-none p-1' placeholder='Enter your name' />
            </div>

            <div className='flex flex-col gap-1 mb-2'>
                <label >Contact:</label>
                <input type="number" value={formValue?.number} onChange={handleChange} name='number'  className='w-full outline-none p-1' placeholder='Enter your number' />
            </div>

            <div className='flex flex-col gap-1 mb-2'>
                <label >E-mail:</label>
                <input type="text" value={formValue?.email} onChange={handleChange} name='email' className='w-full outline-none p-1' placeholder='Enter your email' />
            </div>
           
            <button type='submit' className='w-full text-center bg-blue-500 font-bold p-1 mb-4 mt-2 text-white hover:bg-blue-600'>Add Contact</button>
        </form>
    </div>
   </div>
  )
}

export default Contact