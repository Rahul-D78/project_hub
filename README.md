# Introduction :
This site has got all the cool projects from various developers which you can 'discover', 'learn', and 'contribute' .

## Technologies used 

1. typescript - programing language
2. Nodejs - Platform 
3. express - framework
4. TypeORM - ORM
5. PostgreSQL - Database
6. JWT -- auth
7. Google OAuth -- auth

## Language and Platform setup
* This is project has been created using `Node.JS`,`typescript` and `postgressql` .
* You must have these installed on your system .
* To work with `Typescript` you must have a typescript config file . The following command will create a tsconf file .
```$ tsc --init```

## Database setup

```$ sudo -i -u postgres```

1. Enter `psql` as admin .

```$ psql```

2. Create database user and grant all privileges 

```SQL
 $create database project;
 
 $create user project with encrypted password  'project';
 
 `swith to the newly created db and grant all privileges to the user`
 
 $grant all privileges on database project to project;

```

## Installation
```$ npm install```

## Running the app
```$ npm start```
