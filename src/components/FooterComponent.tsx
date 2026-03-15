

export function FooterComponent() {
  return (
    <footer
      className="
        w-full
        flex
        items-center
        justify-between
        px-8
        py-6
        border-t
        border-slate-700
      "
      style={{ backgroundColor: "#262626" , color: "white"}}
    >
      {/* Links */}
      <p className="text-sm font-semibold">Material Tailwind</p>

      {/* Rechts */}
      <ul className="flex items-center gap-8 list-none text-sm">
        <li className="hover:text-slate-300 cursor-pointer">About Us</li>
        <li className="hover:text-slate-300 cursor-pointer">Services</li>
        <li className="hover:text-slate-300 cursor-pointer">Blog</li>
        <li className="hover:text-slate-300 cursor-pointer">Contact</li>
      </ul>
    </footer>
  );
}
