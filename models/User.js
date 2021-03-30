const mongoose = require('mongoose');
var Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
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
                    promotor : {   
                        type: Schema.Types.ObjectId,
                        ref: "Promotor"
                    },
                    nft : {   
                      type: Schema.Types.ObjectId,
                      ref: "NFT"
                  },
                  launchDate :Date,
                  digital : Boolean,
                  isArtist : Boolean
    });
    userSchema.methods.generateAuthToken =  function(){
        const token =  jwt.sign({_id: this._id, isArtist: this.isArtist}, config.get('JwtPrivateKey'));
        return token;
    }
    const User = mongoose.model('User', userSchema);

  

      module.exports.User = User;
      // module.exports.validate = validateUser;