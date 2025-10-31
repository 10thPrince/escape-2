import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../components/Spinner";
import { useLogoutMutation, useUpdateUserMutation } from "../slices/userApiSlice";
import { setCredentials, logout } from "../slices/authSlice";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  useDraggable,
} from "@heroui/react";

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

  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const targetRef = useRef(null);
  const { moveProps } = useDraggable({
    targetRef,
    canOverflow: true,
    isDisabled: !isOpen,
  });

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
      <Navbar />
      <ToastContainer />
      <div className="w-full text-center fugaz text-2xl mt-24">
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
      <div className="text-center mt-10">
        <h1 className="text-2xl mb-6">
          Want a way out? <span className="text-[#8B4513] font-bold">Logout</span>
        </h1>

        <Button
          onPress={onOpen}
          className="bg-red-700 text-white text-lg font-bold px-8 py-3 rounded-lg hover:bg-red-800"
        >
          Logout
        </Button>
      </div>

      {/* Logout Modal */}
      <Modal ref={targetRef} isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader {...moveProps}>Confirm Logout</ModalHeader>
              <ModalBody>
                <p>Are you sure you want to logout?</p>
              </ModalBody>
              <ModalFooter>
                <Button color="default" variant="light" onPress={onClose}>
                  Cancel
                </Button>
                <Button
                  color="danger"
                  onPress={() => {
                    handleLogout();
                    onClose();
                  }}
                >
                  Logout
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ProfilePage;
