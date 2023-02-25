class MySqlContainer {
    constructor(options, tablename) {
        this.tablename = tablename
    }
    async getById(id) {}
    async getAll() {}
    async save(body) {}
    async updateById(body, id) {}
    async deleteById(id) {}
}

export {
    MySqlContainer
}