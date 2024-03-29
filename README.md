# URL Shortener

## How to run the application

1. First you need to make sure that you have MongoDB installed by running the next command:

```bash
mongod --version
```

if you don't have mongoDB installed, you can follow the instructions in this [link](https://docs.mongodb.com/manual/installation/) to install it.

2. Once MongoDB is installed, go to the terminal and run the next command:
```bash
mongod --port 4444
```

3. Open another terminal and run the next commands for the backend:
```bash
cd backend
node server.js
```

4. Open another terminal and run the next command for the frontend
```bash
cd frontend
node server.js
```

This application recieves as an input a long url and returns a shortened url that redirects you to the original one. In order to achieve this functionality I worte a function that generates a random URL of N characters, by default N is 6 but we can change this value according to the requirementes. The function selects a random character that could be a letter (lowercase and uppercase are different characters) or a number, some special characters could be included but it wouldn't represent a huge advantage on the contrary it could represent a problem for readability of the url. So, basically if we are using url of lenght 6 and we have 62 different characters for each position, we have 62 power 6 possibilities, we can always make the url a little bit longer, 6 is just an initial number. 
