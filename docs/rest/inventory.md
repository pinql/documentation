---
title: Inventory
description: Inventory endpoints.
hide_table_of_contents: false
---

## List inventories

```request
GET /rest/inventories
Content-Type: application/json
```

#### Request body

```graphql
{
  foreignId: String
  first: Int
  skip: Int
  fromDate: Date
  toDate: Date
}
```

#### Response

```json
{
  "id": "string",
  "foreignId": "string",
  "pdf": "string",
  "updatedAt": "string",
  "createdAt": "string"
}
```

## List end inventories

```request
GET /rest/end-inventories
Content-Type: application/json
```

#### Request body

```graphql
{
  foreignId: String
  first: Int
  skip: Int
  fromDate: Date
  toDate: Date
}
```

#### Response

```json
{
  "id": "string",
  "foreignId": "string",
  "pdf": "string",
  "updatedAt": "string",
  "createdAt": "string"
}
```
