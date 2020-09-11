const db = require("../data/config")

function findById(id) {
	return db("characters").where({ id }).first()
}

async function create(data) {
	const [id] = await db("characters").insert(data)
	return findById(id)
}

function remove(id) {
	return db("characters").where({ id }).del()
}

module.exports = {
	findById,
	create,
	remove,
}