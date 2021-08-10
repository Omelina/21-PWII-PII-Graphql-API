import { Schema, model } from "mongoose";

const NewsSchema = new Schema({
    _id: Object,
    status: Boolean,
    title: String,
    description: String,
    category: String,
    permanlink: String,
    date: Date,
    resource_id: Object,
    user_id: Object,
    category_id: Object,

});

export default model('New', NewsSchema);