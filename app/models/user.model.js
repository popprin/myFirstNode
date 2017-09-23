import mongoose from 'mongoose';
import crypto from 'crypto';
var Schema = mongoose.Schema;

var UserSchema = new Schema({
       firstName: String,
       lastName: String,
       username: { 
              type: String, 
              unique: true,
              required: 'Username is required',
              trim: true
       },
       email: { type: String, unique: true },
              password: {
              type: String,
              required: 'Password is required',
              validate: [
                     (password) => { return password && password.length>=1; },
                     'Password cannot be empty'
              ]
       },
       created: {
              type: Date,
              default: Date.now
       },
       salt: {
              type: String
       },
       provider: {
              type: String,
               default : 'local'
       },
       providerId: String,
       providerData: {}
}); 