import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../components/Spinner";
import { useLogoutMutation, useUpdateUserMutation } from "../slices/userApiSlice";
import { setCredentials, logout } from "../slices/authSlice";
import Modal  from "../components/Modal";
import Footer from "../components/Footer";

const ProfilePage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { userInfo } = useSelector((state) => state.auth);
  const [logoutApiCall] = useLogoutMutation();
  const [updateProfile, { isLoading }] = useUpdateUserMutation();

  const [isOpen, setIsOpen] = useState(false);
  const targetRef = useRef(null);
  // ✅ Fix: use correct dependency array
  useEffect(() => {
    if (userInfo) {
      setName(userInfo.name || "");
      setEmail(userInfo.email || "");
    } else {
      navigate("/login");
    }
  }, [userInfo, navigate]);

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match");
      return;
    }

    try {
      const res = await updateProfile({
        _id: userInfo._id,
        name,
        email,
        password,
      }).unwrap();

      dispatch(setCredentials({ ...res }));
      toast.success("Profile updated successfully");
    } catch (error) {
      toast.error(error?.data?.message || error.error);
    }
  };

  // ✅ Handle Logout
  const handleLogout = async () => {
    try {
      await logoutApiCall().unwrap();
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      dispatch(logout());
      localStorage.removeItem("userInfo");
      toast.info("You have been logged out");
      navigate("/login");
    }
  };

  return (
    <>
      
      <ToastContainer />

      <div className="w-full text-center fugaz text-2xl mt-30">
        <h1>Manage Your Profile</h1>
      </div>

      {/* Profile Update Form */}
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <form
          onSubmit={submitHandler}
          className="bg-white shadow-md rounded-2xl p-8 w-full max-w-md border-t-4 border-[#8B4513]"
        >
          <h2 className="text-2xl font-bold text-center mb-6 text-[#8B4513]">
            Update Profile
          </h2>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-[#8B4513]"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-[#8B4513]"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-[#8B4513]"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-700 mb-1">Confirm Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-[#8B4513]"
            />
          </div>

          {isLoading ? (
            <Spinner />
          ) : (
            <button
              type="submit"
              className="w-full bg-[#8B4513] text-white py-2 rounded-md hover:bg-[#6F3B10] transition"
            >
              Update
            </button>
          )}
        </form>
      </div>

      {/* Logout Section */}
      <div className="text-center my-15 gap-y-3">
        <h1 className="text-2xl mb-6">
          Want a way out? <span className="text-[#8B4513] font-bold">Logout</span>
        </h1>

        <button
          onClick={() => setIsOpen(true)}
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
        >
          Logout
        </button>
      </div>


      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Logout"
      >
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          Are you sure you want to Logout?
        </p>
        <div className="flex justify-end space-x-3">
          <button
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            Logout
          </button>
        </div>
      </Modal>

      

    </>
  );
};

export default ProfilePage;
