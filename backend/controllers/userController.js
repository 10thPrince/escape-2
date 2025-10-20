import User from "../models/userModel.js";
import asyncHandler from 'express-async-handler';
import bcrypt, {hash} from 'bcryptjs';
import generateToken from "../utils/generateToken.js";


// @desc register a new user
// route POST /user/
// @access Public
export const register = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        res.status(400).json({success: false, message: 'Please Fill in all the required Fields!'})

    }
    //check if user Exist

    const userExist = await User.findOne({ email });

    if (userExist) {
        res.status(400).json({success: false, message: 'User already Exist'})
        
    }

    // Hash password

    const hashedPassword = await hash(password, 10);

    // Create new user

    const newUser = {
        name,
        email,
        password: hashedPassword
    }

    const user = await User.create(newUser)

    if (user) {
        const token = generateToken(user._id)
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            token
        })
    } else {
        res.status(400).json({success: false, message: 'INVALID USER DATA'})
    }
})

// @desc Login a new user
// route POST /user/login
// @access Public
export const login = asyncHandler(async (req, res) => {
    const {email, password} = req.body;

    if (!email || !password) {
        res.status(400).json({success: false, message: 'Please add all fields!'})

    }

    const user = await User.findOne({ email });

    if (!user) {
        res.status(400).json({success: false, message: 'User Do not Exist'})
    }


    if(user && (await bcrypt.compare(password, user.password))) {
        const token = generateToken(user._id);

        res.status(200).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token,
        })
    }else{
        res.status(400).json({success: false, message: 'Invalid credentials'})
    }
})

// @desc Logout a new user
// route POST /user/logout
// @access Public
export const logout = asyncHandler(async (req, res) => {
    res.cookie('jwt', '', {
        httpOnly: true,
        expires: new Date(0)
    })

    res.status(200).json({message: 'User Logged Out'})
})

// @desc Get user profile
// route GET /user/profile
// @access Private
export const getUserProfile = asyncHandler(async (req, res) => {
    const user = {
        _id: req.user._id,
        name: req.user.name,
        email: req.user.email,
    }

    res.status(200).json({ user })
})

// @desc Update user profile
// route PUT /user/profile
// @access Private
export const updateUserProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id);

    if(user){
        user.name = req.body.name || user.name;
        user.email = req.body.email || user.email;

        if(req.body.password){
            user.password = await hash(req.body.password, 10)
        }

        const updatedUser = await user.save();

        res.status(200).json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
        });
    }else{
        res.status(404).json({Message: 'User not Found'})
    }
})