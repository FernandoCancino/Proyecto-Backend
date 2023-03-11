import {
    buildSchema
} from "graphql";
import {
    graphqlHTTP
} from "express-graphql";
import {
    root
} from "../services/user.service.graphql.js";

//configuracion de graphql
const graphqlSchema = buildSchema(`
    type User{
        _id:String,
        nombre:String,
        apellido:String,
        dni:String
    }

    input UserInput{
        nombre:String,
        apellido:String,
        dni:String
    }

    type Query{
        getUsers: [User],
        getUserById(id:Int): User
    }

    type Mutation{
        addUser(user:UserInput): User,
        deleteUserById(_id:String): String
    }
`);

export const userGraphqlController = () => {
    return graphqlHTTP({
        schema: graphqlSchema,
        rootValue: root,
        graphiql: true
    })
};