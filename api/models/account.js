import mongoose from 'mongoose';

const accountModel = mongoose.Schema({
 _id : Integer,
accountNumber: Integer,
createdOn : DateTime,
owner : Integer, //user id
type : String , // savings, current
status : String, // draft, active, or dormant
balance : Float
});

module.exports = mongoose.model('Account', accountModel)