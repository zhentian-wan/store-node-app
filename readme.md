# Node App

## Set up MongoDB

### [mLab](https://mlab.com/home)
Sign up for a free single-node account.

Then you can create a new database and new user. After that update variables.env file with the information.

*How to test the connection?*

You can use [Mongodb compoass](https://www.mongodb.com/cloud/atlas?jmp=download-center)

Download and install, copy the information from mLab.

### Install MongoDB

```
brew update
brew install mongodb
```

### Run mongodb server:

```
mongod
```

## What is this?

Just you wait folks!

## Sample Data

To load sample data, run the following command in your terminal:

```bash
npm run sample
```

If you have previously loaded in this data, you can wipe your database 100% clean with:

```bash
npm run blowitallaway
```

That will populate 16 stores with 3 authors and 41 reviews. The logins for the authors are as follows:

|Name|Email (login)|Password|
|---|---|---|
|Wes Bos|wes@example.com|wes|
|Debbie Downer|debbie@example.com|debbie|
|Beau|beau@example.com|beau|


