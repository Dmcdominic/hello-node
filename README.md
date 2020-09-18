# Getting Started

## Visual Studio Code

Visual Studio Code is a free, open source code editor that can be used to develop in node and Unity.  
VS Code is lightweight and it has many great extensions for syntax highlighting and code completion.  
[Download it from here](https://code.visualstudio.com/)

When you work on a project make sure you open the containing folder, not the individual files!

## Markdown

This document is written in Markdown, a popular syntax that simplifies writing plain html documents.  
Markdown is commonly used for documentation on github.  
To Visualize this document properly in VS Code, right click on it and "open preview"

If you want to write your own readme files check the [basic syntax](https://www.markdownguide.org/basic-syntax/)

## Server and Client

Let's make sure we understand the concept of server and client first:
[Server-client model](https://en.wikipedia.org/wiki/Client%E2%80%93server_model)


## Node.js

Node.js is an open source environment for server-side Javascript applications.  
Node can generate dynamic page content, create and modify files on the server, and modify data in your database.  
Node is cross-platform meaning it can be used beyont web development to create applications that work on all operating systems.  
Node allows developers to use the same language for both client and server logic (unlike older languages like PHP).  
Node has a thriving ecosystem, and a wealth of libraries available through npm.  

Install node.js from [nodejs.org](https://nodejs.org/en/)

## npm

npm (Node Package Manager) is a command-line utility and a repository to install open-source node packages (modules, libraries, add-ons).
npm is included in Node.js.  
npm automatically manages dependencies, the modules that a project relies on to function properly. If package A requires package B to function, NPM will install the right version automatically.

Open a terminal at this folder and launch this example through node:  
`node hellonode.js`

If you are using Visual Studio Code you can open a terminal window in the editor. **Terminal > New Terminal**

Open a browser an point it to:  
`http://127.0.0.1:3000/` or `http://localhost:3000/`

## Working with node

Note that the server keeps running. If you make changes you won't see them unless you restart the process.  

If you want to stop the server and go back to the terminal press **CTRL+C**

Let's try to use npm to install a utility called nodemon. Nodemon restarts the server every time the file changes. Exit the process and type:  
`npm install -g nodemon`

If it gives you a "Missing write access" error try this:  
`sudo chown -R $USER /usr/local/lib/node_modules`

Now instead of using the node command use:  
`nodemon hellonode.js`

If it gives you strange errors you may have multiple server instances running. You can shut them down with
`killall node`

[Read more about node here](https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/Introduction)  
You'll see different programming patterns to do the same things

[Visual Studio Code and Node tutorial](https://code.visualstudio.com/docs/nodejs/nodejs-tutorial)
