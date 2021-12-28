---
title: Navbars
description: ''
position: 26
category: Hero Blocks
---

When you create a Hero Block, you'll need to create a nav bar in a separate file.

<alert Type="info">The nav bar is automatically injected in all pages but the front page. This is the navbar wrapper.</alert>

<alert Type="danger">You can't use `Article` or `DeskSection` inside this component</alert>

#### Example:

```vue
<template>
  <Nav class="py-4">
    <div class="grid grid-cols-3">
      <div class="flex space-x-2">
        <Logo class="w-24" />
        <TextInput
          component="h1"
          kind="hero-title"
          blockType="Hero Title"
          :fontSize="36"
          align="center"
          defaultValue="StoriPress"
        />
      </div>
    </div>
    <SpacingProvider class="py-2" width="80%">
      <DeskList v-slot="{ desks }">
        <!-- desk list -->
      </DeskList>
    </SpacingProvider>
    <Portal>
      <!-- side menu content -->
    </Portal>
  </Nav>
</template>
```

## Different Navbars for Other Pages

As mentioned above, your navbar will be injected in all pages except the front page. Sometimes you may need a different look for your navbar e.g. situations where your front page nav has a fancy animation which isn't suitable for an article.

There are two ways to do this:

1. use `currentPage` prop
2. create a completely different navbar

### Using the `currentPage` prop

Your navbar will receive a prop named currentPage when it is injected to other pages:

```vue
<template>
  <!-- your navbar content -->
</template>

<script>
export default {
  props: {
    currentPage: {
      type: String,
    },
  },
}
</script>
```

You can use this value to decide whenever to display a simpler navbar which is more suitable for an article page. For example:

```vue
<template>
  <div v-if="currentPage">
    This will show in other pages and only hide in front page
  </div>
</template>

<script>
export default {
  props: {
    currentPage: {
      type: String,
    ]
  }
}
</script>
```

Currently its possible values are:

- `article`: you are in an article page
- `desk`: you are in an article list page of a desk
- `author`: you are in an article list page of an author
- `other`: you are in an other page like "About us"

### Using a completely different navbar

If you use the boilerplate `Hero Block` template, the `index.js` looks like this:

```js
// Here is the entry point for your block, if you rename `my-block.vue`, remember to update the path at here
export { default } from './my-block.vue'

// Here is the entry point of navbar. If you rename `navbar.vue`, remember to update here
export { default as Navbar } from './navbar.vue'
```

And the navbar export line:

```js
export { default as Navbar } from './navbar.vue'
```

This line exports the navbar to other pages. You can point it to another file in situations where you need to create a different navbar.

E.g. you can create a file named `article-navbar.vue` and export it like this:

```js
export { default as Navbar } from './article-navbar.vue'
```
