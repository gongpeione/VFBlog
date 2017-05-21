const functions = require('firebase-functions');
const admin =  require('firebase-admin');
const express = require('express');

const app = express();

const adminPageRoot = __dirname + '/admin-page/dist/';

app.use('/geeku/static', express.static(adminPageRoot + 'static/'));
app.get('/geeku', (req, res) => {
	res.status(200).sendFile(adminPageRoot + 'index.html');
});

function r (req, res) {
	res.set('Cache-Control', 'public, max-age=300, s-max-age=600');
	res.status(200).send(`Hello here is firebase functions dem0`);
}

exports.admin = functions.https.onRequest(app);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
