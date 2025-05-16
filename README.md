![English](README.md) - ![Português](README-pt_BR.md)

![image](https://github.com/user-attachments/assets/71d020cf-f822-4f82-ba68-44ed53f6f1e6)

Fervian is Margarina's website/blog made with HTML, CSS and JS. It has a built in blog system made entirely in vanilla JavaScript that only needs the server to serve the website + post JSON. It uses a simple ``post()`` to retrieve the blog post and there's no indexing of posts on ``index.html`` so this should be done manually.

## Compiling
The website has a build system that supports importing other pages, the pages are merged together when running ``compile.js``.

### Importing pages
Include pages like this:

```<!-- #include file="header.html" title="Fervian ;-)" subtitle="<p>Welcome, internet user.</p>" -->```

`file` is the literal/relative path to the imported file, the rest are arguments explained below. 

### Template arguments
You can use template arguments in a page that will be imported, use this example as reference:
```<h1 id="title"><!-- #arg "title" --></h1>```

## Libraries used
 - jQuery
 - 98.css (modifications are made)

## Imported fonts
 - Pixelated MS Sans Serif

## Blog post template
```
{  
    "title": "Example",
    "htmlContent":"<p>This is an example post.</p>"
}
```

## Goals
- [x] Client-side blog
- [x] Compiler
  - [x] Default value for arguments
- [ ] A cake that is real

## Why this exists?
I love making lightwheight solutions for stuff that do not need that much engieneering. Plus that's perfect for extremely trimmed down hosting solutions like [NeoCities](https://neocities.org) and [Infinityfree](https://infinityfree.com)/their users that are sometimes reluctant in using complex coding in their website.
