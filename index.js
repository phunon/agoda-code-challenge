const express = require('express');
const bodyParser = require('body-parser');

const CryptoJS = require('crypto-js');
const key = 'agoda'; // secret key

const port = 3000;
app = express();

app.listen(port, () => {
  console.log(`Connecting on port! ${port}`);
});

// Home page
app.get('/', (req, res) => {
  res.send('Web encryption');
});

// Encrypt route
app.post('/encrypt', bodyParser.json(), (req, res) => {
  try {
    const payload = req.body.data;
    let result = [];
    payload.forEach((item) => {
      // check correct payload
      if (item.text) {
        result.push({
          encrypted: CryptoJS.AES.encrypt(item.text, key).toString(),
        });
      } else {
        result.push({ encrypted: 'not found!' });
      }
    });

    encrypt = { data: result };
    res.status(200);
    res.json(encrypt);
  } catch (e) {
    res.status(402);
    res.json({ message: 'Error', e });
  }
});

// Decrypt route
app.post('/decrypt', bodyParser.json(), (req, res) => {
  try {
    const payload = req.body.data;
    let result = [];
    payload.forEach((item) => {
      // check correct payload
      if (item.encrypted) {

        // decrypt
        const text = CryptoJS.AES.decrypt(item.encrypted, key).toString(
          CryptoJS.enc.Utf8
        );
        result.push({
          text,
        });
      } else {
        result.push({ text: 'not found!' });
      }
    });

    decrypt = { data: result };
    res.status(200);
    res.json(decrypt);
  } catch (e) {
    res.status(402);
    res.json({ message: 'Error: ' + e });
  }
});

// Check unavailable path
app.use((req, res, next) => {
  var err = new Error('Path not found!');
  err.status = 404;
  next(err);
});
