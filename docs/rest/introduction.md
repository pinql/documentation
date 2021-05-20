---
title: Introduction
---

<!-- :::info

This guide is still a work in progress. Please refer to the routes [documentation](../docs/rest/property.md).

::: -->

## Environments

#### Development

```url
http://www.api.dev.pinql.com
```

#### Production

```url
https://www.api.pinql.com
```

## Connect with Pinql

1. Make sure Pinql gave you a `development` and a `production` token.
2. Add the token to your `header` request and start by [getting your company infos](../../docs/rest/company.md#read-company-infos):

```json
{
  "Authorization": "not_valid.for_exemple_purpose_ZWNyZXQikjsdklsjflksdlqfj1dzF3RWVxNm1KLkVGV0h1cnlIclpLc3huVjQwdHFiSndUdGVjSWNVemEiLCJpYXQiOjE2MjE1MjExMzJ9.QI-yOiXwQ3fA3Gkqsjdflmkdjscrm_DW6swpY3rR0UXWBQD8"
}
```
