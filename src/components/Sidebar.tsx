import { NavLink } from "react-router-dom";

const links = [
  { to: "/home", label: "Home", icon: "🏠" },
  { to: "/world", label: "Wereld", icon: "🌍" },
  { to: "/profile", label: "Voortgang", icon: "📊" },
  { to: "/profile", label: "Profiel", icon: "👤" },
  { to: "/settings", label: "Instellingen", icon: "⚙️" },
];

export default function Sidebar() {
  return (
    <nav className="hidden w-56 shrink-0 border-r border-neutral bg-background p-4 md:block">
      <ul className="flex flex-col gap-1">
        {links.map((link) => (
          <li key={link.label}>
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-600 transition-colors ${
                  isActive
                    ? "bg-mint-light text-primary-dark"
                    : "text-body hover:bg-mint-light"
                }`
              }
            >
              <span>{link.icon}</span>
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
