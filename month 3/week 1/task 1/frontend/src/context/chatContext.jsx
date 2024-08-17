import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const ChatContext = createContext();

export const ChatProvider = ({children}) =>{

    const [messages, setMessages] = useState([]);
    const [prompt, setPrompt] = useState("");
    const [newRequestLoading, setNewRequestLoading] = useState(false);

    async function fetchResponse(){
        if(prompt==="")
            return alert("write prompt");

        setNewRequestLoading(true);

        setPrompt("");

        try {
            const response = await axios({
                url:'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCDmmeECCRnpXHH3X06QOzpjaomJGTTcbk',
                method:"post",
                data:{
                    contents:[{parts:[{text:prompt}]}],
                },
            });

            const message = {
                question:prompt,
                answer: response["data"]["candidates"][0]["content"]["parts"][0]["text"],
            }

            setMessages((prev) =>[...prev, message ])
            setNewRequestLoading(false);
        } catch (error) {
            alert("something went wrong");
            console.log("Error:" + error);
            setNewRequestLoading(false);
        }
    }

    const [chats, setChats] = useState([]);
    async function fetchChats(){
        try {
            const {data} = axios.get('http://localhost:5000/api/chat/all');

            setChats(data);
        } catch (error) {
            console.log(error)
        }
    }

    const [createLod, setCreateLod] = useState(false);

    async function createChat(){
        setCreateLod(true);

        try {
            const data = await axios.post("http://localhost:5000/api/chat/new");

            fetchChats();
            setCreateLod(false);
        } catch (error) {
            toast.error("Something went wrong");
        }
    }
    useEffect(()=>{
       fetchChats() 
    }, []);

    return <ChatContext.Provider value={{fetchResponse, messages, prompt, setPrompt, newRequestLoading, setChats, createChat, createLod}}>{children}</ChatContext.Provider>
};

export const ChatData = () => useContext(ChatContext);

export default ChatProvider;