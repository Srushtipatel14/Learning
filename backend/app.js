require("dotenv").config()
const { GoogleGenAI } = require("@google/genai");
const readline = require("readline-sync")

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const history = [];

async function main() {
    const uservalue = readline.question("User Request : ")
    history.push({
        role: "user",
        parts: [{ text: uservalue }]
    })

    const chat = await ai.chats.create({
        model: "gemini-2.5-flash",
        history: history,
    });

    const response=await chat.sendMessage({
        message:uservalue
    })

    console.log("AI Response : ",response.text);

    history.push({
        role: "model",
        parts: [{ text: response.text }]
    })

    await main();
}

main();