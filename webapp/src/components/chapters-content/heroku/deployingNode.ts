export const deployingNode = {
  title: "Deploying Node.js Apps",
  caption:
    "This article describes how to take an existing Node.js app and deploy it to Heroku",
  content: `---

## Prerequisites

The best practices in this article assume that you have:

* Node.js and npm installed.
* an existing Node.js app.
* a free Heroku account.
* the Heroku CLI.

## Overview
The details of Heroku’s Node.js Support are described in the Heroku Node.js Support article.

Heroku Node.js support will only be applied when the application has a package.json file in the root directory.

## Declare app dependencies

The package.json file defines the dependencies that should be installed with your application. To create a package.json file for your app, run the command npm init in the root directory of your app. It will walk you through creating a package.json file. You can skip any of the prompts by leaving them blank.

\`cd node-example\`

\`npm init\`

To install dependencies, use npm install <pkg>. This will install the package and also add it as a dependency in the package.json file. For example, to install express, you would type npm install express

Make sure that you are not relying on any system-level packages. Missing dependencies in your package.json file will cause problems when you try to deploy to Heroku. To troubleshoot this issue, on your local command line, type rm -rf node_modules; npm install --production and then to try to run your app locally by typing heroku local web. If a dependency is missing from your package.json file, you should see an error that says which module cannot be found.

## Specify the version of node

The version of Node.js that will be used to run your application on Heroku, should also be defined in your package.json file. You should always specify a Node.js version that matches the runtime you’re developing and testing with. To find your version type node --version.

Your package.json file will look something like this:

\`"engines": {\`
\`   "node": "14.x"\`
\` },\`

## Specifying a start script

To determine how to start your app, Heroku first looks for a Procfile. If no Procfile exists for a Node.js app, we will attempt to start a default web process via the start script in your package.json.

The command in a web process type must bind to the port number specified in the PORT environment variable. If it does not, the dyno will not start.

For more information, see Best Practices for Node.js Development and Heroku Node.js Support.

## Build your app and run it locally

Run the npm install command in your local app directory to install the dependencies that you declared in your package.json file.

\`npm install\`

Start your app locally using the heroku local command, which is installed as part of the Heroku CLI.

\`heroku local web\`

Your app should now be running on [http://localhost:5000/.](http://localhost:5000/)
`,
};
