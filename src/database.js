import monngoose from "mongoose";
require('dotenv').config();

const { NOTES_APP_MONGODB_HOST, NOTES_APP_MONGODB_DATABASE } = process.env;
const MONGODB_URI = `mongodb://${NOTES_APP_MONGODB_HOST}/${NOTES_APP_MONGODB_DATABASE}`;

export async function connect() {
    try {
        monngoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log('db is connected')
    }catch(e){
        console.log('Something went wrong');
        console.log(e);
    }

}