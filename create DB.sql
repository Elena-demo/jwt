create database if not exists user;
use user;

create table if not exists users (
id int primary key auto_increment,
user_name varchar(40),
email varchar(25),
password varchar(255)
);

select user_name from users where email = ''

insert into users (user_name, email, password) values ('Иванов', 'iv@mail.ru', 'vkdjhnvkjf');