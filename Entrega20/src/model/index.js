// import {MongoContainer} from "./managers/mongo.manager.js";
// import {UserModel} from "./dbModels/user.model.js";

// export const UserManager = new MongoContainer(UserModel);


//Aqui creamos la fabrica.
import {
    UserModel
} from "./dbModels/user.model.js";
import {
    ProductModel
} from "./dbModels/product.model.js";
import {
    options
} from "../config/config.js";
import {
    MyMongoClient
} from "./clients/dbClientMongo.js";

export async function getApiDao(dbType) {
    let UserDaoContainer;
    let ProductDaoContainer;
    switch (dbType) {
        case 'MYSQL':
            const {
                UserMysqlDao
            } = await import("./daos/users/userMysqlDao.js");
            const {
                ProductMysqlDao
            } = await import("./daos/products/productMysqlDao.js");
            //conectarnos a la base de datos de mysql
            UserDaoContainer = new UserMysqlDao(options.sqlite, "users");
            ProductDaoContainer = new ProductMysqlDao(options.sqlite, "products");
            break;
        case 'MONGO':
            const {
                UserMongoDao
            } = await import("./daos/users/userMongoDao.js");
            const {
                ProductMongoDao
            } = await import("./daos/products/productMongoDao.js");
            //conectarnos a la base de datos mongoDB
            const client = new MyMongoClient();
            await client.connect();
            UserDaoContainer = new UserMongoDao(UserModel);
            ProductDaoContainer = new ProductMongoDao(ProductModel);
            break;
        default:
            break;
    }
    return {
        UserDaoContainer,
        ProductDaoContainer
    }
}