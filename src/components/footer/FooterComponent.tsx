import { IoIosSearch } from "react-icons/io";
import { IoChevronUpOutline, IoWifiOutline, IoVolumeMediumOutline, IoBatteryFullOutline } from "react-icons/io5";
import logo from "/windows11.svg";
import { CurrentDateTime } from "./CurrentDateTime";
import { useWindows } from "../../context/WindowsContextProvider";

export function FooterComponent() {
  const { openApps } = useWindows();

  return (
    <footer className="w-full grid grid-cols-[auto_1fr_auto] items-center px-4 py-1 border-t border-slate-700 bg-[#262626] text-white absolute bottom-0 left-0">
      <div className="flex items-center gap-2">
        <img
          src={logo}
          alt="windows logo"
          className="w-8 h-8 object-contain cursor-pointer hover:bg-white/10"
        />

        <div
          className="group flex items-center gap-2 px-3 py-1 rounded-full bg-[#595959] transition-all duration-150 border border-transparent
          focus-within:bg-[#262626] focus-within:border focus-within:border-white/30 hover:bg-white/10"
        >
          <IoIosSearch className="w-5 h-5 text-white/70 group-focus-within:text-blue-500" />

          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none text-sm text-white placeholder-white/50 w-42.5"
          />
        </div>

        <div className="flex items-center gap-1.5 h-full ml-1">
          {openApps.map((app) => {
            return (
              <div
                key={app.id}
                title={app.name}
                className="
                  group relative
                  h-10 w-10 
                  flex flex-col items-center justify-center 
                  rounded hover:bg-white/10 
                  cursor-pointer transition-all duration-150
                  bg-white/5
                "
              >
                <img 
                  src={app.icon} 
                  alt={app.name} 
                  className="w-6 h-6 object-contain"
                />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-[3px] bg-[#0078d4] rounded-t-full" />
              </div>
            );
          })}
        </div>
      </div>

      <div />
    
      <ul className="flex items-center gap-1 list-none text-sm">
        <li className="p-2 rounded hover:bg-white/10 cursor-pointer transition-colors">
          <IoChevronUpOutline className="w-4 h-4 text-white" />
        </li>

        <li className="p-2 flex rounded hover:bg-white/10 cursor-pointer transition-colors gap-2">
          <IoWifiOutline className="w-5 h-5 text-white" />
          <IoVolumeMediumOutline className="w-5 h-5 text-white" />
          <IoBatteryFullOutline className="w-5 h-5 text-white" />
        </li>

        <li className="px-2 py-1 rounded hover:bg-white/10 cursor-pointer transition-colors text-xs leading-tight text-right">
          <CurrentDateTime/>
        </li>
      </ul>
    </footer>
  );
}
