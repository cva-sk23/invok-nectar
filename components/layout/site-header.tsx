export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="/" className="leading-tight">
          <div className="text-lg font-semibold tracking-tight">
            INVOK NECTAR
          </div>
          <div className="mt-1 text-xs font-medium text-slate-500">
            Technology with a Human Pulse
          </div>
        </a>

        <nav className="hidden gap-8 text-[15px] font-medium text-slate-700 md:flex">
          <a href="/" className="transition hover:text-slate-900">
            Home
          </a>
          <a href="/#products" className="transition hover:text-slate-900">
            Products
          </a>
          <a href="/#about" className="transition hover:text-slate-900">
            About Us
          </a>
          <a href="/#services" className="transition hover:text-slate-900">
            Services
          </a>
          <a href="/careers" className="transition hover:text-slate-900">
            Careers
          </a>
          <a href="/blog" className="transition hover:text-slate-900">
            Blog
          </a>
          <a href="/#contact" className="transition hover:text-slate-900">
            Contact
          </a>
        </nav>

        <a
          href="/#contact"
          className="rounded-lg bg-slate-900 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-800"
        >
          Get In Touch
        </a>
      </div>
    </header>
  );
}