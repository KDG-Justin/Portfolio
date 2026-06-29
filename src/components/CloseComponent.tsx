import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";



export function CloseComponent() {
  return (
    <Link to="/home" key="home">
    <div className="group flex items-center justify-center w-12 h-10 
      text-[#1f1f1f] bg-transparent transition-colors duration-150 hover:bg-[#e81123]"
    >
        <MdClose className="text-lg transition-colors duration-150 group-hover:text-white"/>
    </div>
    </Link>
  );
}
