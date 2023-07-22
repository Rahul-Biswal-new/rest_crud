import express from 'express';
const router = express.Router();
import {v4 as uuidv4 } from 'uuid';
uuidv4();

const users = [
    {
        "firstname": "john",
        "lastname": "doe",
        "age": 25
    },
    {
        "firstname": "john",
        "lastname": "doe",
        "age": 24
    }
]

router.route('/')
.get((req,res)=> {
    console.log(users);
    res.send(users);
    // console.log(uuidv4());
})
.post((req,res)=> {
    // const {firstname , lastname} = req.body;
    const user = req.body;
    const userID = uuidv4()

    // const userWithId = {...user, id: userID}

    users.push({...user, id: userID})

    res.send(userWithId)
})

export default router;