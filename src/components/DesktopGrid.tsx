import { Link } from "react-router-dom";
import { useWindows } from "../context/WindowsContextProvider";


export function DesktopGrid() {
  const { openApplication } = useWindows(); 

  const desktopItems = [
    { id: 1, name: "CV.pdf", icon: "/pdf-logo.png", linkTo: "cv" },
    { id: 2, name: "AboutMe.txt", icon: "/txt-file.png", linkTo: "about" }
  ];

  const handleItemClick = (item: typeof desktopItems[0]) => {
    openApplication({
      id: item.id,
      name: item.name,
      icon: item.icon,
      link: item.linkTo
    });
  };

  return (
    <div
      className="
        absolute inset-0
        grid
        grid-flow-col
        grid-rows-[repeat(auto-fill,minmax(105px,1fr))]
        auto-cols-[96px]
        p-4 pb-[96px]
      "
    >
      {desktopItems.map((item) => (
        <Link 
          to={`/${item.linkTo}`} 
          key={item.id}
          onClick={() => handleItemClick(item)}
          className="w-[90px] h-[105px] block no-underline select-none"
        >
          <div
            className="
              flex flex-col items-center justify-start
              w-full h-full
              p-2
              cursor-default
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
                line-clamp-2
                drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]
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