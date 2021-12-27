---
title: CSS Styleguide
description: ''
position: 4
category: Blocks
---

## Use Tailwind CSS classes

```vue
<template>
  <div class="mb-5 w-full">
    <!-- content... -->
  </div>
</template>
```

<alert type="success"> This is correct</alert>

```vue
<template>
  <div class="wrapper">
    <!-- content... -->
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  width: full;
  margin-bottom: 1.25rem;
}
</style>
```

<alert type="danger"> This will make your code hard to read</alert>

## Avoid using `@apply` in `<style>`

```vue
<template>
  <Desk class="border-r border-red-400 pr-3" />
</template>
```

<alert type="success"> This is correct</alert>

```vue
<template>
  <Desk class="desk" />
</template>

<style lang="scss" scoped>
.desk {
  @apply border-r border-red-400 pr-3;
}
</style>
```

<alert type="danger"> This will make your code hard to read</alert>

## Do not add outer L/R margin or padding

```vue
<template>
  <Block class="border-t border-black">
    <!-- content... -->
  </Block>
</template>
```

<alert type="success"> This is correct</alert>

```vue
<template>
  <Block class="border-t border-black p-5">
    <!-- content... -->
  </Block>
</template>
```

<alert type="danger"> In development, blocks must be full width as in production, they are wrapped within the restrictions of the `SpacingProvider`. Adding extra padding/margin will make your block look weird.</alert>

## Apply `aspect-ratio` + `object-cover` to images

<alert Type="info"> Storipress comes with [@tailwindcss/aspect-ratio](https://github.com/tailwindlabs/tailwindcss-aspect-ratio). Use it directly in your blocks.
</alert>

```vue
<template>
  <div class="aspect-w-16 aspect-h-9 relative">
    <ResponsiveImage class="object-cover" :src="#" />
  </div>
</template>
```

<alert type="success"> This is correct</alert>

```vue
<template>
  <div class="relative">
    <ResponsiveImage :src="#" />
  </div>
</template>
```

<alert type="danger"> When a user uploads a photo with a weird aspect ratio, this will break your block's intended look</alert>
