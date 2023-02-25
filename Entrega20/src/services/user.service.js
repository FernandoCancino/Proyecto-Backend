// import {UserManager} from "../model/index.js";
import {
    getApiDao
} from "../model/index.js";
import {
    options
} from "../config/config.js";
import {
    UserValidation
} from "../model/validations/user.validation.js";

const {
    UserDaoContainer,
    ProductDaoContainer
} = await getApiDao(options.server.dbType);

export const getUsers = async () => {
    return await UserDaoContainer.getAll();
};

export const saveUser = async (body) => {
    try {
        UserValidation.validateUser(body, true);
        return await UserDaoContainer.save(body);
    } catch (error) {
        throw new Error(error);
    }
};

export const deleteUser = async (userId) => {
    return await UserDaoContainer.deleteById(userId);
};

export const deleteUsers = async () => {
    return await UserDaoContainer.delete();
}