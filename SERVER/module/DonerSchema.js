// models/Donor.js

import mongoose from'mongoose'

const donorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  bloodGroup: {
    type: String,
    required: true,
  },
  contactInfo:  {
    type: String,
    required: true,
    // validate: {
    //     validator: function(v) {
    //         return /^\d{3}-\d{3}-\d{4}$/.test(v);
    //     },
    //     message: props => `${props.value} is not a valid phone number!`
    // }
}
,
  messagess: {
    type: String,
    required: true,
},

});

const Donor = mongoose.model('Donor', donorSchema);

export default Donor;
