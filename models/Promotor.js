const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const promotorSchema = new mongoose.Schema({
    name: {
        type: String,
        required : true,
        maxlength : 200,
        minlength : 5
        },
        email: {
            type: String, 
            required : true,
            maxlength : 255,
            minlength : 5,
            unique : true
            },
            password: {
                type: String,
                required : true,
                maxlength : 1024,
                minlength : 5
                },
                walletAddress: {
                  type: String,
                  required : true,
                  maxlength : 500,
                  minlength : 50
                  },
                      totalSoldnfts : {
                        type: Number,
                        required : true,
                        maxlength : 500,
                        minlength : 50
                        },
                        primarySaleCommission: {
                            type: String,
                            required : true,
                            maxlength : 50,
                            minlength : 5
                            },
                            secondarySaleCommission: {
                                type: String,
                                required : true,
                                maxlength : 50,
                                minlength : 5
                                },
                        User : {   
                            type: Schema.Types.ObjectId,
                            ref: "User"
                        },
                        nft : {   
                          type: Schema.Types.ObjectId,
                          ref: "NFT"
                      },
                      launchDate :Date,
                      digital : Boolean,

                    });
    const Promotor = mongoose.model('Promotors', promotorSchema);

   
  
      module.exports.Promotor = Promotor;
