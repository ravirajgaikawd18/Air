to clear mysql cmd ====> \! cls;


create database project_db;
use project_db;
create table T_Users(   user_id int auto_increment primary key,
						username varchar(20) not null unique,
						email varchar(30) not null unique,
						password varchar(50) not null unique,
						first_name varchar(20) not null,
						last_name varchar(20) not null,
						phone varchar(10) not null,
						adhar varchar(12) unique,
						role varchar(20),
						created_time datetime,
                        isactive boolean,
						ec1 int,
						ec2 int,
						ec3 varchar(50),
						ec4 varchar(50),
						ec5 varchar(50),
						ec6 varchar(50),
						ec7 float,
						ec8 double,
						ec9 boolean,
						ec10 date,
						ec11 datetime,
						ec12 datetime
				   );
                   
create table T_Flights( flight_id int auto_increment primary key,
					    flight_no varchar(20) not null,
					    source varchar(30),
					    destination varchar(30),
					    travel_date date,
					    arrival_time datetime,
					    takeoff_time datetime,
					    landing_time datetime,
					    price float,
					    available_seats int,
                        takeoff_status boolean,
                        landing_status boolean,
						ec1 int,
						ec2 int,
						ec3 varchar(50),
						ec4 varchar(50),
						ec5 varchar(50),
						ec6 varchar(50),
						ec7 float,
						ec8 double,
						ec9 boolean,
						ec10 date,
						ec11 datetime,
						ec12 datetime
				    );
                  
create table T_Bookings( booking_no int auto_increment primary key,
						 booking_date datetime,
                         tickets int,
                         total_amount float,
                         pay_status boolean,
                         isvalid boolean,
                         flight_id int,
						 user_id int,
						 FOREIGN KEY (flight_id) REFERENCES T_Flights(flight_id),
                         FOREIGN KEY (user_id) REFERENCES T_Users(user_id),
                         ec1 int,
						 ec2 int,
						 ec3 varchar(50),
						 ec4 varchar(50),
						 ec5 varchar(50),
						 ec6 varchar(50),
						 ec7 float,
						 ec8 double,
						 ec9 boolean,
						 ec10 date,
						 ec11 datetime,
						 ec12 datetime
				       )auto_increment=1000;
                       
create table T_Tickets(    ticket_no int auto_increment primary key,
						   isvalid boolean,
                           booking_no int,
                           FOREIGN KEY (booking_no) REFERENCES T_Bookings(booking_no),
                           ec1 int,
						   ec2 int,
						   ec3 varchar(50),
						   ec4 varchar(50),
						   ec5 varchar(50),
						   ec6 varchar(50),
						   ec7 float,
						   ec8 double,
						   ec9 boolean,
						   ec10 date,
						   ec11 datetime,
						   ec12 datetime
						 )auto_increment=100000;

create table T_Passangers( pid int auto_increment primary key,
						   p_fname varchar(20) not null,
                           p_mname varchar(20) not null,
                           p_lname varchar(20) not null,
                           gender varchar(15),
                           dob date,
                           adhar varchar(12),
                           phone varchar(10),
                           ticket_no int,
                           FOREIGN KEY (ticket_no) REFERENCES T_Tickets(ticket_no),
                           ec1 int,
						   ec2 int,
						   ec3 varchar(50),
						   ec4 varchar(50),
						   ec5 varchar(50),
						   ec6 varchar(50),
						   ec7 float,
						   ec8 double,
						   ec9 boolean,
						   ec10 date,
						   ec11 datetime,
						   ec12 datetime
						 );
                         
					
create table T_User_types( type_id int auto_increment primary key,
						   role varchar(20) not null unique,
                           ec0 int,
                           ec1 int,
                           ec2 varchar(50),
                           ec3 date,
                           ec4 datetime,
                           ec5 datetime,
                           ec6 boolean
                         );
				
create table T_OTP( otp_id int auto_increment primary key,
					user_id int,
                    otp int,
                    generated_on datetime,
                    expiry_time datetime,
                    isvarified boolean,
					FOREIGN KEY (user_id) REFERENCES T_Users(user_id),
					ec1 int,
				    ec2 varchar(50),
				    ec3 date,
				    ec4 datetime,
				    ec5 datetime,
				    ec6 boolean
				  );
                  
show tables;
show databases;

drop table T_Bookings;

desc table T_Users;
show full columns from T_Flights;
ALTER TABLE T_flights RENAME COLUMN take_off TO takeoff_time;

insert into T_Users(user_id, username, email, password, first_name, last_name, phone, adhar, role, created_time, isactive) 
                      values(default, "dg12345", "dg@gmail.com", "dg@12345", "dinesh", "gambhire", 
							"9689533935", "808095105024", "ADMIN", "2023-01-09 03:07:00", true);
insert into T_Users(user_id, username, email, password, first_name, last_name, phone, adhar, role, created_time, isactive) 
                      values(default, "pratikrakhunde", "pr@gmail.com", "pr123456", "pratik", "rakhunde", 
							"1234567890", "123456789012", "subadmin", "2023-01-09 03:07:00", true);
insert into T_Users(user_id, username, email, password, first_name, last_name, phone, adhar, role, created_time, isactive) 
                      values(default, "deepanshumishra", "dm@gmail.com", "dm123", "deepanshu", "mishra", 
							"7896541230", "258741369369", "passanger", "2023-01-09 03:07:00", true);
                            
insert into T_flights(flight_id, flight_no, source, destination, travel_date, arrival_time, takeoff_time,
					   landing_time, price, available_seats, booked_seats, takeoff_status, landing_status) 
                       values(default, "AB1234", "pune", "delhi", "2023-01-10", "2023-01-10 10:00:00", 
                       "2023-01-10 10:30:00", "2023-01-10 11:00:00", 560, 55, 20, false, false);
insert into T_Bookings(booking_no, booking_time, total_amount, pay_status, is_valid, flight_id, user_id)
                       values(default, "2023-01-09 10:30:00", 560, true, true, 1, 3);
insert into T_Bookings(booking_no, booking_date, tickets, total_amount, pay_status, isvalid, flight_id, user_id)
                       values(default, "2023-01-09 12:10:00", 4, 2000, true, true, 1, 2);
insert into T_Tickets(ticket_no, is_valid, flight_id, booking_no) values(default, true, 1, 1);
insert into T_Tickets(ticket_no, is_valid, flight_id, booking_no) values(default, true, 2, 2);
insert into T_Passengers(p_id, p_first_name, p_middle_name, p_last_name, gender, dob, adhar, phone, ticket_no)
                         values(default, "deepanshu", "awadhesh", "mishra", "male", "1999-03-30","147852369159",
                         "1478523698", 1);
insert into T_User_types(type_id, role) values(default, "admin");
insert into T_User_types(type_id, role) values(default, "subadmin");
insert into T_User_types(type_id, role) values(default, "passanger");

insert into T_OTP(otp_id, user_id, otp, generated_on, expiry_time, isvarified)
            values(default, 3, 123654, "2023-01-09 12:10:00", "2023-01-09 12:20:00", false);

select user_id, username, email, password, first_name, last_name, phone, adhar, role, created_time, isactive from T_Users;








select * from users;
drop database project_db;
delete from users where id=4;

ALTER TABLE users ADD UNIQUE (email);
ALTER TABLE users ADD UNIQUE (password);
ALTER TABLE users ADD UNIQUE (phone_no);

ALTER TABLE cats ADD UNIQUE (title);

ALTER TABLE blogs ADD UNIQUE (b_title);

ALTER TABLE blogs modify column publish_time datetime;
Error Code: 1822. Failed to add the foreign key constraint. Missing index for constraint 't_bookings_ibfk_1' in the referenced table 't_flights'
Error Code: 3780. Referencing column 'flight_id' and referenced column 'flight_id' in foreign key constraint 't_bookings_ibfk_1' are incompatible.







-------------------------------------------------------
root>insert into T_Users(user_id, username, email, password, first_name, last_name, phone, adhar, role, created_time, isactive)
                          values(default, "pratikrakhunde", "pr@gmail.com", "pr123456", "pratik", "rakhunde",
                                                     "1234567890", "123456789012", "subadmin", "2023-01-09 03:07:00", true);
Query OK, 1 row affected (0.00 sec)


root>select * from t_users;
+---------+--------------+----------------------------+----------------------------+------------+--------------------+-----------+----------+------------+-----------+----------------+
| user_id | adhar        | created_time               | email                      | first_name | isactive           | last_name | password | phone      | role      | username       |
+---------+--------------+----------------------------+----------------------------+------------+--------------------+-----------+----------+------------+-----------+----------------+
|       1 |              | 2023-02-24 12:43:26.000000 | deepanshumishra2@gmail.com | deepanshu  | 0x01               | mishra    | dm@12345 | 1254789654 | PASSANGER | dm12345        |
|       2 | 808095105024 | 2023-02-20 10:23:11.000000 | dineshgambhire13@gmail.com | dinesh     | 0x01               | gambhire  | dg@12345 | 9689533935 | ADMIN     | dg12345        |
|       3 | 256315987456 | 2023-02-26 12:19:24.000000 | st12345@gmail.com          | suhas      | 0x01               | tambe     | st@12345 | 1236987456 | SUBADMIN  | st12345        |
|       4 | 123654789654 | 2023-02-26 12:30:29.000000 | pr12345@gmail.com          | pratik     | 0x01               | rakhunde  | pr@12345 | 7458725896 | PASSANGER | pr12345        |
|       5 | 123456789012 | 2023-01-09 03:07:00.000000 | pr@gmail.com               | pratik     | 0x01               | rakhunde  | pr123456 | 1234567890 | subadmin  | pratikrakhunde |
+---------+--------------+----------------------------+----------------------------+------------+--------------------+-----------+----------+------------+-----------+----------------+
5 rows in set (0.00 sec)



root>insert into t_otp values(default, "2023-01-09 03:07:00", "2023-01-09 03:07:00", false, "123654", 1);
Query OK, 1 row affected (0.00 sec)

root>select * from t_otp;
+--------+----------------------------+----------------------------+--------------------------+--------+---------+
| otp_id | expiry_time                | generated_on               | is_varified              | otp    | user_id |
+--------+----------------------------+----------------------------+--------------------------+--------+---------+
|      1 | NULL                       | NULL                       | NULL                     | NULL   |    NULL |
|      2 | 2023-01-09 03:07:00.000000 | 2023-01-09 03:07:00.000000 | 0x00                     | 123654 |       5 |
+--------+----------------------------+----------------------------+--------------------------+--------+---------+
2 rows in set (0.00 sec)

root>insert into T_flights(flight_id, flight_no, source, destination, travel_date, arrival_time, takeoff_time,
                                        landing_time, price, available_seats, booked_seats, takeoff_status, landing_status)
                           values(default, "AB1234", "pune", "delhi", "2023-01-10", "2023-01-10 10:00:00",
                           "2023-01-10 10:30:00", "2023-01-10 11:00:00", 560, 55, 20, false, false);
Query OK, 1 row affected (0.01 sec)

root>select * from t_flights;
+-----------+----------------------------+-----------------+--------------+-------------+-----------+--------------------------------+----------------------------+-------+--------+--------------------------------+----------------------------+-------------+
| flight_id | arrival_time               | available_seats | booked_seats | destination | flight_no | landing_status                 | landing_time
      | price | source | takeoff_status                 | takeoff_time               | travel_date |
+-----------+----------------------------+-----------------+--------------+-------------+-----------+--------------------------------+----------------------------+-------+--------+--------------------------------+----------------------------+-------------+
|         1 | 2023-01-10 10:00:00.000000 |              55 |           20 | delhi       | AB1234    | 0x00                           | 2023-01-10 11:00:00.000000 |   560 | pune   | 0x00                           | 2023-01-10 10:30:00.000000 | 2023-01-10  |
+-----------+----------------------------+-----------------+--------------+-------------+-----------+--------------------------------+----------------------------+-------+--------+--------------------------------+----------------------------+-------------+
1 row in set (0.00 sec)

root>insert into T_Bookings(booking_no, booking_time, total_amount, pay_status, is_valid, flight_id, user_id)
                           values(default, "2023-01-09 10:30:00", 560, true, true, 1, 1);


root>insert into T_Bookings(booking_no, booking_time, total_amount, pay_status, is_valid, flight_id, user_id)
    ->                            values(default, "2023-01-09 10:30:00", 560, true, true, 1, 1);
Query OK, 1 row affected (0.00 sec)

root>select * from t_bookings;
+------------+----------------------------+--------------------+------------------------+--------------+---------+-----------+
| booking_no | booking_time               | is_valid           | pay_status             | total_amount | user_id | flight_id |
+------------+----------------------------+--------------------+------------------------+--------------+---------+-----------+
|          1 | 2023-01-09 10:30:00.000000 | 0x01               | 0x01                   |          560 |       1 |         1 |
+------------+----------------------------+--------------------+------------------------+--------------+---------+-----------+
1 row in set (0.00 sec)

root>insert into T_Tickets(ticket_no, is_valid, flight_id, booking_no) values(default, true, null, null);
Query OK, 1 row affected (0.00 sec)

root>select * from t_tickets;
+-----------+--------------------+------------+-----------+
| ticket_no | is_valid           | booking_no | flight_id |
+-----------+--------------------+------------+-----------+
|         1 | 0x01               |       NULL |      NULL |
+-----------+--------------------+------------+-----------+
1 row in set (0.00 sec)

root>insert into T_Passengers(p_id, p_first_name, p_middle_name, p_last_name, gender, dob, adhar, phone, ticket_no)
    ->                          values(default, "deepanshu", "awadhesh", "mishra", "male", "1999-03-30","147852369159",
    ->                          "1478523698", 1);
Query OK, 1 row affected (0.01 sec)

root>select * from t_passengers;
+------+--------------+------------+--------+--------------+-------------+---------------+------------+-----------+
| p_id | adhar        | dob        | gender | p_first_name | p_last_name | p_middle_name | phone      | ticket_no |
+------+--------------+------------+--------+--------------+-------------+---------------+------------+-----------+
|    1 | 147852369159 | 1999-03-30 | male   | deepanshu    | mishra      | awadhesh      | 1478523698 |         1 |
+------+--------------+------------+--------+--------------+-------------+---------------+------------+-----------+
1 row in set (0.00 sec)