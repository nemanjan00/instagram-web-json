# instagram-web-json

Parser for JSON data from instagram web.

## Table of contents

<!-- vim-markdown-toc GFM -->

* [Installation](#installation)
* [Usage](#usage)

<!-- vim-markdown-toc -->

## Installation

```bash
npm install instagram-web-json --save
```

## Usage

```node
const api = require("instagram-web-json");

api.getUser("dzimiks").then((data) => {
	console.log(data);
});
```
