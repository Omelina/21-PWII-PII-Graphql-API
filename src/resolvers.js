import News from "./models/News"
import Categories from "./models/Categories";


export const resolvers = {
    Query: {
        hello: () => {
            return 'Hello World with Graphql'
        },
        async News(_, {cat}) {
            return await News.find({category_id: {cat}});

        },
        async Categories(){
            return await Categories.find();
        }
    }
}