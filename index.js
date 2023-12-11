//-- Create the guvi_zen_class database
CREATE DATABASE guvi_zen_class;

//-- Use the created database
USE guvi_zen_class;

//-- Create the Students table
CREATE TABLE Students (
    student_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    email VARCHAR(100),
    phone_number VARCHAR(20),
   // -- Add other student-related fields here
);

//-- Create the Courses table
CREATE TABLE Courses (
    course_id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100),
    description TEXT,
    instructor VARCHAR(100), -- This could reference an instructor table
    start_date DATE,
    end_date DATE,
    //-- Add other course-related fields here
);

//-- Create the Instructors table
CREATE TABLE Instructors (
    instructor_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100),
    email VARCHAR(100),
    expertise VARCHAR(100),
    //-- Add other instructor-related fields here
);

//-- Create the Enrollments table (for many-to-many relationship between Students and Courses)
CREATE TABLE Enrollments (
    enrollment_id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT,
    course_id INT,
    enrollment_date DATE,
    FOREIGN KEY (student_id) REFERENCES Students(student_id),
    FOREIGN KEY (course_id) REFERENCES Courses(course_id)
   // -- Add other enrollment-related fields here
);
