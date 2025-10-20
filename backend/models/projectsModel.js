import mongoose from "mongoose";

const cloudDataSchema = new mongoose.Schema({
  url: { type: String, required: true },
  public_id: { type: String, required: true },
});

const projectsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    images: [{
        type: String
    }],
    cloudinaryData: [cloudDataSchema]
}, {
    timestamps: true
})

const Projects = mongoose.model('Projects', projectsSchema)

export default Projects