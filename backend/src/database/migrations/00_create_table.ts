

import { Knex } from 'knex';

export async function up(knex:Knex) {
  return knex.schema.createTable('registration', table => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('jobtype').notNullable();
      table.string('birthdate').notNullable();
      table.string('sex').notNullable();
      table.string('zip_code').notNullable();
      table.string('address').notNullable();
      table.string('number').notNullable();
      table.string('district').notNullable();
      table.string('city').notNullable();
      table.string('state', 2).notNullable();
      table.string('phonenumber').notNullable();
      table.string('email').notNullable();
      table.string('rg').notNullable();
      table.string('cpf').notNullable();
      table.string('vehicle').notNullable();
      table.string('car_license').notNullable();

    });

  }
  
  
  export async function down(knex: Knex) {
    return knex.schema.dropTable('registration')
 }