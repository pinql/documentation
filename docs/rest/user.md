---
title: User
description: User endpoints.
hide_table_of_contents: false
---

## **GET** /users

```graphql
{
  foreignId: String
  first: Int
  skip: Int
}
```

## **POST** /user

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

## **GET** /user/:userId

```graphql
{}
```
