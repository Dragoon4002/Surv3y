import answerModel from "../models/answer.model";
import mongoose from "mongoose";
require('dotenv').config();

const connectDb = mongoose.connect(process.env.MONGO_CONNECT_STRING);

async function main(){
    try {
        await connectDb();
        console.log("Database connected successfully"); 

    }finally{
        console.log("Hogeya Kam😊")
    }
    await connectDb();

    try {
        // Example: Creating a new survey document
        const newSurvey = await answerModel.create({
            userId: uId,
            questionId: qId,
            option: uOption
        });
        const surveys = await answerModel.find().exec();
        console.log("All surveys:", surveys);

        // Example: Updating a survey
        // const surveyToUpdate = await surveyModel.findOne({ createdBy: "John Doe" }).exec();
        // if (surveyToUpdate) {
        //     surveyToUpdate.question = "What is your favorite programming language? (Updated)";
        //     const updatedSurvey = await surveyToUpdate.save();
        //     console.log("Updated survey:", updatedSurvey);
        // }

            // Example: Deleting a survey
    // const surveyToDelete = await surveyModel.findOneAndDelete({ createdBy: "John Doe" }).exec();
    // console.log("Deleted survey:", surveyToDelete);

    } catch (error) {
        console.error("Error performing database operation:", error.message);
    } finally {
        mongoose.disconnect(); // Close the connection when done
        console.log("Database connection closed");
    }
};
main().catch(console.error);