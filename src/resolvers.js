import News from "./models/News"
import Categories from "./models/Categories";


export const resolvers = {
    Query: {
        hello: () => {
            return 'Hello World with Graphql'
        },
        async News(){
            return await News.find();
        },
        async Categories(){
            return await Categories.find();
        }
    }
}