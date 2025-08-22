+++
title = "Style Guide"
description = ""
date = 2023-01-15T09:00:00-07:00
draft = false
version = "1.0.0"
+++

Welcome to our Style Guide! This document is designed to ensure consistency, readability, and maintainability across all your projects. Whether you are a developer, designer, or content creator, adhering to these guidelines will help us create a cohesive and high-quality product.

# Headings
Header tags are what keep your content away from absolute chaos in terms of visual organization. They help your readers understand your writing, they help search engines determine your content.

# Heading 1
## Heading 2
### Heading 3
#### Heading 4
##### Heading 5
##### Heading 6

# Horizontal Rule

--- 

# Text-Level Semantics

In Markdown, text-level semantics refer to the HTML elements and syntax used to convey meaning and structure within a block of text. These elements help to enhance the readability and accessibility of the content by providing context and emphasis.

### Italic  
Surround text with single asterisks (`*`) or underscores (`_`).

```markdown
*Italic text* or _Italic text_
```
*Italic text* or _Italic text_

### Bold  
Surround text with double asterisks (`**`) or underscores (`__`).

```markdown
**Bold text** or __Bold text__
```
**Bold text** or __Bold text__


### Bold and Italic  
Surround text with triple asterisks (`***`) or underscores (`___`).

```markdown
***Bold and Italic text*** or ___Bold and Italic text___
```
***Bold and Italic text*** or ___Bold and Italic text___

### Strikethrough  
Surround text with double tildes (`~~`).

```markdown
~~Strikethrough text~~
```
~~Strikethrough text~~

### Inline Code  
Surround text with backticks (`` ` ``).

```markdown
`Inline code`
```
`Inline code`

### Links  
Use square brackets for the link text and parentheses for the URL.

```markdown
[Link text](https://example.com)
```
[Link text](https://example.com)

# Lists

Markdown supports both **unordered** and **ordered** lists, as well as **nested lists**. Below is a comprehensive style guide.

### 1. Unordered Lists

#### ✅ Syntax

Use a hyphen (`-`), asterisk (`*`), or plus (`+`) followed by a space:

```markdown
- Item one
- Item two
- Item three
```

✅ **Preferred:** Use `-` consistently for simplicity and readability.

```markdown
- Apples
- Oranges
- Bananas
```
- Apples
- Oranges
- Bananas

#### 🚫 Avoid

Inconsistent bullet characters:

```markdown
- Apples
* Oranges
+ Bananas
```

### 2. Ordered Lists

#### ✅ Syntax

Use numbers followed by a period and a space:

```markdown
1. First item
2. Second item
3. Third item
```

**Tip:** Markdown auto-corrects numbering, but it’s best to keep numbers accurate for clarity when editing.

```markdown
1. Wake up
2. Make coffee
3. Start work
```
1. Wake up
2. Make coffee
3. Start work

#### 🚫 Avoid

Skipping numbers or mixing bullets:

```markdown
1. Wake up
3. Make coffee
- Start work
```
### 3. Nested Lists

#### ✅ Syntax

Indent sub-items with **two spaces** (or four if your renderer requires it):

```markdown
- Fruit
  - Apple
  - Banana
- Vegetables
  - Carrot
  - Lettuce
```
- Fruit
  - Apple
  - Banana
- Vegetables
  - Carrot
  - Lettuce

```markdown
1. Morning routine
   - Brush teeth
   - Shower
2. Work tasks
   - Check emails
   - Attend meetings
```
1. Morning routine
   - Brush teeth
   - Shower
2. Work tasks
   - Check emails
   - Attend meetings

#### 🚫 Avoid

Inconsistent indentation:

```markdown
- Fruit
    - Apple
  - Banana
```

### 4. Task Lists (GitHub Flavored Markdown)

#### ✅ Syntax

Use `- [ ]` for incomplete and `- [x]` for completed tasks:

```markdown
- [x] Write proposal
- [ ] Review notes
- [ ] Submit draft
```

```markdown
#### To-Do List

- [x] Finish Markdown guide
- [ ] Upload to repository
- [ ] Share with team
```
#### To-Do List

- [x] Finish Markdown guide
- [ ] Upload to repository
- [ ] Share with team

### 5. Styling Inside Lists

You can combine other Markdown syntax inside list items.

```markdown
- **Bold item** for emphasis
- *Italic item* for subtle emphasis
- `Code item` for commands or code
- [Linked item](https://example.com)
```
- **Bold item** for emphasis
- *Italic item* for subtle emphasis
- `Code item` for commands or code
- [Linked item](https://example.com)

# Definitions

Markdown does not have a native syntax for definitions like HTML’s `<dl>`, `<dt>`, and `<dd>`. However, there are **common conventions and workarounds** used in various Markdown renderers (like GitHub or Markdown processors with plugin support).

### 1. Basic Definition Format (Plain Markdown)

#### ✅ Syntax

Use **bold** or **italic** for the term, followed by a colon and its definition:

```markdown
**Term**: Definition of the term.
```

```markdown
**Markdown**: A lightweight markup language for formatting text.
**GitHub**: A platform for hosting and collaborating on code.
```
**Markdown**: A lightweight markup language for formatting text.

**GitHub**: A platform for hosting and collaborating on code.

✅ This is readable and compatible with all Markdown renderers.

### 2. Bullet List Format for Definitions

Use a bullet point with bolded terms and indented definitions:

```markdown
- **Term**  
  Definition goes here.
```

```markdown
- **Open Source**  
  Software that is freely available and can be modified by anyone.

- **Repository**  
  A storage location for software packages or source code.
```
- **Open Source**  
  Software that is freely available and can be modified by anyone.

- **Repository**  
  A storage location for software packages or source code.

✅ This approach improves visual separation and readability.

# Callouts

Ever find yourself wanting to add extra styling to important information in your posts? Well, now you can with callout cards. Each callout card can include an emoji, any length of text with styles and links, and a custom background color.

> ℹ️
> Create your own platform on the web. Ghost is a powerful app for new-media creators to publish, share, and grow a business around their content.

> ✅
> Create your own platform on the web. Ghost is a powerful app for new-media creators to publish, share, and grow a business around their content.

> ⚠️
> Create your own platform on the web. Ghost is a powerful app for new-media creators to publish, share, and grow a business around their content.

> 🚫
> Create your own platform on the web. Ghost is a powerful app for new-media creators to publish, share, and grow a business around their content.

# Quotes

You can make quotes stand out with two types of blockquote styles that can be applied directly in the editor.

> Ghost is a fully open source, adaptable platform for building and running a modern online publication. We power blogs, magazines and journalists from Zappos to Sky News.

# Details (Toggle)

Markdown doesn't support HTML `<details>` directly — we need to use a shortcode. Toggle elements are useful for FAQs, spoilers, code explanations, or optional sections in documents. To display one include this in your Markdown:

✅ Syntax: wrap up the opening `<detail>` and closing `</detail>` element withing `{{ }}`

```text
  < details summary="See the details" >
    1. Open the **file**  
    2. Edit the configuration  
    3. Save and close
  </details>
```

📝 Example:

{{< details summary="See the details" >}}
  1. Open the **file**  
  2. Edit the configuration  
  3. Save and close
{{< /details >}}

# Code Blocks

Markdown supports inline code and fenced code blocks, allowing you to format and highlight source code clearly. This guide explains how to use them properly with examples in various programming languages.

### 1. Inline code

#### ✅ Syntax

Use backticks (`) to enclose short code snippets within a sentence:

```markdown
Use the `print()` function to display output in Python.
```
Use the `print()` function to display output in Python.

✅ Ideal for short commands, filenames, or variable names.

### 2. Code Blocks

#### ✅ Syntax

Use triple backticks (```) to create a code block. Specify the language for syntax highlighting:

```markdown
    ```python 
        print("Hello, world!")
    ```
```

🧠 Tip: Always specify the language to improve readability.

#### Examples

##### Python
```python
  def greet(name):
    print(f"Hello, {name}!")
```

##### JavaScript
```javascript
  function greet(name) {
    console.log("Hello, " + name + "!");
  }
```

##### HTML
```html
  <!DOCTYPE html>
  <html>
    <head><title>My Page</title></head>
    <body>Hello World!</body>
  </html>
```

##### CSS
```css
  body {
    font-family: sans-serif;
    color: #333;
  }
```

# Tables

Markdown allows you to create simple, readable tables using a pipe (|) and dash (-) syntax. This guide explains the structure, alignment options, and advanced tips.

### 1. Basic Table Structure

#### ✅ Syntax

Use | to separate columns and - to define the header:

```markdown
  | Column 1 | Column 2 | Column 3 |
  |----------|----------|----------|
  | Value 1  | Value 2  | Value 3  |
  | Value 4  | Value 5  | Value 6  |
```

| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Value 1  | Value 2  | Value 3  |
| Value 4  | Value 5  | Value 6  |

### 2. Aligning Text

#### ✅ Syntax

You can control column alignment by placing colons (:) in the separator row:

```markdown
  | Left Align | Center Align | Right Align |
  |:-----------|:------------:|------------:|
  | A          | B            | C           |
```
| Left Align | Center Align | Right Align |
|:-----------|:------------:|------------:|
| A          | B            | C           |
| D          | E            | F           |

### 3. Escaping Pipes (|)

#### ✅ Syntax

```markdown
  | Language | Example             |
  |----------|---------------------|
  | Markdown | A \| B \| C         |
```
| Language | Example             |
|----------|---------------------|
| Markdown | A \| B \| C         |

# Media

### 1. Images

✅ Syntax (Standard Markdown)

```markdown
  ![Alt text](image-url.jpg "Optional Title")
```

📝 Example:

![Alt text](/images/image-example.jpg "Optional Title")

🧠 Tip:
  - Alt text improves accessibility.
  - The optional "Title" appears as a tooltip.

### 2. Image with HTML Attributes

Use HTML figure shortcode to specify size, style, or alignment:

✅ Syntax: wrap up the folowing HTML withing `{{ }}`

```text
  < figure
    src="/images/image-example02.jpg"
    alt="A photograph the Volcan Landscape Tenerife Spain"
    caption="Volcan Landscape Tenerife Spain"
    class="mx-auto max-w-md"
  >
```
{{< figure
    src="/images/image-example02.jpg"
    alt="A photograph the Volcan Landscape Tenerife Spain"
    caption="Volcan Landscape Tenerife Spain"
    class="mx-auto max-w-md"
>}}

### 3. Embedding Youtube Videos

Markdown does not support videos natively, so use a shortcode instead. To display a YouTube video with this URL: `https://www.youtube.com/watch?v=0RKpf3rK57I` include this in your Markdown:

✅ Syntax: wrap up the folowing shortcode withing `{{ }}`

```text
  < youtube 0RKpf3rK57I >
```

{{< youtube 0RKpf3rK57I >}}

### 4. Embedding Youtube with HTML Attributes

✅ Syntax: wrap up the folowing shortcode withing `{{ }}`

```text
  < youtube id=0RKpf3rK57I start=30 end=60 loading=lazy >
```

{{< youtube id=0RKpf3rK57I class="mx-auto max-w-lg h-96" loading=lazy >}}

### 5. Embedding Audio

Markdown doesn't support audio directly — we need to use a shortcode. To display an Audio player with include this in your Markdown:

✅ Syntax: wrap up the folowing shortcode withing `{{ }}`

```text
  < audio src="/audio/audio-example.mp3" >
```

{{< audio src="/audio/audio-example.mp3" >}}