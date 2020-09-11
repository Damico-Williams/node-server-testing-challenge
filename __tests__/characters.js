const server = require("../server")
const deebee = require("../data/config")
const supertest = require("supertest")

beforeEach(async () => {
	// run the seeds programatically before each test to start fresh
	await deebee.seed.run()
})

afterAll(async () => {
	// close the database connection so the test process doesn't hang or give a warning
	await deebee.destroy()
})

describe("character tests", () => {
    it("POST to /", async () => {
        const res = await supertest(server)
            .post("/")
            .send({ name: "piccolo"})
        expect(res.statusCode).toBe(201)
        expect(res.type).toBe("application/json")
        expect(res.body.name).toBe("piccolo")
    })
})