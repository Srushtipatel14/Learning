require("dotenv").config()
const { GoogleGenAI } = require("@google/genai");
const readline = require("readline-sync")


const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });


async function main() {
    const uservalue = readline.question("User Request : ")

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: uservalue,
    });
    console.log("AI Response : ", response.text);
    main();
}
main();