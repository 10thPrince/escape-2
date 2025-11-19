import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { toast } from 'react-toastify';
import Spinner from '../components/Spinner';
import { useRegisterMutation } from '../slices/userApiSlice';
import { setCredentials } from '../slices/authSlice';


const RegisterPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { userInfo } = useSelector((state) => state.auth);

    const [register, { isLoading }] = useRegisterMutation()

    useEffect(() => {
        if (userInfo) {
            navigate('/');
        }
    }, [navigate, userInfo]);

    const submitHandler = async (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error('Passwords Do not match');
        } else {
            try {
                const res = await register({name, email, password }).unwrap();
                dispatch(setCredentials({ ...res }));
                toast.success('Profile Created Successful! ')
                navigate('/')
            } catch (error) {
                toast.error(error?.data?.message || error.error);
            }
        }
    }
    return (
        <>
            <Navbar />
            <ToastContainer />
            <div className="flex justify-center items-center min-h-screen bg-gray-50">

                <form
                    onSubmit={submitHandler}
                    className="bg-white shadow-md rounded-2xl p-8 w-full max-w-md border-t-4 border-[#8B4513]"
                >
                    <h2 className="text-2xl font-bold text-center mb-6 text-[#8B4513]">
                        Welcome Back
                    </h2>

                    <div className="mb-4">
                        <label className="block text-gray-700 mb-1">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Enter your Name"
                            value={name}
                            onChange={(e) => { setName(e.target.value) }}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-[#8B4513]"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-gray-700 mb-1">Email</label>
                        <input
                            type="email"
                            name="email"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-primary"
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
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-primary"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 mb-1">Confirm Password</label>
                        <input
                            type="password"
                            name="password"
                            placeholder="••••••••"
                            value={confirmPassword}
                            onChange={(e) => { setConfirmPassword(e.target.value) }}
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-primary"
                            required
                        />
                    </div>
                    {isLoading ? <Spinner /> : <button
                        type="submit"
                        className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary transition"
                    >
                        Register
                    </button>}
                    

                    <p className="text-sm text-center mt-4 text-gray-600">
                        Already have an ACoount?{" "}
                        <Link to='/login'>
                            <span className="text-primary font-semibold hover:underline">
                                LogIn
                            </span>
                        </Link>

                    </p>
                </form>
            </div>
        </>

    )
}

export default RegisterPage