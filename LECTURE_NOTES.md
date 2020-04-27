# DATABASE SCHEMA DESIGN

## Notes

1. What type of Database have we been working with up to now? 

    Relational Database

2. SQLite is referred to the **DBMS** (Database Management System). SQLite is not the database type - it is the DBMS.

3. There are databases that are Non-relational Databases. These are systems for storing _unstructured_ data, rather than storing them in columns.  

    A. MongoDB
    
    B. Cassandra

4. When we talk about Relational Databases, we talk about databases that have _strict_ requirements for how our data is formatted. 

    A. Strict requirements as to which columns contain data and what the data types are. 
    
    B. Also, tables can relate to other tables. You can have different relationships between tables and cells, etc. 

5. Non-Relational Databases, however, don't conform to a strict format. Additionally, tables don't have the ability to relate to other data or cells. 

6. When choosing the database and the DBMS, it depends a lot on a lot of different factors in your project. Whether you want to prioritize speed, ability, or ease of use, every DBMS comes with a different set of pros/cons. It is up to you to research and figure out which one is best for your project depending on your data requirements. 

7. In our case, for now SQLite works really, really well because it's extremely lightweight. Which means it's very easy to set up and work with as opposed to some of the other DBMS's. Since we don't have to install anything other than the npm module, you can just work from a single db3 file. 

8. However, SQLite is not used very much in real-world web development. You will see it used more for mobile development. Consider SQLite as a training ground for your SQL jobs. Since the SQL language is pretty much all the same in other DBMS's, your SQL skills are going to transfer to all other DBMS's. 

9. MySQL and Postgres are better suited for real-world applications of backend data. But SQLite will help build up your skills. 


## Code Along

### SQL

1. Start Server
    `npm run server`

2. Notice, we're running on Port 5000. 

3. Go to Insomnia. Make a test request. You should see a welcome message.
    `GET http://localhost:5000/`

4. Go ahead and make another request for the fruits-router.
    `GET http://localhost:5000/fruits`

5. The resulting list of fruits data come the db file, produce.db3.  

6. You'll need to open up the db3 file in DB Browser.

    A. Click on Browse Data and see the data. 

    B. Click on Database Structure and check it out.

    C. Notice the Names of our tables, the types, and the constraints. This file is what's called our _database schema_. It defines the structure of our database. 

    D. It is very important for us to have a clean database schema. Remember when we discussed non-relational databases? They don't have this schema. They can't force data into any particular shape. 

    E. Since we can have shape on our Relational database, it helps clean up our schema quite a bit. It helps keep our data organized and high quality. 
    
    F. If our schema is messy, it's going to:
    
    * result in messy data, 
    
    * then result in hard-to-find bugs, 
    
    * resulting into scaling issues,

    * then performance issues and a lot of other issues that can come from messy database schemas. 

    G. It's really important for us to think through this whole structure before we actually start working with our database. We need to think about _how_ our database should be structured.

    H. When designing these database structures, there are 3 things we need to ask ourselves:

    * What fields or columns does a table need?
        * What kind of data are we storing?
        
        * What is the shape of it?
        
        * What does it look like?

    * What type of data do we expect for each column? What are the specific types of the data? 
        
        * Are we storing numbers?
        
        * Are we storing pieces of text?
        
        * Are we storing boolean values?
        
        * Are we storing decimal numbers?
    
    * Are there any restrictions or constraints needed for each column?
        
        * Do the values have to constrain to some specific rule? 
        
        * Do the numbers have to be greater than zero? 
        
        * Or does the string have to be up to a certain length?
        
        * Does the password have to be a minimum of eight characters?
    
7. Go back to the Database.

    A. Check out the fruits table. What are the columns? The columns are the overall structure. 
    
    * id
    
    * name
    
    * avgWeightOz
    
    * delicious
    
    * color

    B. There is one column in every table that is going to be **required** - ID. Unlike a spreadsheet, every row needs some unique ID. The ID is referred to as the _Primary Key_. Every table has to have a primary key column. 
    
    * It doesn't necessarily have to be _ID_ - it can be anything, as we can name the column whatever we want - but it is still important to follow conventions. 
    
    * The primary key can be any type of value. It does not have to be an integer. 
    
    * As long as no 2 rows in the table try to use the same ID, the type does not matter. It can be a string if it needed to be. 
    
    * As long as that value is unique, that is a valid primary key. 
    
    * It usually defaults to an auto-incrementing integer making it unique.
    
    * Once the row of the primary key is created, you should **not** try to go back in and change that key. **Set in stone.**

    C. What are the different _types_ of the other columns. 
    
    * Integer - for the ID
    
    * Text - for the name and color
    
    * Float - for the avgWeightOz
    
    * Boolean - delicious
    
    D. The data types that are available for us to use are dependent upon the DBMS. In this case, these are some of the [types available in SQLite](https://www.sqlite.org/datatype3.html). 
    
    * Null - essentially used for empty values. If a column is empty, we use the null value. 
    
    * Integer - for storing whole numbers (no decimals)
    
    * Real - for storing numbers that do have a decimal; not whole numbers
    
    * Text - just storing a piece of text as a string
    
    * Blob - used for storing some type of binary data (for example, an image)

    E. For the data types like Float and Boolean that you see in the database, SQLite converts them into one of the 5 data types listed in the above documentation. 
    
    * In the documentation, scroll down to the section on Type Affinity. This is where it goes into detail about that. 
    
    * Once you move on into Postgre, all those type names will get converted and supported natively. 

    F. On top of enforcing certain data types for each column, we can also enforce other constraints
    
    * Making sure it's a unique value
    
    * Make sure it's not empty
    
    * Give columns default values
    
    * Prevent a row from being created if a value is empty (`NOT NULL`)

    G. If you try to insert a row that doesn't fall into the set constraints, you'll get an error in the database. It won't actually allow us to insert that data until that constraint error is fixed. **_Never change IDs!_**

8. Go into the Execute SQL tab.
    
    A. We want to insert a new row. Temporarily, leave out the average weight column.
       
    ```
    INSERT INTO "fruits" ("name", "delicious", "color")
    VALUES ('strawberry', true, 'red');
    ```

    * Running that statement returns an error message of NOT NULL. 
    
    B. If this was hooked up to a frontend, we would want to return some sort of message explaining the error. "Missing x part of the form". The user can then add the average weight value. 

    ```
    INSERT INTO "fruits" ("name", "delicious", "color", "avgWeightOz")
    VALUES ('strawberry', true, 'red', 0.42);
    ```
    
    * Once the required column was added in, the new row was inserted into the table. 

    C. These constraints along with the data types and columns are helping keep us organized and normalized (ideal).

    D. Go into Browse Data. 
    
    * Success! We got our new row of `strawberry` in the `fruits` table. 

9. Last lecture, we learned about the DQL and the DML. But now, we're going to learn about the DDL (**_Data Definition Language_**). We're going to learn how to create our database schema and our column names, data types, and the constraints with our SQL. 

10. The **_Data Definition Language_**, the DDL, consists of 3 Main Commands for 3 different operations. We need to be able to create tables, update or alter tables, and we need to be able to delete or drop tables. 
  
    A. The Create Table Command
    ```
    CREATE TABLE <table name> (
        <column name> <column type> < column constraints>,
        <column name> <column type> < column constraints>
    );
    ```

    B. The Alter Table Command
    ```
    ALTER TABLE <table name> <stuff to change>;
    ```

    C. The Drop Table Command (Delete)
    ```
    DROP TABLE <table name>;
    ```


11. Let's recreate our produce database. We'll restart the process. 

    A. Click on Write Changes or Revert Changes before you close the Database.

    B. Go into your `data` folder. 
    
    * Delete the produce.db3 file
    
    * If you have a produce.db3-journal file, delete it as well.

    C. Open DB Browser again. 

    D. Click New Database. 

    E. Go to wherever your project is, and create a file in the data folder called produce.db3 and save. 

    F. Close the `Edit table definition` popup because we're going to do this from scratch. You should be in a completely blank database now. If you look in your file system, you will see your new produce.db3 file.

    G. Go to Execute SQL tab. Let's create a new fruits table. 
       
    ```
    CREATE TABLE "fruits" (
        // Create your Primary key and make it automatically increment when new ones
            // are added
        // It needs to be marked as the primary key as unique and needs to have NOT NULL
            //(we don't want our IDs to be null/empty)
        // When specifying constraints, you do not need commas or any sort of boundary
            // creators like []
        // Mark it as the Primary Key. Since Primary Key is marked as such, there's no 
            // reason to use the UNIQUE identifier. 
        
        "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,

        // Datatype of name is text (or use VARCHAR() and specify a length inside the 
            // parens if you wanted to use one that gets converted into text)
        // Don't want it to be empty, so not null
        // Name should be unique in this situation because we're talking about fruits,
            // not people

        "name" TEXT NOT NULL UNIQUE,

        // Need a number type, so use FLOAT or REAL here
        // Constraints: Can't be empty

        "avgWeightOz" FLOAT NOT NULL,

        // Is it delicious? Use a boolean
        // Can't be empty
        // Default the deliciousness to true

        "delicious" BOOLEAN NOT NULL DEFAULT true,

        // Color is a text type
        // Doesn't need any constraints. Can be left empty. 

        "color" TEXT
    );
    ```

    * Without all the comments inside the code, it should look like this:
      
    ```
    CREATE TABLE "fruits" (
        "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
        "name" TEXT NOT NULL UNIQUE,
        "avgWeightOz" FLOAT NOT NULL,
        "delicious" BOOLEAN NOT NULL DEFAULT true,
        "color" TEXT
    );
    ```

    H. Our database now has all the types and all the constraints!

    * If you try running the command again without changing anything, you will get an error saying "fruits" already exists. 

    * A way to check if the table exists is to include IF NOT EXISTS into the command. That way, if it does exist, it will just skip over that command. If it does not exist, it will create it.

    ```
    CREATE TABLE IF NOT EXISTS "fruits" (
        "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
        "name" TEXT NOT NULL UNIQUE,
        "avgWeightOz" FLOAT NOT NULL,
        "delicious" BOOLEAN NOT NULL DEFAULT true,
        "color" TEXT
    );
    ```

12. What if we wanted to add a column later down the road to this fruits table? This is where we use the ALTER TABLE command. 

    A. In the DB Browser, create a new SQL tab inside the Execute SQL section. 

    B. Update fruits to add a column of "tropical" with a boolean and a default of false.
    ```
    ALTER TABLE
    ADD COLUMN "tropical" BOOLEAN DEFAULT false;
    ```
        
    C. Run the command then go checkout the Database Structure. You should now see your new tropical column with the datatype of Boolean and the schema has a default of false. 

13. What if we wanted to delete a table? 

    A. In the DB Browser, create a new SQL tab inside the Execute SQL section. 

    B. Just DROP TABLE and pass the table name.
    ```
    DROP TABLE "fruits";
    ```

    C. Run the command then go checkout the Database Structure. The fruits db is no longer there. 

    D. **_DO NOT RUN THIS COMMAND UNLESS YOU ARE 100% SURE YOU DON'T NEED IT!!!_** Database operations are not reversible most of the time. You have to be really careful with the commands that you run. 

    * Going back to that idea of SQL Injection Attacks, if you were passing strings straight into your database from the frontend where the users could pass in anything they want up into the database, say goodbye to your database. 

14. Head back over to the first command in the Execute SQL tab. Run it again so that we have a table to play with. 

    * Since we have IF NOT EXISTS in our create table command, we should add IF EXISTS to Alter Table and Drop Table commands. That way, we won't get any errors if stuff doesn't exist when we're expecting it to. 

    ```
    CREATE TABLE IF NOT EXISTS "fruits" (
        "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
        "name" TEXT NOT NULL UNIQUE,
        "avgWeightOz" FLOAT NOT NULL,
        "delicious" BOOLEAN NOT NULL DEFAULT true,
        "color" TEXT
    );

    ALTER TABLE IF EXISTS
    ADD COLUMN "tropical" BOOLEAN DEFAULT false;

    DROP TABLE IF EXISTS "fruits";
    ```

15. What would happen if you already had data and needed to change the schema? 

    * When we run the ALTER TABLE command, that's not doing anything to the data. The data just stays where it is. Instead, it changes the table around the data. 

    * Essentially, if we already had a list of 10 fruits in our database and ran ALTER TABLE to add the tropical column, the result would be that all 10 fruits would now have that column and their values would be false because of the default. 

    * Our schema can change around our data but we're not messing _with_ our data.


### KnexJS

During the last lecture, we learned how to use Knex as a query builder. We learned how to create SQL statements from JavaScript and send them to the database. 

Turns out, Knex is not only a query builder, but a schema builder as well. That means we can use it to run our DDL commands in addition to our DQL and DML commands. We can use it to actually create the schema of our database. 

Before we get to our schema builder commands, let's get the Knex command line interface working. When we install KnexJS through npm, it also installs a CLI app to do a lot of really useful things. 

1. Setup Knex and its CLI

    A. Jump into your terminal. 

    B. Make sure you are in the root of your project. 

    C. Install and initial Knex

        `npx knex init`

    D. This created a new file - `./knexfile.js` - that's now in your file system.

    * Delete all of its boilerplate because we're going to write it all from scratch. 
    ```
    module.exports = {
        // specify some things
    }
    ```

    * This is how we define our database connection. We're telling Knex how to connect to our actual database. 

    E. The first thing we're going to specify some things inside the exports module.
    
    * The CLIENT. The client is sqlite3.

    * A connection object. Here, we'll tell knex where our database file is. 

    * Lastly, because of some underlying options using Knex and how they work with SQLite, we have to tell it to use null as default (above the connection). Set the default to true. That's just required in order for SQLite and Knex to work properly with `null` values. 

    ```
    module.exports = {
        client: "sqlite3",
        useNullAsDefault: true, // Flag REQUIRED for SQLite to work
        connection: {
            filename: "./data/produce.db3" // location of our db file
        }
    }
    ```

2. Now that we have our Knex configuration set up, we need to create an actual instance of Knex. We need an instance that's connected to the database that we can use to run SQL commands. It's really, really easy.

    A. Create a new file in the Data folder. 

    B. Name the new file.
    
    * `config.js || databaseConfig.js || dbConfig.js || instance.js || db.js` 
    
    * Whatever you want to call it, just as long as it's clear that this is the Knex instance. 

    C. Import knex. 

    D. Import the `knexfile.js` file into this instance. 

    E. Export config and call knex and pass in the knexfile config. 

    ```
    // config.js

    const knex = require("knex")
    const knexfile = require("../knexfile")

    module.exports = knex(knexfile)
    ```

    F. Now, anytime we want to run a SQL command or we want to talk to our database, we just have to import this instance of knex. We can now call our query builder functions. 

    * `db().where().select()`
    
    * `knex().where().select()`

3. Once you have both the instance file and the knex configuration ready, go into the fruits router. 

    A. Import the instance of next from config.js. 

    B. In the fruits-router, you'll already see we have some config in the file. It was previously defined so that we could test the endpoints. It's doing the same thing as what we wrote in knexfile. Therefore, you can just remove it from the fruits router. 

    C. Delete the import of knex in the fruits router. 

    D. Import the instance we just created. You can call it db or instance - whatever you want.
    ```
    const db = require("../data/config")
    ```
    E. Since that is now connected to our database, we can call all of our queries. 
    
    F. Let's test things to make sure our database still works. 

    * Start the server

    * Go to Insomnia

        * Make sure the Welcome request still runs

        * Check the Get Fruit request

            * We get a 500 status! Go to your terminal and see what the error was. 

            * "No such table 'fruits'" 
            
            * We forgot to recreate our table after we ran the Drop Table command earlier. 

                * In DB Browser, within the Execute SQL tab, run your Create Table command again. 

                * Table is created now. 

        * Try calling Get Fruits with Insomnia once again. 

            * We get a successful response but it's empty

            * We don't have any data in our database

    G. **Important Side Note:** You may run into a specific error later. Let's try running that Alter Table again. Don't click write changes or revert changes, just kind of leave it as it is. 

    * Try making a request to POST fruits in Insomnia. 

        * Send a name - strawberry

        * avgWeightOz - 0.42

        * delicious - true

        * color - red

    * The result is a 500 internal error. 

    * Look in your terminal. You will come across this error at some point. `SQLITE_BUSY: database is locked` It's a quick fix but let's talk about why it's occurring. 

        * When we're messing around in our database with DB Browser - we're changing stuff, we're adding rows - it's essentially making changes to the produce.db3 file.

        * Something that DB Browser does in order to prevent other processes from changing the database file while it's messing with it, it creates a lockfile. If you look in your data file, you will see a `-journal` file. That's DB Browser's lockfile. 

        * DB Browser's lockfile is the reason why we're getting the "database is locked" error. 

    * To release the lock - it's really easy - go back into DB Browser and click Write Changes or Revert Changes. 

        * This tells DB Browser that we are done running our commands. Release the lock and allow other stuff to work this file.  

    * After you click revert changes, select yes on the pop up. 

        * It releases that lock.

        * You can confirm by going into your data folder and see that the -journal file is no longer there. 

        * Now we're allowed to actually work with the database from Node. We can call the post endpoint and create the new fruit. It creates it and returns it. We're good to go! :) 

        * In DB Browser, if you Browse Data, you'll see your fruits table with the strawberry inside it. 

4. Now that we have the config set up, the instance of knex set up, let's get back to the DDL. Our current way of creating the fruits table with DB Browser's Execute SQL button has some shortcomings. 

* There is no version control. We can't see how our database got to the point it currently is at. SQL doesn't keep a history of any commands that we run, DDL or otherwise. 

* The schema is not reversible. Since that's the case, this is where Database Migrations, also referred to as Schema Migrations, come into play.

5. Schema (Database) Migrations are just code written to a file that describe the changes that need to happen over time. 

    A. Hypothetical Scenario

    * You have a migrations folder and a migrations1.js file in it. This file creates the fruits table. 

    * Later down the line you want to change something in your schema or your database, you will need to create a new migration file. The new file, migration2, will maybe add a new column to the fruits table and removes a default value from an existing column. It changes the schema in some way. 

    * Maybe a month later, you want to create a new table and change something in the fruits table. You'll create a new migrations3 file for your new vegetables table. In it, you delete the column for the fruits table. 

    B. We have these lists of files that incrementally build and change our database over time. This is what's referred to as a [schema migration](https://en.wikipedia.org/wiki/Schema_migration). 

    C. Migration libraries like Knex, will run through each one of the migrations files with the Migration command. It's going to incrementally build out the database schema. 

    * If we realize a change in the database is causing issues, like deleting a column from the fruits table may cause an issue in our application, we can easily reverse one of the migrations without messing with the earlier migrations. 

    D. Since we can incrementally build our schema and rollback migrations as needed, we can build this schema in a much more predictable way. 

    E. Think of migrations kind of like your bank statements. 

    * You log into your bank account and see that you have $100 in it. 

    * You probably want to figure out how your bank account got so low. 

    * You download your statements from the past year and look through each one of your transactions to see how it got down to where its at and what you spent all your money on. 

    * You have a history of changes that created a final result. A history of transactions that created a balance. 

    * It's the same idea with database migrations. Each migration file is like a bank statement. Inside each of those files, we make small changes to our schema, like the bank transactions. 

        * If anyone wants to recreate our database on their local machines, they just have to run each migration file in the same order they were created and they're going to have a working copy of our schema exactly as it is currently. 

        * We can create a bunch of these migration files over time, as our schema changes, and we now have a replicable and a reversible history of how the database schema got to where its at. 

6. Implement Schema Migrations with Knex

    A. Knex is a migration library that we can use to implement this concept. 

    B. You'll need to disconnect from DB Browser by clicking on the Close Database button. Doing so releases the lockfile from your file system.  

    C. Delete that produce.db3 file again.

    D. Create a new migration file in the terminal and name the table fruits.
        ```
        npx knex migrate:make fruits
        ```

    E. Look in your code. You will see an autopopulated migrations folder. It houses the migrations file you just created. 

    F. The file name is quite long. It's a timestamped file while still being named fruits. 

    * YearMonthDayHHMMSS_fruits.js

    * It's important that the timestamp is in the name for the order of migrations. They have to run in the order they were created. 

    G. In the migrations file, we have 2 functions. Delete the semicolons. 

    * Up Function
    
        *  In it, we essentially put our schema builder code that creates or changes our schema in some way. It moves our database 1 step forward. 

        * Let's recreate our fruits table using this migration with the up function. 

            * Remember, just like knex helps us with our query building, it helps us with our schema building as well (DDL functions). 

            * We have this instance of knex. It gives us this this instance of knex that just comes from the knex CLI (when we used the npx command earlier, we accessed the CLI). It came pre-configured and connected to database. We can use that to call knex in certain functions. 

            * Behind the scenes, Knex is going to construct a CREATE TABLE SQL statement and send that through to the database. It's going to create that table of fruits. 

            ```
            exports.up = function(knex) {
                knex.schema.createTable("fruits")
            }
            ```

            * This function returns a promise. You need to make it async/await. 

            ```
            exports.up = async function(knex) {
                await knex.schema.createTable("fruits")
            }
            ```

            * The first parameter is the table name ("fruits"). The 2nd parameter is going to be a callback. The callback function is going to give us access to parameter, a variable, called "table." That table variable we can use to actually create our columns. 

            ```
            exports.up = async function(knex) {
                await knex.schema.createTable("fruits", () => {
                    // table.integer("id").notNull().primary() - creates ID column

                    // Can shorten previous code to increments. 
                        // Creates an autoincrementing column with all of those values
                    table.increments("id") 

                    table.text("name").notNull().unique()

                    table.float("avgWeightOz").notNull()

                    table.boolean("delicious").notNull().default(true)

                    // We're intentionally leaving out the color for later.
                })
            }
            ```
            
            * Make sure your produce files aren't there anymore before you do the next step.
            
            *  Go to the terminal. `npx knex migrate:latest`

                * When you run it, it's going to say `Batch 1 run: migrations` and its going to create a produce.db3 file in your data folder. 

            * Open the new produce file in DB Browser and you'll see it's created the same schema as we did before in the migrations file. 

    * Down Function

        * Remember, our schema migrations should _always_ be reversible. 

        * In the event that we have to rollback a migration due to a bug or an error, we should be able to rollback any particular changes we made in this migration file.

        * Our down function should _always_ reverse whatever happens in our up function. It's like moving back 1 step in time; making it like the migration never ran at all. We just want to drop the table. 

        * Mark the down function as an async function. Then add await when calling knex for the schema to drop the table if "fruits" exists. 

        ```
        exports.down = async function(knex) {
            await.knex.schema.dropTableIfExists("fruits")
        }
        ```

        * In the terminal, we can run the down function. `npx knex migrate:rollback`

            * When you run it, it's going to say `Batch 1 rollback: 1 migrations` 
            
            * We still have the produce.db3 file in your data folder. It did not delete the file. 
            
            * If you open that file in DB Browser, you'll see that the fruits table is no longer there. It deleted it. 

            * Knex added 2 additional tables to the database. You'll see a `knex_migrations` and a `knex_migrations_lock` file in Tables. These are just used internally by Knex to keep track of which files have been executed so far and which haven't. 

        * If we run `npx knex migrate:latest` again, it will recreate that fruits table because we deleted it earlier (with the ifNotExists on it)

        * You can roll back again in the terminal and it's deleted again. The recreate it again. It's that easy. Great when you need to make a small tweak to a column. 

7. What do we need to do if we need to update the table? Maybe we need a new column for the fruits table. We need to be able to track the color now.  How do we do that?

    * Create a new migrations file and give it the name of fruit color. 
    `npx knex migrate:make fruit_color`

    * It creates the new file with the new timestamp - YearMonthDayHHMMSS_fruit_color.js

    * Remember, the timestamp is to make sure that the database is ran in the right order of being built or changed.

    * Let's add the color column into the fruits table. 

        * Go into the new migrations file. Get rid of the unnecessary semicolons. 

        * Make them both async functions. 

        * What we do to alter the data is to use await when calling knex on the schema and use the alterTable syntax. 
        
        * We're going to have the same callback of the table parameter. 
        
        * Then to insert the column, we do as before: table.text("color"). 
        
        * We don't need any constraints, so we can let it be null and there's no default value so we can leave it as it is.

        ```
        exports.up = async function(knex) {
            await knex.schema.alterTable("fruit", (table) => {
                table.text("color")
            })
        }

        exports.down = async function(knex) {
            /// await something
        }
        ```
    * To revert this change, what do we need to do to the down function? If you look in [Knex's Schema Builder Documentation](https://knexjs.org/#Schema-dropColumn), you will see a dropTable command. 

        * Specify the fruit table.

        * The callback takes table.

        * According to the documentation, we can call dropColumn. 

        * Specify color.

        * The down function looks very similar to the up function. It's just calling dropColumn instead of providing a name for the column with text.

        ```
        exports.up = async function(knex) {
            await knex.schema.alterTable("fruits", (table) => {
                table.text("color")
            })
        }

        exports.down = async function(knex) {
            await knex.schema.alterTable("fruits", (table) => {
                table.dropColumn("color")
            })
        }
        ```

    * If you go to your and run your migrate latest command again, it's going to say `Batch 2 run: 1 migrations`

        * Go look at your schema in DB Browser. It kept the original fruit schema but added the color column. It incrementally built off the last migration. 

    * Try rolling back now. `npx knex migrate:rollback`

        * When you run it, it's going to say `Batch 2 rolled back: 1 migrations` 

            * When you go and look at the database in DB Browser, it didn't delete the fruits table. 
            
            * It deleted the color column as expected. 
            
            * The reason behind is, knex migrations work in batches. When you run the rollback command in your terminal, it will show you which batch ran (Batch 1 or Batch 2, etc). 
            
                * When you run the migration:latest command, knex is going to take _all_ the migration files that haven't been run yet and it's going to run them all in one singular batch. 

                * When you run rollback, knex is going to rollback the entire last batch of migrations; whether it was 1 migration file or several migration files, rollback reverts to the previous version. 
    
8. Migrations

    * Since we created the fruits table since the first time we migrated, we created the color column the 2nd time we migrated, that was 2 separate batches. 
        
        * If we run rollback the first time, it rolls back the 2nd batch. 

        * If we were to run rollback again, that's going to rollback the first batch. Doing this will delete our fruits table. 

        * If you try to rollback _again_, it's going to tell you that you're already at the base migration and there's nothing left to rollback. 

        * Now, if you migrate latest, the terminal returns `Batch 1 run: 2 migrations`. It took all the migrations that haven't been run yet (because we rolled everything back) and ran them in 1 batch. 

            * This means that we created the table and added the column in a single run. 

        * If we rolled back again, it would rollback both migrations and there would be nothing in the database. 

    * **_SIDE NOTE:_** To clarify, when we run migrate latest, that runs all of the migrations that haven't been run yet. When they get run, those make up a Batch. If we create a new migration afterwards, that kind of working in a new batch. It's all time based. It's based on when they were run and when they were created. 

    * **Scenario:** Let's say we run these migrations against a live database where it's storing real user data. After a few hours, we realize a mistake was made and we need to make another change to our schema. We misspelled the column name. Should we rollback the last migration and change it then migrate again? Or should we create a brand new migration file with the change? Considering the fact that we've deployed this; it's live gathering real user data. 
        
        * **Answer:** We should _always_ create a new migration. We should never run a new migrate rollback on a _live_ production base, unless it's an absolute emergency. 

            * The reason is rollbacks can lose data. Let's say that our users updated that database and added color values after that migration. Then we rolled that migration back and we dropped the color column. But there's already data in there. We're going to lose that data. 

    * These migrations (moving forward and rolling back) are really useful for local development, for changing your schema locally when you're building it out, but once it's live and collecting real user data, you never want to roll it back. Unless it is an emergency. 

    * If we had _n_ numbers of migrations and we rolled back to the base migration but then wanted to go to a specific migration number, how do you do that?

        * In the terminal, `npx knex migrate --help`

        * In the commands section, you will see `migrate:up [<name>]`. You can specify the specific migration. 

        * You could also use `migrate:down [<name>]` too to rollback, not the `migrate:rollback [options]` command. 

        * However, **_don't_** rollback a specific migration unless you absolutely have to. Otherwise, it will just confuse you even more. 

    * How will you remember if you rollback your schema? Because you have code written in your down function. Whatever code you have written in the down function is what will be run. If you already ran this migration in a live database, you know you have some data in the color column, you're not going to want to roll it back because data will be deleted. 

    * If for some reason you wanted to rollback all the way down to the first migration, you could do `migrate:down [0]`. But it's easier to just delete the database file and restart from scratch. 

9. Now that we know how to run our migrations and roll back our database schema, run a `npx knex migrate:latest`. The schema is updated and ready to go but if you look in the fruits table, it's empty. It doesn't have any fruits yet. 

    * If we start our server in the terminal, `npm run server` and make a get request to fruits in Insomnia, it's going to return an empty array. It's not very useful for testing. 

        * We should probably put some data in there

    * In order to populate some sample data, we use seeds - case seeding. Seeds are just code that just connects to the database and tests data. That's it. 

    * To create some seeds with knex, go into our terminal again and create some fruit seeds. `npx knex seed:make fruits`. Once you run that, you will see that there's a seeds folder that was created. It houses our new fruits seed file. 

    * Inside of the function, we can literally call our query builder commands to insert some test data. We just call the knex('table_name').insert() or knex('table_name').del() or .truncate() to delete the table to start fresh. 

    * Get rid of everything inside this seed function. We're going to start this from scratch.

        * Make it an async/await function. 

        * Clear out all the data of the fruits table. 
          * Everything that might potentially be in there. We want to start from a predictable test data set. We just want to find 5 or 6 rows in there. If we had been calling the post endpoint and adding fruits of our own, we want to clear all those out before we seed our table. We can start from the same point every single time. 

        * What can we call to clear out our table? Use `.del()` without a where() statement. 

        * Reset the auto-incrementing ID. So instead of `.del()`, we can call `.truncate()`. That is going to 
            
            * Clear out our rows

            * It does more than `.del()`, like resetting the auto-incrementing ID

        * Call insert and insert some test data. 
            
            * We can pass in more than one row at a time by passing in an array.

        * Go back to your command line. `npx knex seed:run`

            * This command clears out your database, resetting everything.

            * It also populates it with some fresh test data that you expect.

            * `Ran 1 seed files`

        * In DB Browser, it is now populated with some data in the Browse Data tab. 

        * Make a post request to create a new fruit row. You should get a 201. 

        * Refresh DBB. You should see your new strawberry row. 

        * To reset it back to it's original state and remove the new row, just do seed:run in the terminal again. 

        * Seeds are kind of like initial state with react. This is for testing purposes though. You never want to deploy this with your seed data because the seed data is really meant for local development and testing. It's not meant for your live users to interact with. 


        * Final version of the seed file:

        ```
        exports.seed = async function(knex) {
            await knex("fruits").truncate()

            away knex("fruits").insert([
                { name: "dragon fruit", avgWeightOz: 16.7, delicious: true, color: "red" },
                { name: "durian", avgWeightOz: 52.9, delicious: false, color: "yellow" },
                { name: "rambutan", avgWeightOz: 1.1, delicious: true, color: "pink" },
                { name: "lingonberry", avgWeightOz: 0.01, delicious: true, color: "red" },
                { name: "golden gooseberry", avgWeightOz: 0.02, delicious: true, color: "yellow" },
            ])
        }
        ```

### Done!