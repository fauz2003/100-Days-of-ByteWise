import React, { useState } from 'react'
import { UserData } from '../context/useContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState('');
    const {loginUser, btn} = UserData();

    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        const password = e.target.password.value;
        loginUser({email, password}, navigate);
    }

  return (
    <div className='flex justify-center items-center h-screen'>
        <form className='bg-white p-6 rounded shadow-md' onSubmit={submitHandler}>
            <h2 className='text-2xl mb-4'>Login</h2>
            <div className='mb-4 flex flex-col gap-4 justify-center '>
                <div className='flex flex-row gap-2'>
                    <label className='block text-gray-700 mb-2' htmlFor='email'>
                        Email:
                    </label>
                    <input type="email" placeholder='email' id='email' value={email} className='border p-2 w-full rounded outline-none focus:ring-2 focus:ring-blue-500' required onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div className='flex flex-row gap-2'>
                    <label className='block text-gray-700 mb-2' htmlFor='password'>
                        Password:
                    </label>
                    <input type="password" placeholder='password' id='password'  className='border p-2 w-full rounded outline-none focus:ring-2 focus:ring-blue-500' required/>
                </div>
            </div>
            <button className='bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700' disabled={btn}>{btn?"Please wait...":"Submit"}</button>
        </form>
    </div>
  )
}

export default Login