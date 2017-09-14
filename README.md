# webpack-server-typescript-template
Webpack template with server (HMR) and typescript loader. 

## Before work: 

1) Install *webpack 2* and *webpack-dev-server* **globally** (for use webpack-dev-server from CLI):

    `npm install webpack -g`
  
    `npm install webpack-dev-server -g`
  
2) Install project dependencies: 
  
    `npm install`

## Available npm scripts:
  
  Start webpack-dev-server with watching over *.ts files, hot module replacements and source maps
  (allow debugging typescript in browser):
  
  `npm run dev`
  
  Concatenate modules and compress (for production): 
  
  `npm run build`
  
 ## Additional:
  
  [webpack 2 docs](https://webpack.js.org/configuration/)
