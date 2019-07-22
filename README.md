
## Objective: Build 2 sets of CRUD routes for 2 models, Students and Tests

### Details
First, npm install and then set up your server based on what we learned in the lecture. 

run your server by using the command nodemon index.js

	- For now, our models/ database should just be objects. Make a file called student.js and declare an array of objects with some students.
	-Make Sure you require students.js in your main file. 
	-run your server and send requests to it with your browser and postman. 

	Example:

    Student: [{id :1, name : 'John'},{id:2, name:Jim},{id:3,name:Jane}]

Part 1: 

 Necessary routes:

		- Get all students
		- Add Student
		- Update student name
		- Delete Student


Part 2
make another fake database file called tests.js, make sure you require tests.js in your main file

Example:
		Test [{id : 1, score: 99, subject : 'Physics', studentID : 2},{id:2, score:87,subject:'Physics',studentId:1}, {id:3,score, subject:"{Physics}}]
Add other tests via your routes, make sure all are working


Neccessary routes:
		- Get all test scores
			- Update test score
			- Get top scoring student, should return the student's name. 
			- Get mean test score 
			- Delete Score
			- Add Score

Extra credit:
Make sure your Add and update score routes only update if the correct type of data is added. If a test score, it must be a number, etc. How would you do this?
If the type of data is wrong, return a message saying it was incorrect.

### How to test routes without a frontend or specs
- GET: use your browser
- POST / PUT / DELETE :
 - CLI (command line interface) with `curl`
   - e.g. `curl -H "Content-Type: application/json" -X POST -d '{"username":"kate","password":"1234"}' http://localhost:3000/api/login`
   - `-H`: headers. `-X`: verb. `-d`: data (must be of the type specified in headers). http://[address]:[port]/[route_path]
 - [Postman](https://www.getpostman.com/)