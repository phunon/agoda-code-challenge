# Agoda Coding Challenge
## Path

### GET
#### /index

### POST
#### path: /encrypt
* payload: { data: [ { text: string }] }
* response: { data: [ { encrypted: string }] }
#### path: /decrypt
* payload: { data: [ { encrypted: string }] }
* response: { data: [ { text: string }] }

## Script
#### run
* node index.js
* default port 3000
