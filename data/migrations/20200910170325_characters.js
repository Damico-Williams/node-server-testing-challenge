
exports.up = async function(knex) {
    await knex.schema.createTable("characters", (table) => {
		table.increments()
		table.text("name").notNullable()
	})
};

exports.down = async function(knex) {
    await knex.schema.dropTableIfExists("characters")
};
