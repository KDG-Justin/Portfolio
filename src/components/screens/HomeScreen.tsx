import { DesktopGrid } from "../DesktopGrid";
import { FooterComponent } from "../FooterComponent";

export function HomeScreen() {
  return (
    <div className="relative w-screen h-screen overflow-hidden">
      <DesktopGrid />
      <FooterComponent />
    </div>
  );
}
