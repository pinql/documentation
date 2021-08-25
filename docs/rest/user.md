---
title: User
description: User endpoints.
hide_table_of_contents: false
---

## List users

```request
GET /rest/users
Content-Type: application/json
```

#### Request params

```params
foreignId: String
first: Int
skip: Int
```

#### Response

```graphql
[
  { ...user }
]
```

## Create a user

```request
POST /rest/user
Content-Type: application/json
```

#### Request body

```graphql
{
  foreignId: String
  firstName: String
  lastName: String
  email: String
  phoneNumber: String
  birthDate: String
  password: String
}
```

#### Response

```graphql
{
  ...user
}
```

## Get a user by id

```request
GET /rest/user/:userId
Content-Type: application/json
```

#### Response

```graphql
{
  ...user
}
```
