![License](https://img.shields.io/badge/License-ISC-ff69b4)

# **Social Network API**

## **Description**
The purpose of this project was to build an API for a social network website. The social netwok application allows for users to share their thoughts, reactions to others' thoughts, and create a list of friends.  

## **Table of Contents**
[User Story](#user-story)<br>
[Acceptance Criteria](#acceptance-criteria)<br>
[License](#license)<br>
[Contributing](#contributing)<br>
[Tests](#tests)<br>
[Built With](#built-with)<br>
[Walkthrough Video](#video-of-social-network-api)<br>

### **User Story**
AS A social media startup<br>
I WANT an API for my social network that uses a NoSQL database<br>
SO THAT my website can handle large amounts of unstructured data<br>

### **Acceptance Criteria**
GIVEN a social network API<br>
WHEN I enter the command to invoke the application<br>
THEN my server is started and the Mongoose models are synced to the MongoDB database<br>
WHEN I open API GET routes in Insomnia for users and thoughts<br>
THEN the data for each of these routes is displayed in a formatted JSON<br>
WHEN I test API POST, PUT, and DELETE routes in Insomnia<br>
THEN I am able to successfully create, update, and delete users and thoughts in my database<br>
WHEN I test API POST and DELETE routes in Insomnia<br>
THEN I am able to successfully create and delete reactions to thoughts and add and remove friends to a user’s friend list<br>

### **License**
This project is covered under the following license: ISC<br>
https://opensource.org/licenses/ISC


### **Contributing**
This project does not include any contributors

### **Tests**
No tests were utilized in the creation of this application.

### **Built With**
* JavaScript
* Node.js
* Express.js
* MongoDB
* Mongoose

### **Video of Social Network API**
Social Network API Part 1 
- This video demonstrates starting the server, syncing up the Mongoose models, and showing all of the technical acceptance criteria being met (model files and utility file with date formatting)

https://drive.google.com/file/d/1Eyqwp2CCPnBVUazVRsmCwHVknqPi82Vk/view

Social Network API Part 2
- This video demonstrates all user and friend list functionality, including creating new users, getting all users, getting a user by ID, updating a user, deleting a user, adding a friend and deleting a friend

https://drive.google.com/file/d/1sYFkW_SKyjL5GRoQwYjoEPOlUG8XIN7I/view

Social Network API Part 3
- This video demonstrates all thought and reaction functionality, including creating a new thought, getting all thoughts, getting a thought by ID, updating a thought, adding a reaction, deleting a reaction, and deleting a thought

https://drive.google.com/file/d/1iLLUT_kOcXsBof-FM0x13OyHRX5-zzJp/view

