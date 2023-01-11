# REST API Jwt
Assignment 2 JWT Auth

#### 1. Clone Git
```sh
git clone https://github.com/penggunakreatif/hacktiv8-ass2-jwt.git
```

#### 2. Rename file `.env.example` to `.env`

#### 3. NPM
```
npm install
```


#### 4. Run Project
```
node index.js
```
or
```
nodemon index.js
```

## How to Use
Open your Postman (HTTPClient)

#### Register new account
```
POST http://localhost:3000/users/register
```

Set your Parameter
```
{
"username" : "YOUR_USERNAME",
"email" : "YOUR_EMAIL",
"password" : "YOUR_PASSWORD"
}
```


RESPONSE
```
{
    "message": "Create Success!",
    "data": {
        "id": 3,
        "username": "pengguna.kreatif",
        "email": "pengguna.kreatif@gmail.com",
        "password": "password123"
    }
}
```

#### Login
```
POST http://localhost:3000/users/login
```

Set your Parameter
```
{
"username" : "YOUR_USERNAME",
"password" : "YOUR_PASSWORD"
}
```

RESPONSE
```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcm5hbWUiOiJwZW5nZ3VuYS5rcmVhdGlmIiwiZW1haWwiOiJwZW5nZ3VuYS5rcmVhdGlmQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoicGFzc3dvcmQxMjMiLCJpYXQiOjE2NzM0MjM0ODF9.Wvi-8WsxpgoKkeBB_i2LAwLyOtCf42gz66Z9AbfeDMo"
}
```


#### Validation Access 

```
GET http://localhost:3000/city
```

Response Validation
```
{
    "name": "JsonWebTokenError",
    "message": "jwt must be provided"
}
```

Please set Parameter Header `token`
```
token : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywidXNlcm5hbWUiOiJwZW5nZ3VuYS5rcmVhdGlmIiwiZW1haWwiOiJwZW5nZ3VuYS5rcmVhdGlmQGdtYWlsLmNvbSIsInBhc3N3b3JkIjoicGFzc3dvcmQxMjMiLCJpYXQiOjE2NzM0MjM0ODF9.Wvi-8WsxpgoKkeBB_i2LAwLyOtCf42gz66Z9AbfeDMo"
```

RESPONSE 
```
{
    "data": [
        {
            "code": "001",
            "name": "Bogor"
        },
        {
            "code": "002",
            "name": "Jakarta"
        }
    ]
}
```






