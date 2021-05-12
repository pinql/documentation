---
title: Company
description: Company endpoints.
hide_table_of_contents: false
---

## **GET** /company

Get company infos

```graphql
{}
```

## **PUT** /company

Update company

```graphql
# content-type: multipart/form-data
{
  logo: File
  defaultPropertyImage: File
}

# content-type: application/json
{
  name: String
}
```
