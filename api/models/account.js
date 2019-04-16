import mongoose from 'mongoose';
import { strict } from 'assert';

const accountModel = mongoose.Schema({
_id: mongoose.Schema.Types.ObjectId,
accountNumber: Number,
createdOn : String,
owner :  mongoose.Schema.Types.ObjectId, 
type : String , // savings, current
status : String, // draft, active, or dormant
balance : String
});

module.exports = mongoose.model('Account', accountModel)