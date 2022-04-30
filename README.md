# Personal-Budget

## Description:

With this proyect in a mono repository. You can create a user and log in with Mongoose and access to your personal Budget where you can add income and outflow operations.

To use it FIRST go to Login => Create an user and then you will be able to Sign In

## Starting

1.  Fork the repository to have a copy of it in your accounts
2.  Clone the repository on your computers to start working
3.  Go to ` https://www.mongodb.com/` login and create a DataBase
4.  In `packeages/server` folder create a `.env` file like

```
PORT=
MONGO_CONNECTION_STRING= ### => Here go mongo string connection with your app make sure you change it with you password and dabase correctly
JWT_SECRET= ### => Here any word or numbers that you want
```

5. In `packeages/server`, `packeages/client` and `Personal-Budget` folders open a terminal, and white follow command:
   `npm install`

6. Run `npm start` in `Personal-Budget`

## Technologies:

##**DataBase**:

- [ ] MongoDB

I created two models in PostgreSQL (Users - Budget).

- **Users:** firstName, lastName, email and password
- **Budget:** ammont, concept, category, userEmail type and date

##**BackEnd**:

- [ ] Express

  - **USER:**

    - **POST /signin**: login user
    - **POST /signup**: create a new user

      - **BUDGET:**

    - **POST /budget**: A list with all the operations from a user login
    - **GET /budget/{idOperation}**: You can access to more information about the operation
    - **POST /characters/{idCharacters}**: You can create a new character
    - **POST /budget/new**: You can create an operation
    - **DELETE /budget/{idOperation}**: You can delete an operation
    - **UPDATE /budget/{idOperation}**: You can update an operation

##**FrontEnd**:

- [ ] React
- [ ] Redux
- [ ] Bootstrap
- [ ] Formik
- [ ] Yup

**Home page**: landing page with - All the operation for this user with buttons to add, delete and update operations also you can filter operation for type

**Login page**: landing page with - Sign In and Sign Up Forms
