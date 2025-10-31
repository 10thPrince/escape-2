import mongoose from "mongoose";

const cloudDataSchema = new mongoose.Schema({
  url: { type: String, required: true },
  public_id: { type: String, required: true },
});

const servicesSchema = new mongoose.Schema({
    
})