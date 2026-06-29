import { Link } from "react-router-dom";


export function DesktopGrid() {
  const desktopItems = [
    { id: 1, name: "CV_JustinVanLeuvenum.pdf", icon: "/pdf-logo.png", linkTo: "cv" },
  ];


  return (
    <div
      className="
        absolute inset-0
        grid
        grid-rows-9
        grid-flow-col
        auto-cols-[96px]
        gap-y-4 gap-x-2
        p-4 pb-[96px]
      "
    >
      {desktopItems.map((item) => (
        <Link to={`/${item.linkTo}`} key={item.name}>
        <div
          key={item.id}
          className="
            flex flex-col items-center justify-start
            w-[90px] h-[100px]
            p-2
            cursor-default
            select-none
            rounded-[4px]
            hover:bg-white/10 hover:backdrop-blur-[2px]
            active:bg-white/20
            transition-colors duration-100
            group
          "
        >
          <div className="w-12 h-12 flex items-center justify-center mb-1">
            <img 
              alt={`${item.name} logo`} 
              src={item.icon} 
              className="h-10 w-10 object-contain filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]"
            />
          </div>
          
          <span 
            className="
              text-white 
              text-[12px] 
              text-center 
              leading-[14px]
              w-full
              break-words
              line-clamp-2 /* max 2 lines */
              drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)] /* visibility light wallpapers */
            "
          >
            {item.name}
          </span>
        </div>
        </Link>
      ))}
    </div>
  );
}
