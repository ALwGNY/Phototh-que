## Photo library

This web project is a photo library which is connected to a database. It is therefore possible to create albums and add images to them. You can also delete images and albums.

## Technologies 

Technologies Used

- Frontend: Ejs, Bootstrap, JavaScript
- Backend: Node.js, Express.js
- Database: MongoDB

## Installation

To run this project locally, follow these steps:

1. Clone this repository to your local machine.

Copy code :
git clone https://github.com/ALwGNY/Phototheque.git

2. MongoDB

You need to install MongoDB.

3. Install dependencies.

Copy code :
npm install
npm i ejs
npm i fs-extra
npm i express
npm i express-fileupload
npm i express-session
npm i mongoose
npm i connect-flash
npm i dotenv

4. Secret session

For security reasons we must externalize the session code. I invite you to create a file at the root of the project with name .env and copy this : SECRET_SESSION = <"uses randomkeygen to generate code">
