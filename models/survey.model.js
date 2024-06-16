import mongoose from "mongoose";

const optionSchema = new Schema({
    options: {type:String, required: true}
})

const questionSchema = new Schema({
    questionId: { type: String, required: true },
    question: { type: String, required: true },
    options: {type: [optionSchema], required: true}
});

const SurveySchema = mongoose.Schema({
    surveyName: {
        type: String,
        required: true,
    },
    surveyId: {
        type: String,
        required: true,
    },
    creatorName: {
        type:String,
        required: true
    },
    questionSet: {
        type:[questionSchema],
        required: true
    },
    pointsPerQuestion: {
        type:Number,
        required: true
    },
    lastDate: {
        type: Date,//new Date('1999-12-31') format
        required: false,
    }
},{timestamps: true});

export default mongoose.model('survey',SurveySchema);