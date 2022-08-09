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

```params
foreignId: String
first: Int
skip: Int
fromDate: Date
toDate: Date
getAllStatus: Boolean @default(value: false)
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
