# Notes

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


# Code Along

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

3. 

