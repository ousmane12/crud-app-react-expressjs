# crud-app-react-expressjs
Basic crud app for users and products using React and ExpressJS/NodeJS and MongoDB as database

# Prerequisites

- Install NodeJS
- In a terminal type npm install express to install express
- Install nodemon by typing: npm i nodemon
- Install a code editor (VS Code for me)
- Install MongoDB

# To execute

First of all you need to execute the api in the api folder
- Before that, you have to enter in the config folder and enter your credentials for MongoDB database such as the cluster name, user and password (I used the atlas cluster)
- To do that you need to execute this command : nodemon server
- If you wish to import the data in the data folder then you have to run this command
            node seeder -i
- To delete all data the database, then you have to run :
            node seeder -d

Secondly, run the client in the (ReactJS) client folder. To do so,
run this command: npm start after installing react

# License

otech [MIT]

