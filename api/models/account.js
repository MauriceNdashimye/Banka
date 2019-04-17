import mongoose from 'mongoose';
import { strict } from 'assert';

const accountModel = mongoose.Schema({
_id: mongoose.Schema.Types.ObjectId,
accountNumber: Number,
createdOn : String,
owner : { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
type : String , 
status : String, 
balance : String
});

module.exports = mongoose.model('Account', accountModel)