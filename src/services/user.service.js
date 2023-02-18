import {
    getApiDao
} from "../model/index.js";
import {
    options
} from "../config/config.js";

const {
    UserDaoContainer,
    ProductDaoContainer
} = await getApiDao(options.server.dbType);

export const getUsers = async () => {
    return await UserDaoContainer.getAll();
};

export const saveUser = async (body) => {
    return await UserDaoContainer.save(body);
};