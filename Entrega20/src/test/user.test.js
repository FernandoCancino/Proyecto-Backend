import supertest from "supertest";
import {
    expect
} from "chai";
import {
    app
} from "../server.js";

const request = supertest(app);


//pruebas de los endpoints de los usuarios
describe("api users test", () => {
    before(() => {
        console.log("codigo ejecutado al inicio de todas las pruebas")
    }); //este metodo se ejcuta al inicio de todas las pruebas

    beforeEach(() => {
        console.log("este codigo se ejeucta antes de cada prueba")
    });

    after(() => {
        console.log("este codigo se ejcuta al final de todas las pruebas")
    });

    afterEach(async () => {
        console.log("este codigo se ececuta al final de cada prueba");
        await request.delete("/users");
    });


    //prueba para get users
    it("get users", async () => {
        const response = await request.get("/users");
        // console.log(response.body);
        expect(response.status).equal(200);
        expect(response.body.data).to.eql([]);
    });

    //prueba para agregar un usuario
    it("after create a new user, the user created should have an id assigned", async () => {
        const response = await request.post("/user").send({
            nombre: "usuario",
            apellido: "pruebas",
            dni: "00000"
        });
        // console.log(response.status);
        // console.log(response.body);
        expect(response.status).equal(200);
        expect(response.body.data).to.have.own.property("_id");
    });

    it("after create a new user, the user list should have a new element", async () => {
        const response = await request.post("/user").send({
            nombre: "usuario",
            apellido: "pruebas",
            dni: "1111"
        });
        // console.log(response.status);
        // console.log(response.body);
        expect(response.status).equal(200);
        const responseAllUsers = await request.get("/users");
        expect(responseAllUsers.body.data.length).to.eql(1);
    });

    it("if a user existe in our database, should be possible to delete that user", async () => {
        const response = await request.post("/user").send({
            nombre: "usuario",
            apellido: "pruebas",
            dni: "1111"
        });
        expect(response.status).equal(200);
        const userId = response.body.data._id;
        const responseDelete = await request.delete(`/user/${userId}`);
        expect(responseDelete.body.message).equal("delete successfully");
    });

});