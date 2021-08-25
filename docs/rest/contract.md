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

#### Request params

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
  "stringifiedData": "string",
  "pdf": "string",
  "updatedAt": "string",
  "createdAt": "string",
  "property": {
    "id": "string",
    "foreignId": "string"
  },
  "tenants": [
    {
      "id": "string",
      "firstName": "string",
      "lastName": "string",
      "email": "string",
      "address": "string",
      "birthDate": "string",
      "birthPlace": "string"
    }
  ]
}
```
