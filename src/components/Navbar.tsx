export default function Navbar() {
  return (
    <header className="flex items-center justify-between border-b border-neutral bg-background px-4 py-3 md:px-8">
      <span className="font-display text-xl font-700 text-primary">
        Wizzkidz World
      </span>
      <div className="flex items-center gap-4">
        <button
          aria-label="Meldingen"
          className="rounded-full p-2 hover:bg-mint-light"
        >
          🔔
        </button>
        <button
          aria-label="Profiel"
          className="flex items-center gap-2 rounded-full p-1 hover:bg-mint-light"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-mint text-sm text-white">
            👤
          </span>
        </button>
      </div>
    </header>
  );
}
