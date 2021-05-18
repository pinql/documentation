---
title: Inventory
description: Inventory endpoints.
hide_table_of_contents: false
---

## **GET** /inventories

List all company inventories

```graphql
{
  foreignId: String
  first: Int
  skip: Int
  fromDate: Date
  toDate: Date
}
```

## **GET** /end-inventories

List all company end inventories

```graphql
{
  foreignId: String
  first: Int
  skip: Int
  fromDate: Date
  toDate: Date
}
```
