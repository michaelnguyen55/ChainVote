const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const blockChainSchema = new Schema ({
  timestamp: {type: Date, default: Date.now, required: true},
  voter: {type: String, require: true},
  vote: {type: String, require: true},
  previousHash: {type: String},
  hash: {type: String}
});

const BlockChain = mongoose.model("BlockChain", blockChainSchema);

module.exports = BlockChain;
//delete
// db.VoteChain.insert({"index": "1", "data":"yes","previousHash": "33388", "hash": "333"});
