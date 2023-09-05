import mongoose from 'mongoose'

const todoSchema = mongoose.Schema({
    todo: { type: String, required: true },
    isComplete :{type:Boolean,default:false}
})

const todoModel = mongoose.model("todo", todoSchema);
export default todoModel;