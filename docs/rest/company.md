---
title: Company
description: Company endpoints.
hide_table_of_contents: false
---

## Read company infos

```request
GET /rest/company
Content-Type: application/json
```

## Update company name

```request
PUT /rest/company
Content-Type: application/json
```

#### Request body

```graphql
{
  name: String
}
```

#### Response

```json
{
  "id": "id",
  "name": "Pinql",
  "createdAt": "2019-01-01T12:12:12.297Z",
  "updatedAt": "2019-01-01T12:12:12.297Z"
}
```

## Update company images

```request
PUT /rest/company
Content-Type: multipart/form-data
```

#### Request body

```graphql
{
  logo: File
  defaultPropertyImage: File
}
```

#### Response

```json
{
  "id": "id",
  "name": "Pinql",
  "createdAt": "2019-01-01T12:12:12.297Z",
  "updatedAt": "2019-01-01T12:12:12.297Z"
}
```
