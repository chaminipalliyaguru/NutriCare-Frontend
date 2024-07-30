// import { useContext, useState } from "react";
// import { ChatContext } from "../contexts/chatContext";
// import { AppContext } from "../contexts/AppContext";

// const Instruction = () => {
//   const { setMessages } = useContext(ChatContext);
//   const { roles, setRole, role } = useContext(AppContext);

//   const roleHandler = (role) => {
//     setRole(role);
//     setMessages([
//       {
//         role: "system",
//         content: role.prompt,
//       },
//     ]);
//   };

//   const clearChatHanlder = () => {
//     setMessages([
//       {
//         role: "system",
//         content: role.message,
//       },
//     ]);
//   };

//   return (
//     <div className="w-full mt-24 bg-gray-100 border-r border-gray-300 md:w-1/4">
//       <div className="p-4">
//         <h1 className="mb-4 text-lg font-semibold border-b border-gray-300">
//           Roles
//         </h1>

//         <ul className="mt-12">
//           {roles.map((role) => (
//             <li
//               key={role.id}
//               className="flex items-center justify-between mb-4"
//             >
//               <h2 className="mb-2 font-semibold text-md mt-2">{role.name}</h2>
//               <button
//                 className="text-blue-500 underline rounded-md "
//                 onClick={roleHandler.bind(null, role)}
//               >
//                 Switch
//               </button>
//             </li>
//           ))}
//         </ul>
//         <button onClick={clearChatHanlder} className="text-red-500 mt-16">
//           Clear Chat
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Instruction;

import { useContext, useState } from "react";
import { ChatContext } from "../contexts/chatContext";
import { AppContext } from "../contexts/AppContext";

const Instruction = () => {
  const { setMessages } = useContext(ChatContext);
  const [toggle, setToggle] = useState(false);
  const { roles, setRole, role } = useContext(AppContext);

  const roleHandler = (role) => {
    setRole(role);
    setToggle(false);
    setMessages([
      {
        role: "system",
        content: role.prompt,
      },
    ]);
  };

  const toggleRoleHandler = () => {
    setToggle((prevState) => !prevState);
  };

  const clearChatHanlder = () => {
    setMessages([
      {
        role: "system",
        content: role.message,
      },
    ]);
  };

  return (
    <div className="w-full bg-gray-100 border-r border-gray-300 md:ml-48 md:mt-24 md:w-1/4">
      <div className="md:p-4">
        <div className="flex items-center justify-between m-5 md:m-0 md:block">
          <h1 className="text-lg font-semibold border-b border-gray-300 md:mb-4">
            Roles
          </h1>
          <button
            className="p-2 text-white bg-green-400 rounded-md md:hidden"
            onClick={toggleRoleHandler}
          >
            Select Role
          </button>
          <button onClick={clearChatHanlder} className="text-red-500 md:hidden">
            Clear
          </button>
        </div>

        {toggle && (
          <>
            <div className="absolute w-full bg-gray-100 h-5/6 opacity-90"></div>
            <ul className="absolute flex flex-wrap mt-12 top-1/4 md:hidden">
              {roles.map((role) => (
                <div className="flex items-center justify-between w-full p-5 m-2 mx-10 bg-green-500 rounded-xl">
                  <li
                    key={role.id}
                    className="flex items-center justify-between "
                  >
                    <h2 className="font-semibold text-white text-md">
                      {role.name}
                    </h2>
                  </li>
                  <button
                    className="p-3 text-white underline no-underline bg-green-900 rounded-md"
                    onClick={roleHandler.bind(null, role)}
                  >
                    Select
                  </button>
                </div>
              ))}
            </ul>
          </>
        )}

        <ul className="hidden mt-12 md:block">
          {roles.map((role) => (
            <li
              key={role.id}
              className="flex items-center justify-between mb-4"
            >
              <h2 className="mt-2 mb-2 font-semibold text-md">{role.name}</h2>
              <button
                className="text-blue-500 underline rounded-md "
                onClick={roleHandler.bind(null, role)}
              >
                Switch
              </button>
            </li>
          ))}
        </ul>
        <button
          onClick={clearChatHanlder}
          className="hidden text-red-500 md:block md:mt-16"
        >
          Clear Chat
        </button>
      </div>
    </div>
  );
};

export default Instruction;
