import { FooterComponent } from "../../footer/FooterComponent";
import { AboutTextSection } from "./AboutText";
import { MdClose } from "react-icons/md";
import { CloseComponent } from "../../CloseComponent";
import { VscChromeMaximize, VscChromeMinimize } from "react-icons/vsc";
import { Link } from "react-router-dom";
import { useWindows } from "../../../context/WindowsContextProvider";
import type { OpenApp } from "../../../context/WindowsContext";

export function AboutScreen() {
  const { currentOpenApp, closeApplication } = useWindows();

  const handleCloseClick = (item: OpenApp | undefined) => {
    if (item == undefined) return;
    closeApplication(item.id);
  };

  return (
    <div className="w-full h-screen flex flex-col bg-[#f3f3f3] text-gray-900 select-none overflow-hidden">
      <div className="w-full h-10 bg-[#f3f3f3] flex items-center justify-between pl-3 border-b border-gray-200">
        <div className="flex items-center h-full pt-1.5">
          <div className="flex items-center gap-2 bg-white h-full px-3 py-1 rounded-t-md border-t border-x border-gray-300 text-xs font-medium text-gray-700 min-w-[140px]">
            <img
              src="/txt-file.png"
              alt="txt icon"
              className="w-3.5 h-3.5 object-contain"
            />
            <span className="truncate">AboutMe.txt</span>
            <Link to="/home" key="home">
              <button
                className="ml-auto hover:bg-gray-200 p-0.5 rounded-sm text-gray-500"
                onClick={() => handleCloseClick(currentOpenApp)}
              >
                <MdClose className="text-xs" />
              </button>
            </Link>
          </div>
        </div>

        <div className="flex items-center h-full">
          <button className="flex items-center justify-center w-11 h-full hover:bg-gray-200 transition-colors">
            <VscChromeMinimize className="text-sm text-gray-700" />
          </button>
          <button className="flex items-center justify-center w-11 h-full hover:bg-gray-200 transition-colors">
            <VscChromeMaximize className="text-xs text-gray-700" />
          </button>

          <CloseComponent />
        </div>
      </div>

      <div className="w-full h-8 bg-white border-b border-gray-200 flex items-center px-2 gap-1 text-xs text-gray-700">
        <button className="px-2 py-1 rounded hover:bg-gray-100 transition-colors">
          File
        </button>
        <button className="px-2 py-1 rounded hover:bg-gray-100 transition-colors">
          Edit
        </button>
        <button className="px-2 py-1 rounded hover:bg-gray-100 transition-colors">
          View
        </button>
      </div>

      <AboutTextSection />

      <div className="w-full h-6 bg-[#f3f3f3] border-t border-gray-200 flex items-center justify-end px-4 gap-6 text-[11px] text-gray-500 font-normal">
        <span>Ln 1, Col 1</span>
        <span>100%</span>
        <span>Windows (CRLF)</span>
        <span>UTF-8</span>
      </div>
      <FooterComponent />
    </div>
  );
}
