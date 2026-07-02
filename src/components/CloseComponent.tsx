import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { useWindows } from "../context/WindowsContextProvider";
import type { OpenApp } from "../context/WindowsContext";



export function CloseComponent() {
  const {currentOpenApp, closeApplication} = useWindows(); 

  const handleCloseClick = (item: OpenApp | undefined) => {
    if (item == undefined) return;
    closeApplication(item.id);
  };

  return (
    <Link to="/home" key="home">
    <div className="group flex items-center justify-center w-12 h-10 
      text-[#1f1f1f] bg-transparent transition-colors duration-150 hover:bg-[#e81123]"
      onClick={() => handleCloseClick(currentOpenApp)}
    >
        <MdClose className="text-lg transition-colors duration-150 group-hover:text-white"/>
    </div>
    </Link>
  );
}
