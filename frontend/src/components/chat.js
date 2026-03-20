import { useState } from "react";
import { IoSend } from "react-icons/io5";
import "./chat.css";

function Chat() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMessage = { role: "user", content: input };
        setMessages((prev) => [...prev, userMessage]);

        setInput("");

        try {
            const res = await fetch("http://localhost:8000/sendmsg", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    message: input
                })
            });

            const data = await res.json();

            const aiMessage = {
                role: "assistant",
                content: data.message
            };

            setMessages((prev) => [...prev, aiMessage]);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="chat-wrapper">
            <div className="headername">DSA Instructor</div>
            <div className="chat-container">
                <div className="chat-box">
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`message ${msg.role === "user" ? "user" : "ai"
                                }`}
                        >
                            {msg.content}
                        </div>
                    ))}
                </div>

                <div className="input-box">
                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        placeholder="Ask DSA question..."
                    />
                    <button onClick={sendMessage}>
                        <IoSend size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Chat;