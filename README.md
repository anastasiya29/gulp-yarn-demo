# README #

### What is this repository for?
This repository contains the demo files created in tutorial: [A Guide to Automating Sitecore Development Tasks With Gulp](https://www.codealamodeblog.com/Sitecore/Node-js/automate-with-gulp/)
This tutorial is aimed at Sitecore/.NET developers who are new to the node universe. We will automate the tasks of bundling JavaScript modules and publishing to the Sitecore instance using the following frameworks:
* [Yarn](https://yarnpkg.com/)
* [Gulp](https://gulpjs.com/)

### How do I get set up? ###
* Clone repo as a sibling of Sitecore's /Website folders
* Use npm to install yarn globally

``` bash
$ npm install --global yarn
```

* Use yarn to install required node dependencies
``` bash
$ yarn install
```

This installs gulp and plugins necessary for running rollup in gulp.

### Use gulp tasks
There are several gulp tasks defined in `gulpfile.js`. Run them using
``` bash
$ gulp task-name
```

* **rollup**: task for compiling/bundling all js modules and their 3rd party dependencies from /src into a single file (dist/bundle.js)
* **publish-js**: task for publishing rollup bundle to Sitecore instance
* **watch-js**: task for making gulp watch JavaScript files for changes and automatically publishing to Sitecore instance when changes are detected
* **before-build**: task that runs when Build task is called in Visual Studio
* **clean**: task that runs when Clean task is called in Visual Studio
