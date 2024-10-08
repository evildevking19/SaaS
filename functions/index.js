const admin = require('firebase-admin');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
admin.initializeApp();
const config = require('./config.json');
const functions = require('firebase-functions');

let fireactjsSaasFunctions =  require('./lib')({config: config, admin: admin, functions: functions});

exports.fireactjsSaas = fireactjsSaasFunctions;