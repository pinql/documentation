---
title: Property
description: Property, Room and Item endpoints.
hide_table_of_contents: false
---

## List properties

```request
GET /rest/properties
Content-Type: application/json
```

#### Request params

```params
foreignId: String
first: Int
skip: Int
```

#### Response

```graphql
[
  { ...property }
]
```

## Create a property

```request
POST /rest/property
Content-Type: application/json
```

#### Request body

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
  area: Float
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

#### Response

```graphql
{
  ...property
}
```

## Get property by id

```request
GET /rest/property/:propertyId
Content-Type: application/json
```

#### Response

```graphql
{
  ...property
}
```

## Publish property by id

```request
PUT /rest/property/:propertyId/publish
Content-Type: application/json
```

#### Response

```graphql
{
  ...property
}
```

## Update property by id

```request
PUT /rest/property/:propertyId
Content-Type: application/json
```

#### Request body

> Same as [create a property](#create-a-property)

<!-- >
> **Caution:** Cannot update rooms and items throught this endpoint. -->

<!-- Use [create a property room](#create-a-property-room) or [create an item in a property room](#create-an-item-in-a-property-room) insted. -->

#### Response

```graphql
{
  ...property
}
```

## Update property images by property id

```request
PUT /rest/property-images/:propertyId
Content-Type: multipart/form-data
```

#### Request body

```sh
curl ENV_URL/rest/property-images/PROPERTY_ID \
    -i -X PUT -H "Content-Type: multipart/form-data" \
    -F "file=@/YOUR/PATH/IMAGE_0.jpg" \
    -F "file=@/YOUR/PATH/IMAGE_1.jpg" \
    -H "Authorization: token"
```

#### Response

```graphql
{
  ...property
}
```

## Unpublish property by id

```request
PUT /rest/property/:propertyId/unpublish
Content-Type: application/json
```

#### Response

```graphql
{
  ...property
}
```

## Create a property room

```request
POST /rest/property/:propertyId/room
Content-Type: application/json
```

#### Request body

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

#### Response

```graphql
{
  ...room
}
```

## List property rooms

```request
GET /rest/property/:propertyId/rooms
Content-Type: application/json
```

#### Request params

```params
first: Int
skip: Int
```

#### Response

```graphql
[
  { ...room }
]
```

## Delete a property room

```request
DELETE /rest/property/:propertyId/room/:roomId
Content-Type: application/json
```

#### Response

```graphql
{
  ...room
}
```

## Create an item in a property room

```request
POST /rest/property/:propertyId/room/:roomId/item
Content-Type: application/json
```

#### Request body

```graphql
{
  title: String!
  itemCondition: String (PERFECT | GOOD | AVERAGE | BAD)
  price: Int
  currency: String
}
```

#### Response

```graphql
{
  ...item
}
```

## Get property room items

```request
GET /rest/property/:propertyId/room/:roomId/items
Content-Type: application/json
```

#### Request params

```params
foreignId: String
first: Int
skip: Int
```

#### Response

```graphql
[
  { ...item }
]
```

## Delete property room item by id

```request
DELETE /rest/property/:propertyId/room/:roomId/item/:itemId
Content-Type: application/json
```

#### Response

```graphql
{
  ...item
}
```
