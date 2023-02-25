import {
    MySqlContainer
} from "../../managers/mysql.manager.js";

class UserMysqlDao extends MySqlContainer {
    constructor(options, tablename) {
        super(options, tablename)
    }
}
export {
    UserMysqlDao
}