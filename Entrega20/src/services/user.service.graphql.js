import {
    getApiDao
} from "../model/index.js";
import {
    options
} from "../config/config.js";

const {
    UserDaoContainer
} = await getApiDao(options.server.dbType);

export const root = {
    getUsers: async () => {
        return await UserDaoContainer.getAll();
    }
}