---
title: Contract
description: Contract endpoints.
hide_table_of_contents: false
---

## List contracts

```request
GET /rest/contracts
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
