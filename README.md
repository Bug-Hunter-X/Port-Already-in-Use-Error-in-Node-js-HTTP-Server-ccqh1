# Node.js Port Already in Use Error

This repository demonstrates a common error in Node.js when creating an HTTP server: the `EADDRINUSE` error, which occurs when the specified port is already in use.  The `bug.js` file contains the problematic code. The solution, avoiding the error, is provided in `bugSolution.js`.

## How to Reproduce the Bug

1. Run `bug.js`.
2. Before stopping the server, try running it again. You will receive the `EADDRINUSE` error.

## Solution

The `bugSolution.js` file shows a robust approach to handle the port-in-use scenario. It attempts to start the server on the specified port; if it fails due to the port being in use, it gracefully tries a series of alternate ports before giving up and logging an error. 