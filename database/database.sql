create database if not exists employee;
use employee;

create table personEmployee(
	id int(12) not null auto_increment,
    name varchar(20) default null,
    edad int(15) default null,
    profesion varchar(50) default null,
    primary key(id)
)
select * from personEmployee