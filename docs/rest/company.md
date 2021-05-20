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

#### Response

```json
{
  "id": "string",
  "name": "string",
  "createdAt": "string",
  "updatedAt": "string"
}
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
  "id": "string",
  "name": "string",
  "createdAt": "string",
  "updatedAt": "string"
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
  "id": "string",
  "name": "string",
  "createdAt": "string",
  "updatedAt": "string"
}
```

## List company tokens

```request
GET /company/tokens
Content-Type: application/json
```

#### Response

```json
[
  {
    "id": "string",
    "description": "string"
  }
]
```

## Create new token

```request
POST /company/token
Content-Type: application/json
```

#### Request body

```graphql
{
  description: String
}
```

#### Response

```json
{
  "id": "string",
  "description": "string"
}
```

## Delete company token by id

```request
DELETE /company/token/:tokenId
Content-Type: application/json
```

#### Response

```json
{
  "deletedToken": {
    "id": "string",
    "description": "string"
  }
}
```
