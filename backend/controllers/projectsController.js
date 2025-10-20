import asyncHandler from 'express-async-handler'
import Projects from '../models/projectsModel.js';
import cloudinary from '../config/cloudinary.js';
import streamifier from 'streamifier'


const uploadBufferToCloudinary = (buffer, folder = 'escape_ltd_projects') => {
    return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
            { folder },
            (error, result) => {
                if (error) return reject(error);
                resolve(result);
            }
        );
        streamifier.createReadStream(buffer).pipe(uploadStream);
    });
};
//@Desc Creating A new Project
//@route POST /api/projects/
//@access PRIVATE
export const createProject = asyncHandler(async (req, res) => {
    const { title, description, } = req.body;

    if (!title || !description) {
        res.status(400).json({ Success: false, Message: "Please Fill In all required fields!" });
    }


    const files = req.files || []; // array of files
    const uploaded = [];

    for (const file of files) {
        const result = await uploadBufferToCloudinary(file.buffer, 'escape_ltd_projects');
        // result.secure_url (or result.url) and result.public_id
        uploaded.push({
            url: result.secure_url,
            public_id: result.public_id,
        });
    }


    const project = new Projects({
        title,
        description,
        images: uploaded.map(u => u.url),
        cloudinaryData: uploaded, // optional: save public_id if you want to delete later
    });

    const created = await project.save();
    res.status(201).json(created);
})