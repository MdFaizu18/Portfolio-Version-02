export default function Header() {
  return (
    <div className="fixed top-6 left-0 w-full z-40 flex justify-center">
      <nav className="bg-gray-800 dark:bg-gray-950 rounded-full px-6 py-3 flex items-center gap-8 shadow-lg">
        <a
          href="#home"
          className="bg-theme-primary text-white px-6 py-2 rounded-full text-sm font-medium hover:bg-theme-primary-hover transition-colors"
        >
          Home
        </a>

        <a
          href="#service"
          className="text-white text-sm font-medium hover:text-theme-primary transition-colors"
        >
          Service
        </a>

        <a
          href="#resume"
          className="text-white text-sm font-medium hover:text-theme-primary transition-colors"
        >
          Experience
        </a>

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-theme-primary rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">MD</span>
          </div>
          <span className="text-white font-bold text-lg">FAIZU</span>
        </div>

        <a
          href="#email"
          className="text-white text-sm font-medium hover:text-theme-primary transition-colors"
        >
          Connect
        </a>

        <a
          href="#project"
          className="text-white text-sm font-medium hover:text-theme-primary transition-colors"
        >
          Project
        </a>

        <a
          href="#contact"
          className="text-white text-sm font-medium hover:text-theme-primary transition-colors"
        >
          Contact
        </a>
      </nav>
    </div>
  );
}
