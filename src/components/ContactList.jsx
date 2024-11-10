import React, { useContext } from 'react'
import { listContext } from '../App'
import { useNavigate } from 'react-router-dom'
const ContactList = () => {
  const {employeeList,setEmployeeList} = useContext(listContext)
  const navigate = useNavigate();
  const handleDelete = (ind) => {
    const afterDelete = employeeList?.filter((_, index) => index !== ind);
    setEmployeeList(afterDelete);
  };

  const handleUpdate = (emp, index) => {
    navigate("/", { state: { data: emp, ind: index } });
  };
  return (
    <>
      <div className='w-full mt-10 px-2 md:px-7'>
        <div className='flex items-center bg-[#dad7cd] border border-gray-400 px-3 rounded py-2  justify-between'>
          <h2 className='font-semibold text-2xl'>Employee List</h2>
          <button onClick={() => (navigate("/"))} className='bg-[#0077b6] opacity-90 hover:opacity-100 px-5 font-medium py-2 rounded text-white'>Create</button>
        </div>
        <div>
          <table className='w-full  table-auto'>
              <thead>
                <tr className=' bg-gray-200 h-[60px] border-b border-b-gray-400'>
                  <th  className=''>SR. No</th>
                  <th  className=''>Name</th>
                  <th  className=''>Contact</th>
                  <th  className=' '>Email</th>
                  <th  className=''>Action</th>
                </tr>
              </thead>
              <tbody className=' w-full'>
                {employeeList?.map((employee,index) => {
                  return(
                    <tr className='bg-gray-100 text-center w-full  h-[50px]  border-b border-b-gray-400' key={index + 1}>
                      <td className='font-normal md:font-medium text-center '>{index + 1}</td>
                      <td className='font-normal md:font-medium text-center '>{employee.name}</td>
                      <td className='font-normal md:font-medium text-center'>{employee.number}</td>
                      <td className='font-normal md:font-medium text-center'>{employee.email}</td>
                      <td className=''>
                        <i onClick={() => handleUpdate(employee, index)} className="fa-solid pr-3 text-green-600 text-center md:text-[20px] text-[18px] fa-pen-to-square"></i>
                        <i onClick={() => handleDelete(index)} className="fa-solid text-red-600 text-center md:text-[20px] text-[18px] fa-trash"></i>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default ContactList