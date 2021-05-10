# Agoda Coding Challenge
using nodejs
## Path

### GET
#### path : /

### POST
#### path: /encrypt
* payload: { data: [ { text: string }] }
* response: { data: [ { encrypted: string }] }
#### path: /decrypt
* payload: { data: [ { encrypted: string }] }
* response: { data: [ { text: string }] }

## Script
#### init
npm i
#### run
* node index.js
* default port 3000
