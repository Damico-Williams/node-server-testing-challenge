
exports.seed = async function(knex) {
  await knex("characters").truncate()
      await knex("characters").insert([
        {name: "Goku"},
        {name: "Vegeta"},
        {name: "Trunks"},
        {name: "Gohan"}
      ]);
};
