---
title: Relation Tuples
description: Role-based access control (RBAC)
hide_table_of_contents: false
---

:::info

The Role-based access control is still a work in progress.

:::

## Display all properties a user has access to

```request
GET /rest/relation-tuples/user/:userId/access/properties
Content-Type: application/json
```

#### Response

```graphql
[
  { ...property }
]
```

## Give a user access to a property

```request
PUT /rest/relation-tuples/user/:userId/access/property/:propertyId
Content-Type: application/json
```

#### Response

```graphql
{
  ...property
}
```

## Remove a user access to a property

```request
DELETE /rest/relation-tuples/user/:userId/access/property/:propertyId
Content-Type: application/json
```

#### Response

```graphql
{
  ...property
}
```

## Give a user access to many properties

```request
PUT /rest/relation-tuples/user/:userId
Content-Type: application/json
```

#### Request body

```graphql
{
  propertiesId: [String]
}
```

#### Response

```graphql
{
  success: true
}
```

## Remove user access to many properties

```request
DELETE /rest/relation-tuples/user/:userId
Content-Type: application/json
```

#### Response

```graphql
[]
```
