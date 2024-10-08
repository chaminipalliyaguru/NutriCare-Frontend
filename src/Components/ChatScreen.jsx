// import React from "react";
// import ChatMessages from "./ChatMessages";
// import ChatHeader from "./Chat/ChatHeader";
// import MessageBox from "./Chat/MessageBox";

// const ChatScreen = ({ role }) => {
//   return (
//     <div className="flex flex-col justify-between w-full h-full mt-24">
//       {/* <ChatHeader /> */}
//       <ChatMessages />
//       <MessageBox />
//     </div>
//   );
// };

// export default ChatScreen;

import React from "react";
import ChatMessages from "./ChatMessages";
import ChatHeader from "./Chat/ChatHeader";
import MessageBox from "./Chat/MessageBox";

const ChatScreen = ({ role }) => {
  return (
    <div className="flex flex-col justify-between w-full h-full mt-24">
      {/* <ChatHeader /> */}
      <ChatMessages />
      <MessageBox />
    </div>
  );
};

export default ChatScreen;