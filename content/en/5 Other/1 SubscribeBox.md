---
title: Subscribe Forms [WIP]
description: ''
position: 50
category: Other
---

There are two types of subscription boxes in Storipress.

- `SubscribeBlock`: A email collection block inserted in a page
- `SubscribeBox`: A email collection block injected in the middle of an article

## Subscribe Block

Just a normal block with two extra elements: `SubscribeForm` and `SubscribeEmail`. 

You limitations for standard blocks also apply here.


```vue
<template>
  <Block>
    <SubscribeForm class="flex justify-center">
      <label>
        Email:
        <SubscribeEmail class="border" />
      </label>
      <button type="submit">Submit</button>
    </SubscribeForm>
  </Block>
</template>
```

<alert Type="info">

Remmeber to wrap all content (excluding <u>Block</u>) in `SubscribeBlock`. This is as `SubscribeForm` will try to hide its contents when form action url is not configured.

</alert>

## Subscribe Box

This is a subscribe form within an article

```vue
<template>
  <SubscribeForm class="flex justify-center">
    <label>
      Email:
      <SubscribeEmail class="border" />
    </label>
    <button type="submit">Submit</button>
  </SubscribeForm>
</template>
```

<alert Type="info">

There are only two elements `SubscribeForm` and `SubscribeEmail`. You are free to style them + anything else with css without considering styling props!

</alert>

## Elements

Both `SubscribeForm` and `SubscribeEmail` can import from `@storipress/block` or `@storipress/article`. Follow the below convention:

- `SubscribeBlock`: import from `@storipress/block`
- `SubscribeBox`: import from `@storipress/article`

### SubscribeForm

***Form element of subscription boxes***

It's just a `form` element with our form action. If you want to add a background in block, you will still need to add a `ColorArea`. However, if you are developing a Subscribe Box, you can use css to do it.

<alert>
Storipress will try to hide these elements if our users don't provide a subscription url
</alert>

#### Submit Form

You can add a submit button or call the `submit` method on the `SubscribeForm` 

```vue
<template>
  <SubscribeForm ref="form">
		<!-- content -->
  </SubscribeForm>
</template>

<script>
export default {
  methods: {
    doSubmit() {
      // this will submit form (this is no-op in SDK)
      this.$refs.form.submit()
    }
  }
}
</script>
```

- `props`: None
- `slots`: 
  - default:
    ```vue
    <SubscribeForm>
      <template v-slot="{ message }">
        <div>{{ message }}</div>
      </template>
    </SubscribeForm>
    ```
  - `message`: error message if fail to subscribe

### SubscribeEmail

***The email input in a subscribe form***

This is just a `input` element. In most situations, you will not need to worry about how to handle its content as long as you place it within `SubscribeForm`. <u>The `SubscribeForm` will capture all of the inputs within.</u>

```vue
<template>
  <SubscribeForm>
    <SubscribeEmail />
  </SubscribeForm>
</template>
```
