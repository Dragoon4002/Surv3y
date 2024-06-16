import mongoose from "mongoose";


const answerSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    questionId: { type: String, required: true },
    option: { type: String, required: true }
});


export default mongoose.model('answers',answerSchema);