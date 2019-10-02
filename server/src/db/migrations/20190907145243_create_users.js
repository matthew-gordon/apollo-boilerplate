export function up(knex) {
  return knex.schema.createTable('users', table => {
    table
      .uuid('id')
      .primary()
      .unique()
      .notNullable()
    table
      .text('email')
      .unique()
      .notNullable()
    table.text('password').notNullable()
    table.timestamps(true, true)
  })
}

export function down(knex) {
  return knex.schema.dropTableIfExists('users')
}