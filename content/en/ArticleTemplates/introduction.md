---
title: Introduction
description: ''
position: 31
category: Article Templates
---

## Checklist when developing

1. **SELECT** `Article Template` when running `yarn bootstrap`.
   ![](/Blocks/ArticleTemplates_1.png)
2. **WRAP** article inside `Article` element.
3. **KEEP** the container margin or width.
4. **DO NOT** style drop caps or block quotes with css. Only use the styleable element's props.
5. **REPLACE** the article content with our provided foo article content.

```vue
<template>
  <ArticleBlock>
    <Header class="mb-8">
      <HeadlineImage class="w-full h-96" />
      <div class="mx-auto w-96">
        <Title :fontSize="32" />
        <Description />
      </div>
    </Header>
    <Content class="mx-auto w-96">
      <!-- Below is the content of demo article, you should not add or remove any element below -->
      <Paragraph :order="0" />
      <Header1 :fontSize="28" underline />
      <Paragraph :order="1" />
      <Blockquote />
      <Paragraph :order="2" />
      <Header2 :fontSize="24" />
      <Paragraph :order="3" />
    </Content>
  </ArticleBlock>
</template>

<script>
import { Template } from '@storipress/article'

export default Template.extend({})
</script>
```

- You will see the above template after you run `yarn bootstrap` and chose `Article Template`.
- You can't add or remove any elements inside `Content`, and you may need to style the element inside `Content` with props.
- If you need to style them with css, see [`Default styles for H1/H2/Paragraph in article content`](/4%20ArticleTemplates/3%20Components#default-styles-for-h1h2paragraph-in-article-content) below.
