DROP DATABASE IF EXISTS burger_db;
create database burger_db;
use burger_db;

create table burgers (
    id integer auto_increment not null,
    burger_name varchar(50),
    devoured boolean,
    createdAt timestamp,
    primary key (id)
);