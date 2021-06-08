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
  "createdAt": "string",
  "formerOccupantName": "string",
  "mailbox": "boolean",
  "mailboxCondition": "string",
  "key": "boolean",
  "keyNumber": "int",
  "badge": "boolean",
  "badgeNumber": "int",
  "parking": "boolean",
  "parkings": {
    "id": "string",
    "number": "string",
    "direction": "string"
  },
  "meters": {
    "id": "string",
    "type": "string",
    "ref": "string",
    "value1": "string",
    "value2": "string"
  },
  "property": {
    "id": "string",
    "foreignId": "string"
  },
  "contract": {
    "id": "string",
    "foreignId": "string"
  },
  "rooms": {
    "id": "string",
    "title": "string",
    "glogbalCondition": "string",
    "floorCondition": "string",
    "wallslCondition": "string",
    "roofsCondition": "string",
    "comments": "string"
  }
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
  "createdAt": "string",
  "meters": {
    "id": "string",
    "type": "string",
    "ref": "string",
    "value1": "string",
    "value2": "string"
  },
  "property": {
    "id": "string",
    "foreignId": "string"
  },
  "contract": {
    "id": "string",
    "foreignId": "string"
  },
  "tenants": {
    "id": "string",
    "foreignId": "string"
  },
  "rooms": {
    "id": "string",
    "title": "string",
    "newGlogbalCondition": "string",
    "newFloorCondition": "string",
    "newWallslCondition": "string",
    "newRoofsCondition": "string",
    "comments": "string"
  }
```
