const counter = require('../model/counter')
// const connectDB = require('../config/dbconnect');
// connectDB();



const getCounter = async (req, res) => {
    const count = await counter.find();
    res.json(count);
}


const updateCounter = async (req, res) => {
    const cont = await counter.findOne({ _id: "65e41296c300953b46aa0fef" });
    cont.count = req.body.count;
    const result = await cont.save();
    res.json(result);
};



module.exports = { getCounter, updateCounter };


// const count = new counter({ "count": "Abcd" })
// count.save().then(() => console.log("Saved"));