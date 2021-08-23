import News from "./models/News"
import Categories from "./models/Categories";
// import mongoose from 'mongoose'


export const resolvers = {
    Query: {
        async byCategory(_, data) {
            const news = await News.find();
            let a = [];
            for (let i = 0; i < news.length; i++) {
                if (news[i].category_id == data.cat && news[i].user_id == data.user && news[i].status == true) {
                    a.push(news[i]);
                }
            }
            return a;

        },
        async Categories() {
            return await Categories.find();
        },
        async catByName(_, data) {
            const cats = await Categories.find();
            let a = [];
            const message = data.data
            for (let i = 0; i < cats.length; i++) {
                if (cats[i].status == true ) {
                    let n = cats[i].name.toLowerCase().indexOf(message.toLowerCase());
                    if (n !== -1 ) {
                        a.push(cats[i]);
                    }
                }
            }
            return a;
        },
        async byUser(_, data) {
            const news = await News.find();
            let a = [];
            for (let i = 0; i < news.length; i++) {
                if (news[i].user_id == data.user && news[i].status == true) {
                    a.push(news[i]);
                }
            }
            return a;
        },
        async byInput(_, data) {
            const news = await News.find();
            let a = [];
            const message = data.data
            for (let i = 0; i < news.length; i++) {
                if (news[i].user_id == data.user && news[i].status == true) {
                    let t = news[i].title.toLowerCase().indexOf(message.toLowerCase());
                    let d = news[i].description.toLowerCase().indexOf(message.toLowerCase());
                    if (t !== -1 || d !== -1) {
                        a.push(news[i]);
                    }
                }
            }
            return a;
        },
        async byTag(_, data) {
            const news = await News.find();
            let a = [];
            for (let i = 0; i < news.length; i++) {
                if (news[i].category == data.tag && news[i].user_id == data.user && news[i].status == true) {
                    
                    a.push(news[i]);
                }
            }
            return a;
        }
    }
}