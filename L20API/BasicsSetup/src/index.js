const express = require('express');
const app = express();
require('./db/connection.js');
const port = process.env.PORT || 3000;

const mentor = require('./models/mentor');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// //post request
// app.post('/api/mentor', async (req, res) => {
//     try {
//         const { name, email, phone, address } = req.body;
//         const mentor = await Mentor.create({ name, email, phone, address });
//         res.status(201).send(mentor);
//     } catch (error) {
//         res.status(400).send(error);
//     }
// });





//Post Request 
app.post('/api/mentors', async (req, res) => {
    try {
        const mentor = await mentor.create(req.body);
        const createdMentor = await mentor.save();
        res.status(201).send(createdMentor);
    } catch (error) {
        res.status(400).send(error);
    }
});


// Get Request
app.get('/api/mentors/:id', async (req, res) => {
    try {
        const mentorData = await mentor.find({});
        res.send(mentorData);
    } catch (error) {
        res.status(500).send(error);
    }
});

//patch request 
app.patch('/api/mentors/:id', async (req, res) => {
    try {
        const mentor = await mentor.findByIdAndUpdate(req.params.id,
            req.body,
            { new: true });
        res.send(mentor);
    } catch (error) {
        res.status(400).send(error);
    }
});


// Delete Request
app.delete('/api/mentors/:id', async (req, res) => {
    try {
        const mentor = await mentor.findByIdAndDelete(req.params.id);
        if (!mentor) {
            return res.status(404).send();
        }
        res.send(mentor);
    } catch (error) {
        res.status(500).send(error);
    }
});


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
