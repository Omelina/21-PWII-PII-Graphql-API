import { Schema, model } from "mongoose";

const CategoriesSchema = new Schema({
    _id: Object,
    status: Boolean,
    name: String,
});

export default model('Categories', CategoriesSchema);