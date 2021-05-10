### Path
#### /index
#####
#### /encrypt
##### request: POST
##### payload: { data: [ { text: string }] }
##### response: { data: [ { encrypted: string }] }
#### /decrypt
##### request: POST
##### payload: { data: [ { encrypted: string }] }
##### response: { data: [ { text: string }] }

### Script
#### run: node index.js
#### default port 3000