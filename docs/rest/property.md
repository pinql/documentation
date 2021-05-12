---
title: Property
description: Property, Room and Item endpoints.
hide_table_of_contents: false
---

## **GET** /properties

List all company property

```graphql
{
  foreignId: String
  first: Int
  skip: Int
}
```

## **POST** /property

Create a property

```graphql
{
  foreignId: String
  rooms: [String] | [Room]
  gpsCoordinateX: Float
  gpsCoordinateY: Float
  availabilityDate: DateTime
  addressComplement: String
  numberOfBathrooms: Int
  numberOfToilets: Int
  numberOfRooms: Int
  numberOfBedrooms: Int
  minimumDurationMounths: Int
  guarantee: Float
  rent: Float
  area: Int
  phone: String
  typeOfProperty: String (APPARTEMENT | HOUSE | VILLA) @default(value: APPARTEMENT)
  comments: String
  address: String
  city: String
  country: String
  street: String
  postcode: String
  houseNumber: String
  description: String
  floor: Int
  minDuration: Int
  maxDuration: Int
  title: String
  listOfAmenities: [String]
  locationType: String (FURNITURED | EMPTY) @default(value: EMPTY)
  propertyStatus: String (OCCUPIED | UNOCCUPIED) @default(value: UNOCCUPIED)
  expenses: Float
  published: Boolean @default(value: true)
  periodicity: String (MOUNTH | YEAR)
}
```

## **PUT** /property/:propertyId

Update property by id

```graphql
// idem POST /property
// cannot update rooms throw this route
```

## **GET** /property/:propertyId

Get property by id

```graphql
{}
```

## **PUT** /property/:propertyId/unpublish

Publish property by id

```graphql
{}
```

## **PUT** /property/:propertyId/publish

Unpublish property by id

```graphql
{}
```

## **POST** /property/:propertyId/room

Create a property room

```graphql
{
  foreignId: String
  title: String!
  glogbalCondition: String (PERFECT | GOOD | AVERAGE | BAD) @default(value: PERFECT)
  floorCondition: String (PERFECT | GOOD | AVERAGE | BAD) @default(value: PERFECT)
  wallslCondition: String (PERFECT | GOOD | AVERAGE | BAD) @default(value: PERFECT)
  roofsCondition: String (PERFECT | GOOD | AVERAGE | BAD) @default(value: PERFECT)
  comments: String
  items: [Item] @relation(name: "ItemsByRoom", link: TABLE)
  surface: Float
}
```

## **GET** /property/:propertyId/rooms

List property rooms

```graphql
{}
```

## **DELETE** /property/:propertyId/room/:roomId

Delete a property room

```graphql
{}
```

## **POST** /property/:propertyId/room/:roomId/item

Create an item in a property room

```graphql
{
  title: String!
  itemCondition: String (PERFECT | GOOD | AVERAGE | BAD)
  price: Int
  currency: String
}
```

## **GET** /property/:propertyId/room/:roomId/items

Create an item in a property room

```graphql
{
  foreignId: String
  first: Int
  skip: Int
}
```

## **DELETE** /property/:propertyId/room/:roomId/item/:itemId

Delete an item in a property room

```graphql
{}
```
