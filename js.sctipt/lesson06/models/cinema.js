var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var cinemaSchema = new Schema({
    name: String,
    rows: Number,
    cols: Number,
    __v: Number
});

var Cinema = mongoose.model("Cinema", cinemaSchema);
module.exports = Cinema;