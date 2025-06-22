import mongoose from 'mongoose'

const UserSchema = new mongoose.Schema({
    name : {type:String, requires: true},
    email : {type:String, requires: true,unique: ture},
    password : {type:String, requires: true},
});

const User = mongoose.model('User', UserSchema);
export default User; 