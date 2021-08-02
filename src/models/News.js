import { Schema, model } from "mongoose";

const NewsSchema = new Schema({
    _id: Object,
    status: Boolean,
    title: String,
    description: String,
    permanlink: String,
    date: Date,
    resourceId: Schema.Types.ObjectId,
    userId: Schema.Types.ObjectId,
    categoryId: {
        type: Schema.Types.ObjectId, 
        require: true,
        ref: 'Categories'
    },

});

export default model('New', NewsSchema);