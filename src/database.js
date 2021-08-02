import monngoose from "mongoose";

export async function connect() {
    try {
        monngoose.connect('mongodb://localhost:27017/api-prueba', {
            useNewUrlParser: true
        })
        console.log('db is connected')
    }catch(e){
        console.log('Something went wrong');
        console.log(e);
    }

}