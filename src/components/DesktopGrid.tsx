export function DesktopGrid() {
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
      {/* Elk bestand / app = component */}
      <div>Item 1</div>
      <div>Item 2</div>
      {/* ... */}
    </div>
  );
}
