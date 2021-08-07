import News from "./models/News"
import Categories from "./models/Categories";


export const resolvers = {
    Query: {
        async byCategory(_, data) {
            const news = await News.find();
            let a = [];
            for (let i = 0; i < news.length; i++) {
                if (news[i].category_id == data.cat && news[i].user_id == data.user) {
                    a.push(news[i]);
                }
            }
            return a;

        },
        async Categories() {
            return await Categories.find();
        },
        async byUser(_, data) {
            const news = await News.find();
            let a = [];
            for (let i = 0; i < news.length; i++) {
                if (news[i].user_id == data.user) {
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
                if (news[i].user_id == data.user) {
                    let t = news[i].title.toLowerCase().indexOf(message.toLowerCase());
                    let d = news[i].description.toLowerCase().indexOf(message.toLowerCase());
                    if (t !== -1 || d !== -1) {
                        a.push(news[i]);
                    }
                }
            }
            return a;
        }
    }
}