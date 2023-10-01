import mongoose from 'mongoose';

const { Schema } = mongoose;

const activitySchema = new Schema({
    activity: {
        type: String,
        required: true 
    },
    completed: {
        type: Boolean,
        default: false 
    },
    user:  {
        type: String,
        required: true 
    }
});

module.exports = mongoose.model("activity", activitySchema); 
