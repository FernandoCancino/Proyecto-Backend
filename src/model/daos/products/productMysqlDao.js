import {
    MySqlContainer
} from "../../managers/mysql.manager.js";

class ProductMysqlDao extends MySqlContainer {
    constructor(options, tablename) {
        super(options, tablename)
    }
}
export {
    ProductMysqlDao
}