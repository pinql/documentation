---
title: Firms
description: Firms endpoints.
hide_table_of_contents: false
---

## List contracts

```request
GET /rest/firms
Content-Type: application/json
```

#### Request params

```params
foreignId: String
contractId: String
first: Int
skip: Int
```

#### Response

```json
{
  "id": "string",
  "foreignId": "string",
  "createdAt": "string",
  "user": [
    {
      "id": "string",
      "firstName": "string",
      "lastName": "string",
      "email": "string"
    }
  ]
}
```
