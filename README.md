# Translateer
Better than Google Translate when it comes to translating my homework... and faster

## Features

- Scans your document
- Translates your document (duh)

## Development Steps

- `git clone https://github.com/tbaumer22/translateer.git`
- `npm install`
    
### Editing Code

This project includes node dependencies that are not normally compatible with direct web application development. As a way around this, I implemented Browserify, a simple tool to "compile" all dependencies into one JS file to run on the web.

To take advantage of this, any changes you make to the project need to be in the index.js file. After you finish your edits, type:
```browserfiy index.js -o bundle.js```

This converts the previous file into a JS file to run on the site.

### Submitting Changes

Any edits to improve the speed, efficiency, or add new features are happily welcomed. Please make a pull-request into Master if you'd like to do so.


(c) 2018 Tate Berenbaum

Special thanks to Marnix Bouhuis and Oscar Davies
