const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const nftSchema = new mongoose.Schema({nftImage : {
    type: String,
    required : true,
    maxlength : 500,
    minlength : 50
    },
    nftName : {
      type: String,
      required : true,
      maxlength : 50,
      minlength : 5
      },
nftDescription : {
      type: String,
      required : true,
      maxlength : 500,
      minlength : 50
      },  
      nftPrice : {
        type: Number,
        required : true,
        maxlength : 50,
        minlength : 5
        }, 
        approved : Boolean,
        sold : {
            type : Boolean,
        default : false
        }
    });
    const NFT = mongoose.model('Promotors', nftSchema);
module.exports.NFT = NFT;