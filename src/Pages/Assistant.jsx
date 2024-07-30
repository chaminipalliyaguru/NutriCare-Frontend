// import { useState } from "react";
// import ChatScreen from "../Components/ChatScreen";
// import { AppContext } from "../contexts/AppContext";
// import { ChatContext } from "../contexts/chatContext";
// import Instruction from "../Components/Instruction";

// const roles = [
//   {
//     id: 1,
//     name: "General Assistant",
//     prompt: "Answer the questions of the user",
//     message: "Hello user ! I'm your assistant. Please ask me anything. ",
//   },
//   {
//     id: 2,
//     name: "Recipe Health Checker",
//     prompt:
//       "You are Recipe Health Checker that provide delicoius healthy recipies, and answer the users' input meals good or not their illness",
//     message: "Hello user ! I'm Recipe Health Checker. Ask me anything regarding recipies!..",
//   },
//   {
//     id: 3,
//     name: "Allergy Checker",
//     prompt:
//       "You are Allergy CheckBot that check input meal allegic for particular illness",
//     message: "Hello user ! I'm Allergy CheckBot. Ask me anything regarding allegies!..",
//   },
// ];
// const Assistant = () => {
//   const [role, setRole] = useState(roles[0]);
//   const [messages, setMessages] = useState([
//     {
//       role: "system",
//       content: roles[0].message,
//     },
//   ]);

//   return (
//     <AppContext.Provider value={{ role, roles, setRole }}>
//       <ChatContext.Provider value={{ messages, setMessages }}>
//         <div className="flex">
//           <Instruction />
//           <ChatScreen />
//         </div>
//       </ChatContext.Provider>
//     </AppContext.Provider>
//   );
// };

// export default Assistant;
import { useState } from "react";
import ChatScreen from "../Components/ChatScreen";
import { AppContext } from "../contexts/AppContext";
import { ChatContext } from "../contexts/chatContext";
import Instruction from "../Components/Instruction";

const roles = [
  {
    id: 1,
    name: "General Assistant",
    prompt: "Answer the questions of the user",
    message: "Hello user ! I'm your assistant. Please ask me anything. ",
  },
  {
    id: 2,
    name: "RecipeHealth Checker",
    prompt:
      "You are Recipe Health Checker that provide delicoius healthy recipies, and answer the users' input meals good or not their illness",
    message:
      "Hello user ! I'm Recipe Health Checker. Ask me anything regarding recipies!..",
  },
  {
    id: 3,
    name: "Allergy CheckBot",
    prompt:
      "You are Allergy CheckBot that check input meal allegic for particular illness",
    message:
      "Hello user ! I'm Allergy CheckBot. Ask me anything regarding allegies!..",
  },
];
const Assistant = () => {
  const [role, setRole] = useState(roles[0]);
  const [messages, setMessages] = useState([
    {
      role: "system",
      content: roles[0].message,
    },
  ]);

  return (
    <AppContext.Provider value={{ role, roles, setRole }}>
      <ChatContext.Provider value={{ messages, setMessages }}>
        <div className="flex flex-col md:flex-row">
          <Instruction />
          <ChatScreen />
        </div>
      </ChatContext.Provider>
    </AppContext.Provider>
  );
};

export default Assistant;