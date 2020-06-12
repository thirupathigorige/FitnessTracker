var mongoose=require("mongoose");

var UserSchema=new mongoose.Schema({
    FirstName:{type: String},
    LastName:{type: String},
    Email:{type: String},
    Phone: {type: String},
    PassWord:{type: String}
});
var FriendsSchema=new mongoose.Schema({
    From:{type: String},
    To:{type: String},
    status:{type: String},
    FromFirstName:{type: String},
    FromLastName:{type: String},
    FromEmail:{type: String},
    FromPhone: {type: String},
    ToFirstName:{type: String},
    ToLastName:{type: String},
    ToEmail:{type: String},
    ToPhone: {type: String},
});
var uploads=new mongoose.Schema({
    From:{type: String},
    uploaderName:{type: String},
    Title:{type: String},
    Desc:{type: String},
    File:{type: String},
    Time:{type: String},
});
var User=mongoose.model("User", UserSchema);
var Friends=mongoose.model("Friends", FriendsSchema);
var Uploads=mongoose.model("Uploads", uploads);

module.exports={User, Friends, Uploads};