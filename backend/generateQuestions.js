import { GoogleGenerativeAI } from "@google/generative-ai";
import { configDotenv } from "dotenv";

configDotenv();

const product_desc = "A shoe store near the old school park";

const apiKey = process.env.API_KEY;

const genAI = new GoogleGenerativeAI(apiKey);

async function run() {
        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        const prompt = `Based on the following product description, create survey questions to gather customer feedback:
                Product: ${product_desc}`;
        const result = await model.generateContent(prompt);

        const responseText = result.response.text(); // Ensure this matches API's response structure
        console.log(responseText);
        if (responseText) {
            const questions = responseText.trim().split('\n').map((q, index) => {
                return {
                    questionId: `Q${index + 1}`,
                    question: q.replace(/^\d+\.\s*/, '') 
                };
            });

            console.log("questions:", questions);
        } else {
            console.error("No response text found in the API response.");
        }
}

run().catch(console.error);