const express = require('express');
const Profile = require('../../models/Profile');
const router = express.Router();


router.post('/add-concerns', async (req, res) => {
    console.log(req.body.concerns);
    try {
        const profile = await Profile.findOne({ user: req.body.uid });
        profile.concerns = req.body.concerns;
        await profile.save();
        return res.json(profile);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Not Doing');
    }
});

router.post('/edit-profile', async (req, res) => {
    try {
        const { name, email, gender, phone_no, age, concerns, uid } = req.body;
        const profile = await Profile.findOne({ user: uid });
        profile.name = name;
        profile.email = email;
        profile.gender = gender;
        profile.phone_no = phone_no;
        profile.age = age;
        profile.concerns = concerns;
        await profile.save();
        return res.json(profile);
    } catch (err) {
        console.log(err.message);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
