import { NavLink } from "react-router-dom";

const links = [
  { to: "/home", label: "Home", icon: "🏠" },
  { to: "/world", label: "Wereld", icon: "🌍" },
  { to: "/profile", label: "Voortgang", icon: "📊" },
  { to: "/profile", label: "Profiel", icon: "👤" },
  { to: "/settings", label: "Instellingen", icon: "⚙️" },
];

export default function BottomNav() {
  return (
    <nav className="fixed inset-x-0 bottom-0 flex justify-around border-t border-neutral bg-background py-2 md:hidden">
      {links.map((link) => (
        <NavLink
          key={link.label}
          to={link.to}
          className={({ isActive }) =>
            `flex flex-col items-center gap-0.5 rounded-lg px-3 py-1 text-xs ${
              isActive ? "text-primary" : "text-body/70"
            }`
          }
        >
          <span className="text-lg">{link.icon}</span>
          {link.label}
        </NavLink>
      ))}
    </nav>
  );
}
