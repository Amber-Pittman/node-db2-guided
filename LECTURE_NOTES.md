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
    
    1. result in messy data, 
    
    2. then result in hard-to-find bugs, 
    
    3. resulting into scaling issues,

    4. then performance issues and a lot of other issues that can come from messy database schemas. 

    G. It's really important for us to think through this whole structure before we actually start working with our database. We need to think about _how_ our database should be structured.

    H. When designing these database structures, there are 3 things we need to ask ourselves:

    1. What fields or columns does a table need?
        * What kind of data are we storing?
        * What is the shape of it?
        * What does it look like?

    2. What type of data do we expect for each column? What are the specific types of the data? 
        * Are we storing numbers?
        * Are we storing pieces of text?
        * Are we storing boolean values?
        * Are we storing decimal numbers?
    
    3. Are there any restrictions or constraints needed for each column?
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

    B. 