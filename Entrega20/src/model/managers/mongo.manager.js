import {
    convertToDto
} from "../dtos/user.dto.js";

class MongoContainer {
    constructor(model) {
        this.model = model;
    }

    async getById(id) {
        try {
            const response = await this.model.findById(id);
            const data = JSON.parse(JSON.stringify(response)); //convertir a formato json
            const responseDto = convertToDto(data);
            return responseDto;
        } catch (error) {
            throw new Error(`Hubo un error ${error}`);
        }
    }

    async getAll() {
        try {
            const response = await this.model.find();
            const data = JSON.parse(JSON.stringify(response));
            // const responseDto = convertToDto(data);
            return data;
        } catch (error) {
            throw new Error(`Hubo un error ${error}`);
        }
    }

    async save(body) {
        try {
            const response = await this.model.create(body);
            const data = JSON.parse(JSON.stringify(response));
            return data;
        } catch (error) {
            throw new Error(`Hubo un error ${error}`);
        }
    }

    async updateById(body, id) {
        try {
            await this.model.findByIdAndUpdate(id, body, {
                new: true
            });
            return "Update successfully";
        } catch (error) {
            throw new Error(`Hubo un error ${error}`);
        }
    }

    async deleteById(id) {
        try {
            await this.model.findByIdAndDelete(id);
            return "delete successfully";
        } catch (error) {
            throw new Error(`Hubo un error ${error}`);
        }
    }

    async delete() {
        try {
            await this.model.deleteMany({});
            return "delete all successfully";
        } catch (error) {
            throw new Error(`Hubo un error ${error}`);
        }
    }
}

export {
    MongoContainer
};