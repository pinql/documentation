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
