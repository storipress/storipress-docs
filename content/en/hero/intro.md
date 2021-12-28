---
title: Introduction
description: ''
position: 21
category: Hero Blocks
---

<alert type="danger"> Before developing Hero Blocks, **it is highly recommended you read the Hero Block docs for `Portal`, `PageListProvider` & `SpacingProvider` first**.</alert>

Hero blocks have special tools which, in most cases, must be used.

## Checklist when developing

1. **ENSURE** you choose `Hero Block` when running `yarn bootstrap`
   ![](/HeroBlocks/Introduction_1.png)
2. **WRAP** block inside `HeroBlock`
3. **SPLIT** the nav bar into `navbar.vue`
4. **REMEMBER TO ADD** a `SpacingProvider`

## Notes for creating the Menus in HeroBlocks

- The background of the menu should use a `colorarea` so non-technical users can customise the bg colour of the menu
- Insert social links using the `siteprovider` component
