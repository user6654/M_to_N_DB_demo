https://github.com/user6654/Many-To-Many-DBexercise

A simple many is to many database demo.

As a common convention - gitignore was used for the secrets folder as required by the file in path "db/index.js"
Security aside as per educational purposes, the file may be recreated with the configs below:

Recreate the folder "secrets" with filename "db_configuration.js" and containing:

/***begin code***/
module.exports = { 
  user: 'node_user',
  host: 'localhost',
  database: 'enrollmentsdb',
  password: 'node_password',
  port: 5432
};
/***end code***/

And as usual, do install the dependencies as seen in the package.json file at the project's root folder.
