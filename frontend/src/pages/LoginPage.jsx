import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { useLoginMutation } from '../slices/userApiSlice';
import { setCredentials } from '../slices/authSlice';
import Navbar from '../components/Navbar';
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import {toast} from 'react-toastify'
import Spinner from '../components/Spinner';


const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [login, {isLoading}] = useLoginMutation()

    const { userInfo } = useSelector((state) => state.auth);


    useEffect(() => {
        if(userInfo){
            navigate('/');
        }
    }, [navigate, userInfo]);

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
            const res = await login({email, password}).unwrap();
            dispatch(setCredentials({...res}));
            toast.success('Welcome U have Logged Successfully!')
            navigate('/')
        } catch (error) {
            toast.error(error?.data?.message || error.error)
        }
    }
    return (
        <>
        <Navbar />
        <ToastContainer />
        <div className="flex justify-center items-center min-h-screen py-30 bg-gray-50">
            

            <form
                onSubmit={submitHandler}
                className="bg-white shadow-md rounded-2xl p-8 w-full max-w-md border-t-4 border-[#8B4513]"
            >
                <h2 className="text-2xl font-bold text-center mb-6 text-[#8B4513]">
                    Welcome Back
                </h2>

                <div className="mb-4">
                    <label className="block text-gray-700 mb-1">Email</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => { setEmail(e.target.value) }}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-[#8B4513]"
                        required
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-gray-700 mb-1">Password</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => { setPassword(e.target.value) }}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-[#8B4513]"
                        required
                    />
                </div>
                {isLoading ? <Spinner /> : <button
                    type="submit"
                    className="w-full bg-[#8B4513] text-white py-2 rounded-md hover:bg-[#6F3B10] transition"
                >
                    Log In
                </button>}
                

                <p className="text-sm text-center mt-4 text-gray-600">
                    Don’t have an account?{" "}
                    <Link to='/register'>
                        <span className="text-[#8B4513] font-semibold hover:underline">
                            Register
                        </span>
                    </Link>

                </p>
            </form>
        </div>
        </>
        
    )
}

export default LoginPage