# Reproducible example for cypress-io/cypress\#15101

It seems the bug occurs when a request made with cy.request times out in open mode.

This bugs occurs consistency for me on Windows.

How to run:

1. install needed packages with `npm i`
2. make sure back-end is running using `node site/index.js`
3. open the cypress test runner with `npx cypress open`
4. run bug.spec.js
