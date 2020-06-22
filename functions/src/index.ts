import * as functions from 'firebase-functions';

import * as admin from 'firebase-admin';
//import * as firebaseHelper from 'firebase-functions-helper';
import * as express from 'express';
import * as bodyParser from "body-parser";

import * as cors from 'cors'

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

admin.initializeApp(functions.config().firebase);

const app = express();
const main = express();

app.use(cors({ origin: true }));
main.use(cors({ origin: true }));
main.use('/api/v1', app);
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({ extended: false }));

const db = admin.database()

app.post('/checkLatestBidder', async (req, res) => {
    try {
        const itemKey = req.body['itemKey']
        const uid = req.body['uid']

        const ref = db.ref("items/" + itemKey + "/bidders")
        const query = ref.orderByKey().limitToLast(1)

        await query.once("value",successCallback)

        function successCallback(snap:any) {

            const got_uid = snap.child('userid').val()
            if(uid !== got_uid) {
                //response is yes;
                //update the database
                res.status(200).send("he or she becomes latest bidder")
            }
            else {
                //response is no
                //don't update database
                res.status(200).send("he or she is already latest bidder" + got_uid)
            }
        }


    } catch (error) {
        res.status(400).send(`Sorry! Some error came at our side. Please try again`)
    }
})

export const webApi = functions.https.onRequest(main);
