-- 🌟 Exercise 1 : Bootcamp
-- Instructions
-- For this exercise, you will have to find some requests on your own!



-- Create
--1. Create a database called bootcamp.
--2. Create a table called students.
--3. Add the following columns:
	--1. id
	--2. last_name
	--3. first_name
	--4. birth_date
	-- The id must be auto_incremented.
	-- Make sure to choose the correct data type for each column.
	-- To help, here is the data that you will have to insert. (How do we insert a date to a table?)
	
-- CREATE TABLE STUDENTS(
-- 	ID SERIAL PRIMARY KEY,
-- 	LAST_NAME VARCHAR(50) NOT NULL,
-- 	FIRST_NAME VARCHAR(50) NOT NULL,
-- 	BIRTH_DATE DATE NOT NULL)

-- Insert
--1. Insert the data seen above to the students table. Find the most efficient way to insert the data.

-- INSERT INTO STUDENTS(LAST_NAME, FIRST_NAME, BIRTH_DATE) 
-- VALUES 
--   	('Benichou', 'Marc', '1998-11-02'),
-- 	('Cohen', 'Yoan', '2010-12-03'),
-- 	('Benichou', 'Lea', '1987-07-27'),
-- 	('Dux', 'Amelia', '1996-04-07'),
-- 	('Grez', 'David', '2003-06-14'),
-- 	('Simpson', 'Omer', '1980-10-03')

--2. Insert your last_name, first_name and birth_date to the students table (Take a look at the id given).

-- INSERT INTO STUDENTS(LAST_NAME, FIRST_NAME, BIRTH_DATE) 
-- VALUES ('Aramati', 'Moshe', '1996-10-04')  
-- ID GIVEN IS 7

-- Select
--1. Fetch all of the data from the table.

SELECT * FROM STUDENTS;

--2. Fetch all of the students first_names and last_names.

SELECT first_name, last_name FROM STUDENTS;

--3. For the following questions, only fetch the first_names and last_names of the students.
	--1. Fetch the student which id is equal to 2.
	
	SELECT first_name, last_name FROM STUDENTS WHERE ID = 2
	
	--2. Fetch the student whose last_name is Benichou AND first_name is Marc.
	
	SELECT first_name, last_name FROM STUDENTS WHERE last_name = 'Benichou' AND first_name ='Marc'
	
	--3. Fetch the students whose last_names are Benichou OR first_names are Marc.
	
	SELECT first_name, last_name FROM STUDENTS WHERE last_name = 'Benichou' OR first_name ='Marc'
	
	--4. Fetch the students whose first_names contain the letter a.
	
	SELECT first_name, last_name FROM STUDENTS WHERE first_name LIKE '%a%'
	
	--5. Fetch the students whose first_names start with the letter a.
	
	SELECT first_name, last_name FROM STUDENTS WHERE first_name ILIKE 'a%'
	
	--6. Fetch the students whose first_names end with the letter a.
	
	SELECT first_name, last_name FROM STUDENTS WHERE first_name LIKE '%a'
	
	--7. Fetch the students whose second to last letter of their first_names are a (Example: Leah).
	
	SELECT first_name, last_name FROM STUDENTS WHERE first_name LIKE '%a' OR first_name LIKE '%a_' OR first_name LIKE '%a__' OR first_name LIKE '%a___'
	
	--8. Fetch the students whose id’s are equal to 1 AND 3 .
	
	SELECT first_name, last_name FROM STUDENTS WHERE (ID = 1 AND ID = 3)

--4. Fetch the students whose birth_dates are equal to or come after 1/01/2000. (show all their info).

SELECT * FROM STUDENTS WHERE (birth_date >= '2000-01-01')